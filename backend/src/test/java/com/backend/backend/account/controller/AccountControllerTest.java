package com.backend.backend.account.controller;

import com.backend.backend.account.domain.Account;
import com.backend.backend.account.dto.AccountBalanceResponse;
import com.backend.backend.account.dto.AccountCheckDto;
import com.backend.backend.account.dto.AccountRequest;
import com.backend.backend.account.dto.AccountResponse;
import com.backend.backend.account.service.AccountService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class AccountControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AccountService accountService;

    private ObjectMapper objectMapper;

    @BeforeEach
    public void setup() {
        objectMapper = new ObjectMapper();
    }

    @Test
    public void testRegisterAccount() throws Exception {
        AccountRequest request = new AccountRequest();
        request.setFaceId("sampleFaceId");
        request.setPassword(1234);
        request.setAccountNumber(11111111L);

        Account account = request.toAccount();
        AccountResponse expectedResponse = new AccountResponse(account);

        when(accountService.registerAccount(ArgumentMatchers.eq(request))).thenReturn(expectedResponse);

        mockMvc.perform(post("/api/account/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk());
    }

    @Test
    public void testLoginAccount() throws Exception {
        AccountCheckDto dto = new AccountCheckDto();
        dto.setAccountNum(123456L);
        dto.setPassword(1234L);

        when(accountService.loginAccount(dto)).thenReturn(true);

        mockMvc.perform(post("/api/account/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isOk());
    }

    @Test
    public void testCheckAccountBalance() throws Exception {
        Long accountNum = 123L;

        Account build = Account.builder().accountId(1L)
                .balance(BigDecimal.valueOf(1000))
                .accountNumber(11111111L)
                .password(1234).build();

        AccountBalanceResponse response = new AccountBalanceResponse(build);
        when(accountService.checkAccountBalance(accountNum)).thenReturn(response);
        mockMvc.perform(get("/api/account/balance")
                        .param("accountNum", accountNum.toString()))
                .andExpect(status().isOk());
    }
}
