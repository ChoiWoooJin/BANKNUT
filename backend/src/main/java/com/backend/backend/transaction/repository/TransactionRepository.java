package com.backend.backend.transaction.repository;

import com.backend.backend.account.domain.Account;
import com.backend.backend.atm.domain.Atm;
import com.backend.backend.transaction.domain.Transaction;
import com.backend.backend.transaction.domain.TransactionType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    Page<Transaction> findByAtm(Atm atm, Pageable pageable);

    Page<Transaction> findByAtmAndTransactionTypeIn(Atm atm, List<TransactionType> transactionTypes, Pageable pageable);


    List<Transaction> findByAccount(Account account);
    Page<Transaction> findByAtmAndTransactionType(Atm atm, TransactionType transactionType, Pageable pageable);

}
