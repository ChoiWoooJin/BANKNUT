package com.backend.backend.atm.dto;

import lombok.Data;

import java.util.List;

@Data
public class AtmResponse {

    private List<Long> usageData;

    public AtmResponse(List<Long> usageData) {
        this.usageData = usageData;
    }

}
