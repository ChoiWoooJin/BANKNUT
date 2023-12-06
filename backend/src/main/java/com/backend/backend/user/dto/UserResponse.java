package com.backend.backend.user.dto;

import com.backend.backend.account.domain.Account;
import com.backend.backend.user.domain.User;
import lombok.Data;

import java.util.List;

@Data
public class UserResponse {

    private String name;

    private String accountNumber;

    public UserResponse(User user){
        this.name = user.getName();
    }
}
