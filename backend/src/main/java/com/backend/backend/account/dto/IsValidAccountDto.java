package com.backend.backend.account.dto;


import lombok.Data;

@Data
public class IsValidAccountDto {

    private Long accountNum;

    private int password;

    public String name;

}
