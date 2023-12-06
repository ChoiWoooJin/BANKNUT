package com.backend.backend.admin.dto;


import com.backend.backend.admin.domain.Admin;
import lombok.Data;

@Data
public class AdminRequest {


    private String adminId;

    private String password;

    public Admin toAdmin(){
        return Admin.builder()
                .adminId(this.adminId)
                .password(this.password)
                .build();

    }
}
