package com.backend.backend.suspicious.controller;


import com.backend.backend.suspicious.dto.SuspiciousDetailResponse;
import com.backend.backend.suspicious.dto.SuspiciousRequest;
import com.backend.backend.suspicious.dto.SuspiciousResponse;
import com.backend.backend.suspicious.service.SuspiciousService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SuspiciousController {

    private final SuspiciousService suspiciousService;

    @PostMapping("/suspicious/post")
    public ResponseEntity<SuspiciousResponse> registerSuspicious(
            @RequestParam Long atmNum,
            @RequestParam Long userId,
            @RequestBody SuspiciousRequest suspiciousRequest){
        return ResponseEntity.ok(suspiciousService.register(atmNum,userId,suspiciousRequest));

    }


    @GetMapping("/suspicious/list")
    public ResponseEntity<SuspiciousResponse> suspiciousList(
            @RequestParam(name = "page", defaultValue = "0") int page
    ) {
        return ResponseEntity.ok(suspiciousService.getSuspiciousList(page));
    }

    @GetMapping("/suspicious/detail")
    public ResponseEntity<SuspiciousDetailResponse> detail (
            @RequestParam Long suspiciousId
    ) {
        return ResponseEntity.ok(suspiciousService.detail(suspiciousId));
    }
}
