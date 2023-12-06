package com.backend.backend.atm.dto;


import lombok.Data;

import java.math.BigDecimal;

@Data
public class AtmBalanceResponse {

    private BigDecimal atmCurrentBalance;
    private BigDecimal totalDepositAmount;
    private BigDecimal totalWithdrawalAmount;

    public AtmBalanceResponse(BigDecimal atmCurrentBalance, BigDecimal totalDepositAmount, BigDecimal totalWithdrawalAmount) {
        this.atmCurrentBalance = atmCurrentBalance;
        this.totalDepositAmount = totalDepositAmount;
        this.totalWithdrawalAmount = totalWithdrawalAmount;
    }
}
