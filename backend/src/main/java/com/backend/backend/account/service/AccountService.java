package com.backend.backend.account.service;


import com.backend.backend.account.domain.Account;
import com.backend.backend.account.dto.*;
import com.backend.backend.account.repository.AccountRepository;
import com.backend.backend.user.domain.User;
import com.backend.backend.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final AccountRepository accountRepository;

    private final UserRepository userRepository;

    @Transactional
    public AccountResponse registerAccount(AccountRequest accountRequest) {

        Long accountNum = accountRequest.getAccountNumber();
        if(accountRepository.findByAccountNumber(accountNum).isPresent()) {
            throw new IllegalArgumentException("계좌 번호가 이미 존재합니다.");
        }

        String faceId = accountRequest.getFaceId();
        Account account = accountRequest.toAccount();

        User user = userRepository.findByFaceId(faceId).orElseThrow();

        account.addUser(user);

        return new AccountResponse(accountRepository.save(account));
    }

    public Boolean loginAccount( AccountCheckDto accountCheckDto) {

        Account account = accountRepository.findByAccountNumber(accountCheckDto.getAccountNum())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 계좌 번호"));

        if (!account.getPassword().equals(accountCheckDto.getPassword())){
            throw new IllegalArgumentException("비밀번호가 틀립니다.");
        }

        return true;

    }

    public String findUserUUIDByNameAndAccountNumberAndPassword(IsValidAccountDto isValidAccountDto) {
        Account account = accountRepository.findByAccountNumberAndPassword(isValidAccountDto.getAccountNum(), isValidAccountDto.getPassword())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 계좌입니다."));

        if (account != null && account.getUser().getName().equals(isValidAccountDto.getName())) {
            return account.getUser().getUuid();
        } else {
            throw new RuntimeException("일치하는 계좌를 찾을 수 없습니다. ");
        }
    }

    public AccountBalanceResponse checkAccountBalance (Long accountNum){
        Account account = accountRepository.findByAccountNumber(accountNum)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 계좌 번호"));

        return new AccountBalanceResponse(account);
    }






}
