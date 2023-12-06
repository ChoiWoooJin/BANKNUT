package com.backend.backend.suspicious.repository;

import com.backend.backend.suspicious.domain.Suspicious;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SuspiciousRepository extends JpaRepository<Suspicious,Long> {
    Page<Suspicious> findAll(Pageable pageable);
}
