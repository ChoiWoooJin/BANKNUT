package com.backend.backend.transaction.controller;


import com.backend.backend.transaction.dto.TransactionRequest;
import com.backend.backend.transaction.dto.TransactionResponse;
import com.backend.backend.transaction.dto.TransactionSummaryResponse;
import com.backend.backend.transaction.dto.TransferRequest;
import com.backend.backend.transaction.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class TransactionController {

    private final TransactionService transactionService;

    @PostMapping("/deposit")
    public ResponseEntity<TransactionResponse> deposit(
            @RequestBody TransactionRequest transactionRequest,
            @RequestParam Long atmId
            ){
        return ResponseEntity.ok(transactionService.deposit(atmId,transactionRequest));
    }

    @PostMapping("/withdraw")
    public ResponseEntity<TransactionResponse> withdraw(
            @RequestBody TransactionRequest transactionRequest,
            @RequestParam Long atmId

    ){
        return ResponseEntity.ok(transactionService.withdraw(atmId,transactionRequest));
    }


    @PostMapping("/transfer")
    public ResponseEntity<TransactionResponse> transfer(
            @RequestParam Long atmId,
            @RequestBody TransferRequest transactionRequest
    ){

    return ResponseEntity.ok(transactionService.transfer(atmId,transactionRequest));
    }

    @GetMapping("/transactions/summary")
    public ResponseEntity<List<TransactionSummaryResponse>> getTransactionSummary(@RequestParam("accountNum") Long accountNum) {
        List<TransactionSummaryResponse> summaries = transactionService.getStatement(accountNum);
        return ResponseEntity.ok(summaries);
    }
}
