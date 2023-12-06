package com.backend.backend.admin.repository;

import com.backend.backend.admin.domain.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository <Admin,Long> {
        Optional<Admin> findByAdminId(String adminId);
}
