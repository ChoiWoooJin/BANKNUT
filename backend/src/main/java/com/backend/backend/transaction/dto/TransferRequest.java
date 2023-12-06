package com.backend.backend.transaction.dto;


import com.backend.backend.transaction.domain.Transaction;
import com.backend.backend.transaction.domain.TransactionType;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

@Data
public class TransferRequest {


    private Long amount;

    private int password;

    private TransactionType transactionType;

    private Long accountNumber;

    private Long receiver;

    public Transaction toTransaction(){
        return Transaction.builder()
                .amount(BigDecimal.valueOf(this.amount))
                .transactionType(this.transactionType)
                .transactionDate(ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime())
                .build();
    }

}
