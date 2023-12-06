package com.backend.backend.account.dto;


import com.backend.backend.account.domain.Account;
import lombok.Data;

@Data
public class AccountResponse {

    private Long accountNumber;

    public String userName;

    private Long balance;

    public AccountResponse(Account account) {
        this.accountNumber = account.getAccountNumber();

        if (account.getUser() != null) {
            this.userName = account.getUser().getName();
        } else {
            this.userName = null;
        }

        if (account.getBalance() != null) {
            this.balance = account.getBalance().longValue();
        } else {
            this.balance = 0L;
        }
    }

}
