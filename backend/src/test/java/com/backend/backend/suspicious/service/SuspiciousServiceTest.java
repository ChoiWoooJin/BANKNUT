package com.backend.backend.suspicious.service;

import com.backend.backend.atm.repository.AtmRepository;
import com.backend.backend.suspicious.domain.Description;
import com.backend.backend.suspicious.dto.SuspiciousRequest;
import com.backend.backend.user.domain.User;
import com.backend.backend.user.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
class SuspiciousServiceTest {

    @Autowired
    private SuspiciousService suspiciousService;

    @Autowired
    private AtmRepository atmRepository;

    @Autowired
    private UserRepository userRepository;

    @BeforeEach
    public void setUp() {


        for (long i = 0; i < 200; i++) {

            if (i % 2 == 0) {

                long atmId = 1;
                long userId = 1;

                SuspiciousRequest suspiciousRequest = new SuspiciousRequest();
                suspiciousRequest.setDescription(Description.두명이상인식);
                suspiciousRequest.setDescriptionVideo("video1");
                suspiciousService.register(atmId, userId, suspiciousRequest);

            } else {

                long atmId = 2;
                long userId = 2;

                SuspiciousRequest suspiciousRequest = new SuspiciousRequest();
                suspiciousRequest.setDescription(Description.보이스피싱의심);
                suspiciousRequest.setDescriptionVideo("video2");
                suspiciousService.register(atmId, userId, suspiciousRequest);

            }


        }
    }

    @Test
    public void register() {

    }

}