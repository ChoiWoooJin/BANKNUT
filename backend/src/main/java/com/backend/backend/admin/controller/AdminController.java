package com.backend.backend.admin.controller;

import com.backend.backend.admin.dto.AdminRequest;
import com.backend.backend.admin.dto.AdminResponse;
import com.backend.backend.admin.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @PostMapping("/register")
    public ResponseEntity<AdminResponse> register(@RequestBody AdminRequest adminRequest) {
        AdminResponse response = adminService.register(adminRequest);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody AdminRequest adminRequest) {
        boolean result = adminService.login(adminRequest);
        if (result) {
            return ResponseEntity.ok("로그인 성공");
        } else {
            return ResponseEntity.badRequest().body("로그인 실패");
        }
    }
}






