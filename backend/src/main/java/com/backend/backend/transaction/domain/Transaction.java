package com.backend.backend.transaction.domain;


import com.backend.backend.account.domain.Account;
import com.backend.backend.atm.domain.Atm;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Getter
@DynamicInsert
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long transactionId;

    private BigDecimal amount;

    @Enumerated(EnumType.STRING)
    private TransactionType transactionType;

    private LocalDateTime transactionDate;

    @ManyToOne
    private Account account;

    @ManyToOne
    private Atm atm;

    public void addAccount(Account account){
        this.account = account;
    }

    public void addAtm(Atm atm){
        this.atm = atm;
    }

    public void setTransactionType(TransactionType transactionType){
        this.transactionType = transactionType;
    }



}
