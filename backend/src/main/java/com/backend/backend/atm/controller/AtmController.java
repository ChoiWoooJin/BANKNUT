package com.backend.backend.atm.controller;

import com.backend.backend.atm.dto.AtmBalanceResponse;
import com.backend.backend.atm.dto.AtmResponse;
import com.backend.backend.atm.service.AtmService;
import com.backend.backend.transaction.dto.TransactionRequest;
import com.backend.backend.transaction.dto.TransactionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/atm")
@RequiredArgsConstructor
public class AtmController {

    private final AtmService atmService;

    @PostMapping("/post")
    public void registerAtm() {
        atmService.registerAtms();
    }

    @GetMapping("/usage")
    public ResponseEntity<AtmResponse> getAtmUsage(
            @RequestParam("atmNum") Integer atmNum,
            @RequestParam("selectDate") String selectDate,
            @RequestParam("referenceDate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate referenceDate) {
        List<Long> usageData;
        try {
            usageData = atmService.getUsageByTypeAndReferenceDate(atmNum.longValue(), selectDate, referenceDate);
            return ResponseEntity.ok(new AtmResponse(usageData));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }


    @GetMapping("/all-transactions")
    public ResponseEntity<Page<TransactionResponse>> getAllTransaction(
            @RequestParam Long atmId,
            @RequestParam(defaultValue = "0") int page) {
        return ResponseEntity.ok(atmService.getAllTransactionsByAtmId(atmId, page));
    }

    @GetMapping("/all-transactions/type")
    public ResponseEntity<Page<TransactionResponse>> getTransactionsByAtmIdAndType(
            @RequestParam Long atmId,
            @RequestParam String type,
            @RequestParam(defaultValue = "0") int page) {
        return ResponseEntity.ok(atmService.getTransactionsByAtmIdAndType(atmId, type,page));
    }


    @GetMapping("/balance-details")
    public ResponseEntity<AtmBalanceResponse> getAtmBalanceDetails(
            @RequestParam Long atmId) {
        try {
            AtmBalanceResponse response = atmService.getAtmBalanceDetails(atmId);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

}


