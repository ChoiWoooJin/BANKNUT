package com.backend.backend.user.controller;


import com.backend.backend.user.dto.UserRequest;
import com.backend.backend.user.dto.UserResponse;
import com.backend.backend.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserController {

    private final UserService userService;

    @PostMapping("/user/register")
    public ResponseEntity<UserResponse> register(
            @RequestBody UserRequest userRequest
            ){
        return ResponseEntity.ok(userService.join(userRequest));
    }


}
