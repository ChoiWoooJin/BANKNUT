package com.backend.backend.atm.repository;

import com.backend.backend.atm.domain.Atm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AtmRepository extends JpaRepository<Atm,Long> {
}
