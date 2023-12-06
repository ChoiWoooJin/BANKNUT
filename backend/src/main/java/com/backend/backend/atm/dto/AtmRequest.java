package com.backend.backend.atm.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class AtmRequest {

    private Integer atmNum;
    private String selectDate;


}
