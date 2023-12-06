package com.backend.backend.account.repository;

import com.backend.backend.account.domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account,Long> {

    Optional<Account> findByAccountNumber(Long accountNumber);

    Optional<Account> findByPassword(int password);

    Optional<Account> findByAccountNumberAndPassword(Long accountNumber, int password);

}
