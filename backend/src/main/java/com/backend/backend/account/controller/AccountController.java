package com.backend.backend.account.controller;


import com.backend.backend.account.dto.*;
import com.backend.backend.account.service.AccountService;
import com.backend.backend.account.service.SendToFastApiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class AccountController {

    private final AccountService accountService;

    private final SendToFastApiService sendToFastApiService;
    @PostMapping("/account/register")
    public ResponseEntity<AccountResponse> register(
            @RequestBody AccountRequest accountRequest
    ) {
        return ResponseEntity.ok(accountService.registerAccount(accountRequest));
    }

    @PostMapping("/account/login")
    public ResponseEntity<Boolean> login(@RequestBody AccountCheckDto accountCheckDto){
        return ResponseEntity.ok(accountService.loginAccount(accountCheckDto));
    }

    @GetMapping("/account/balance")
    public ResponseEntity<AccountBalanceResponse> checkAccountBalance(@RequestParam Long accountNum) {
        AccountBalanceResponse balanceResponse = accountService.checkAccountBalance(accountNum);
        return ResponseEntity.ok(balanceResponse);
    }

    @PostMapping("/account/uuid")
    public ResponseEntity<String> checkIsValidAccount(@RequestBody IsValidAccountDto isValidAccountDto){
        return ResponseEntity.ok(accountService.findUserUUIDByNameAndAccountNumberAndPassword(isValidAccountDto));
    }

    @PostMapping(path = "/upload-images", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> uploadImages(
            @RequestPart("uuid") String uuid,
            @RequestPart("images") List<MultipartFile> images) throws IOException {

        SendToFastApiRequest sendToFastApiRequest = new SendToFastApiRequest();
        sendToFastApiRequest.setUuid(uuid);
        sendToFastApiRequest.setImages(images);

        sendToFastApiService.sendImagesToFastAPI(sendToFastApiRequest);

        return ResponseEntity.ok("Images uploaded successfully.");
    }
}
