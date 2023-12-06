package com.backend.backend.atm.domain;


import com.backend.backend.transaction.domain.Transaction;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Getter
@DynamicInsert
public class Atm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal atmBalance;

    @OneToMany
    private List<Transaction> transactions = new ArrayList<>();

    public void addTransaction(Transaction transaction) {
        transactions.add(transaction);
        transaction.addAtm(this);
    }


    public void addBalance(BigDecimal money){
        this.atmBalance = this.atmBalance.add(money);
    }

    public void minusBalance(BigDecimal money){
        this.atmBalance = this.atmBalance.subtract(money);
    }

}
