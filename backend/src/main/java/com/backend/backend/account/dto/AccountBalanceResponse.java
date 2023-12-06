package com.backend.backend.account.dto;


import com.backend.backend.account.domain.Account;
import com.backend.backend.user.domain.User;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class AccountBalanceResponse {

    private BigDecimal balance;

    private String userName;

    public AccountBalanceResponse(Account account) {
        this.balance = account.getBalance();
        this.userName = account.getUser().getName();
    }

}
