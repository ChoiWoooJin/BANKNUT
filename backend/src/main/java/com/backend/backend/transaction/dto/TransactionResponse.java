package com.backend.backend.transaction.dto;

import com.backend.backend.transaction.domain.Transaction;
import com.backend.backend.transaction.domain.TransactionType;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class TransactionResponse {
    private Long transactionId;
    private Long accountNumber;
    private BigDecimal amount;
    private String name;
    private TransactionType transactionType;
    private LocalDateTime transactionDate;

    public TransactionResponse(Transaction transaction){
        this.amount = transaction.getAmount();
        this.transactionId = transaction.getTransactionId();
        this.name = transaction.getAccount().getUser().getName();
        this.transactionType = transaction.getTransactionType();
        this.accountNumber = transaction.getAccount().getAccountNumber();
        this.transactionDate = transaction.getTransactionDate();
    }

}
