package com.backend.backend.transaction.service;


import com.backend.backend.account.domain.Account;
import com.backend.backend.account.repository.AccountRepository;
import com.backend.backend.atm.domain.Atm;
import com.backend.backend.atm.repository.AtmRepository;
import com.backend.backend.transaction.domain.Transaction;
import com.backend.backend.transaction.domain.TransactionType;
import com.backend.backend.transaction.dto.TransactionSummaryResponse;
import com.backend.backend.transaction.dto.TransactionRequest;
import com.backend.backend.transaction.dto.TransactionResponse;
import com.backend.backend.transaction.dto.TransferRequest;
import com.backend.backend.transaction.repository.TransactionRepository;
import com.backend.backend.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TransactionService {

    private final TransactionRepository transactionRepository;

    private final AccountRepository accountRepository;

    private final AtmRepository atmRepository;

    private final UserRepository userRepository;

    @Transactional
    public TransactionResponse deposit(Long atmId, TransactionRequest transactionRequest) {
        Account account = accountRepository.findByAccountNumber(transactionRequest.getAccountNumber())
                .orElseThrow(() -> new IllegalArgumentException("Account not found"));


        if (account.getPassword() != transactionRequest.getPassword()) {
            throw new IllegalArgumentException("비밀번호가 틀립니다.");
        }


        account.addBalance(BigDecimal.valueOf(transactionRequest.getAmount()));
        accountRepository.save(account);


        Atm atm = atmRepository.findById(atmId).orElseThrow();


        atm.addBalance(BigDecimal.valueOf(transactionRequest.getAmount()));

        Transaction transaction = transactionRequest.toTransaction();
        transaction.addAccount(account);
        transaction.addAtm(atm);
        transaction.setTransactionType(TransactionType.입금);

        transaction = transactionRepository.save(transaction);

        atm.addTransaction(transaction);
        atmRepository.save(atm);


        return new TransactionResponse(transaction);
    }



    @Transactional
    public TransactionResponse withdraw(Long atmId, TransactionRequest transactionRequest) {
        Account account = accountRepository.findByAccountNumber(transactionRequest.getAccountNumber())
                .orElseThrow(() -> new IllegalArgumentException("Account not found"));

        if (account.getPassword() != transactionRequest.getPassword()) {
            throw new IllegalArgumentException("비밀번호가 틀립니다.");
        }

        if (account.getBalance().compareTo(BigDecimal.valueOf(transactionRequest.getAmount())) < 0) {
            throw new IllegalArgumentException("Insufficient funds");
        }

        Atm atm = atmRepository.findById(atmId).orElseThrow();
        if (transactionRequest.getAmount() >= atm.getAtmBalance().longValue()) {
            throw new IllegalArgumentException("Atm 잔액 부족");
        } else {
            atm.minusBalance(BigDecimal.valueOf(transactionRequest.getAmount())); // 출금시 ATM 잔액 감소
        }

        account.minusBalance(BigDecimal.valueOf(transactionRequest.getAmount()));

        accountRepository.save(account);

        Transaction transaction = transactionRequest.toTransaction();
        transaction.addAccount(account);
        transaction.addAtm(atm);
        transaction.setTransactionType(TransactionType.출금);

        transaction = transactionRepository.save(transaction);

        atm.addTransaction(transaction);
        atmRepository.save(atm);

        return new TransactionResponse(transaction);
    }


    @Transactional
    public TransactionResponse transfer(Long atmId, TransferRequest transferRequest) {
        Account senderAccount = accountRepository.findByAccountNumber(transferRequest.getAccountNumber())
                .orElseThrow(() -> new IllegalArgumentException("송금 계좌를 찾을 수 없습니다."));

        if (!senderAccount.getPassword().equals(transferRequest.getPassword())) {
            throw new IllegalArgumentException("비밀번호가 틀립니다.");
        }

        if (senderAccount.getBalance().compareTo(BigDecimal.valueOf(transferRequest.getAmount())) < 0) {
            throw new IllegalArgumentException("잔액이 부족합니다.");
        }

        Account receiverAccount = accountRepository.findByAccountNumber(transferRequest.getReceiver())
                .orElseThrow(() -> new IllegalArgumentException("수신 계좌를 찾을 수 없습니다."));

        // 송금 계좌에서 금액 빼기
        senderAccount.minusBalance(BigDecimal.valueOf(transferRequest.getAmount()));

        // 수신 계좌에 금액 추가
        receiverAccount.addBalance(BigDecimal.valueOf(transferRequest.getAmount()));

        Atm atm = atmRepository.findById(atmId).orElseThrow();

        Transaction sendTransaction = sendTransaction(transferRequest, senderAccount, atm);

        Transaction receiveTransaction = receiveTransaction(transferRequest, receiverAccount, atm);

        atm.addTransaction(sendTransaction);
        atm.addTransaction(receiveTransaction);
        atmRepository.save(atm);

        return new TransactionResponse(sendTransaction);
    }

    public List<TransactionSummaryResponse> getStatement(Long accountNum) {
        Account account = accountRepository.findByAccountNumber(accountNum)
                .orElseThrow(() -> new IllegalArgumentException("계좌를 찾을 수 있습니다.."));

        List<Transaction> transactions = transactionRepository.findByAccount(account);

        List<TransactionSummaryResponse> statements = new ArrayList<>();
        for (Transaction transaction : transactions) {
            TransactionSummaryResponse response = new TransactionSummaryResponse();
            response.setDate(transaction.getTransactionDate());
            response.setTransactionAmount(transaction.getAmount());
            response.setBalance(transaction.getAccount().getBalance());

            switch (transaction.getTransactionType()) {
                case 이체:
                    response.setRecipient(null);
                    response.setSender(account.getUser().getName());
                    break;
                case 이체_입금:
                    response.setRecipient(account.getUser().getName());
                    response.setSender(null);
                    break;
                default:
                    response.setRecipient(null);
                    response.setSender(null);
                    break;
            }

            statements.add(response);
        }

        return statements;
    }

    private Transaction receiveTransaction(TransferRequest transferRequest, Account receiverAccount, Atm atm) {
        Transaction receiveTransaction = transferRequest.toTransaction();
        receiveTransaction.addAccount(receiverAccount);
        receiveTransaction.addAtm(atm);
        receiveTransaction.setTransactionType(TransactionType.이체_입금); // Change this line
        receiveTransaction = transactionRepository.save(receiveTransaction);
        return receiveTransaction;
    }


    private Transaction sendTransaction(TransferRequest transferRequest, Account senderAccount, Atm atm) {
        Transaction sendTransaction = transferRequest.toTransaction();
        sendTransaction.addAccount(senderAccount);
        sendTransaction.addAtm(atm);
        sendTransaction.setTransactionType(TransactionType.이체);
        sendTransaction = transactionRepository.save(sendTransaction);
        return sendTransaction;
    }

}

