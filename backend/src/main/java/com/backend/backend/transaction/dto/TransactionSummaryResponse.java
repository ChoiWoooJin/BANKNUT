package com.backend.backend.transaction.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class TransactionSummaryResponse {

    private LocalDateTime date;
    private String sender; // 보낸 사람
    private String recipient; // 받은 사람
    private BigDecimal transactionAmount; // 거래 금액
    private BigDecimal balance; // 잔액
}
