package com.backend.backend.account.dto;

import com.backend.backend.account.domain.Account;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class AccountRequest {

    private Long accountNumber;

    private int password;

    public String faceId;

    public Account toAccount(){
        return Account.builder()
                .accountNumber(accountNumber)
                .password(password)
                .balance(BigDecimal.valueOf(10000))
                .build();
    }
}
