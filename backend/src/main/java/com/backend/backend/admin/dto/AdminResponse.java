package com.backend.backend.admin.dto;


import com.backend.backend.admin.domain.Admin;
import lombok.Data;

@Data
public class AdminResponse {

    private String adminId;

    public AdminResponse (Admin admin){
        this.adminId = admin.getAdminId();
    }
}
