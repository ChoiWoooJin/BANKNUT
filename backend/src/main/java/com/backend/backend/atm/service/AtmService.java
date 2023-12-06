package com.backend.backend.atm.service;


import com.backend.backend.atm.domain.Atm;
import com.backend.backend.atm.dto.AtmBalanceResponse;
import com.backend.backend.atm.repository.AtmRepository;
import com.backend.backend.transaction.domain.Transaction;
import com.backend.backend.transaction.domain.TransactionType;
import com.backend.backend.transaction.dto.TransactionResponse;
import com.backend.backend.transaction.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AtmService {

    private final AtmRepository atmRepository;

    private final TransactionRepository transactionRepository;


    @Transactional
    public void registerAtms() {
        for (int i = 1; i <= 3; i++) {
            Atm atm = Atm.builder()
                    .atmBalance(BigDecimal.valueOf(10000000L))
                    .build();
            atmRepository.save(atm);
        }
    }


    public Page<TransactionResponse> getAllTransactionsByAtmId(Long atmId, int page) {

        Pageable pageable = PageRequest.of(page, 20, Sort.by("transactionDate").descending());

        Atm atm = getAtmById(atmId);
        Page<Transaction> transactions = transactionRepository.findByAtm(atm, pageable);
        return transactions.map(TransactionResponse::new);
    }

    public Page<TransactionResponse> getTransactionsByAtmIdAndType(Long atmId, String type, int page) {

        Pageable pageable = PageRequest.of(page, 20, Sort.by("transactionDate").descending());

        Atm atm = getAtmById(atmId);
        List<TransactionType> transactionTypes = new ArrayList<>();

        if ("이체".equals(type)) {
            transactionTypes.add(TransactionType.valueOf("이체"));
            transactionTypes.add(TransactionType.valueOf("이체_입금"));
        } else {
            transactionTypes.add(TransactionType.valueOf(type));
        }

        Page<Transaction> transactions = transactionRepository.findByAtmAndTransactionTypeIn(atm, transactionTypes, pageable);
        return transactions.map(TransactionResponse::new);
    }



    public AtmBalanceResponse getAtmBalanceDetails(Long atmId) {
        Atm atm = getAtmById(atmId);
        BigDecimal totalDepositAmount = BigDecimal.ZERO;
        BigDecimal totalWithdrawalAmount = BigDecimal.ZERO;

        for (Transaction transaction : atm.getTransactions()) {
            if (transaction.getTransactionType() == TransactionType.입금) {
                totalDepositAmount = totalDepositAmount.add(transaction.getAmount());
            } else if (transaction.getTransactionType() == TransactionType.출금) {
                totalWithdrawalAmount = totalWithdrawalAmount.add(transaction.getAmount());
            }
        }

        return new AtmBalanceResponse(atm.getAtmBalance(), totalDepositAmount, totalWithdrawalAmount);
    }




    public List<Long> getUsageByTypeAndReferenceDate(Long atmId, String selectDate, LocalDate referenceDate) {
        switch (selectDate) {
            case "time":
                return getHourlyUsageOnSpecificDate(atmId, referenceDate);
            case "date":
                return getDailyUsageInSpecificMonth(atmId, referenceDate.getMonth());
            case "month":
                return getMonthlyUsageInSpecificYear(atmId, referenceDate.getYear());
            default:
                throw new IllegalArgumentException("유효한 선택 형식을 입력하세요");
        }
    }

    public List<Long> getHourlyUsageOnSpecificDate(Long atmId, LocalDate specificDate) {
        Atm atm = getAtmById(atmId);
        List<Long> hourlyUsage = new ArrayList<>(Collections.nCopies(24, 0L));

        for (Transaction transaction : atm.getTransactions()) {
            if (transaction.getTransactionDate().toLocalDate().equals(specificDate)) {
                int hour = transaction.getTransactionDate().getHour();
                hourlyUsage.set(hour, hourlyUsage.get(hour) + 1);
            }
        }
        return hourlyUsage;
    }

    public List<Long> getDailyUsageInSpecificMonth(Long atmId, Month specificMonth) {
        Atm atm = getAtmById(atmId);
        List<Long> dailyUsage = new ArrayList<>(Collections.nCopies(31, 0L));

        for (Transaction transaction : atm.getTransactions()) {
            if (transaction.getTransactionDate().getMonth() == specificMonth) {
                int day = transaction.getTransactionDate().getDayOfMonth();
                dailyUsage.set(day - 1, dailyUsage.get(day - 1) + 1);
            }
        }
        return dailyUsage;
    }

    public List<Long> getMonthlyUsageInSpecificYear(Long atmId, int specificYear) {
        Atm atm = getAtmById(atmId);
        List<Long> monthlyUsage = new ArrayList<>(Collections.nCopies(12, 0L));

        for (Transaction transaction : atm.getTransactions()) {
            if (transaction.getTransactionDate().getYear() == specificYear) {
                int month = transaction.getTransactionDate().getMonthValue();
                monthlyUsage.set(month - 1, monthlyUsage.get(month - 1) + 1);
            }
        }
        return monthlyUsage;
    }


    private Atm getAtmById(Long atmId) {
        return atmRepository.findById(atmId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 ATM 입니다."));
    }


}
