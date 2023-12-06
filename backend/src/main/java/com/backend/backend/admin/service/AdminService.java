package com.backend.backend.admin.service;


import com.backend.backend.admin.domain.Admin;
import com.backend.backend.admin.dto.AdminRequest;
import com.backend.backend.admin.dto.AdminResponse;
import com.backend.backend.admin.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final AdminRepository adminRepository;

    @Transactional
    public AdminResponse register(AdminRequest adminRequest){
        return new AdminResponse(adminRepository.save(adminRequest.toAdmin()));
    }

    public Boolean login(AdminRequest adminRequest){
        Admin admin = adminRepository.findByAdminId(adminRequest.getAdminId())
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다."));

        if (!admin.getPassword().equals(adminRequest.getPassword())){
            throw new IllegalArgumentException("비밀번호가 틀립니다.");
        }

        return true;
    }


}
