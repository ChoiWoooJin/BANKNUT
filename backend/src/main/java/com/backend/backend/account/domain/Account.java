package com.backend.backend.account.domain;


import com.backend.backend.transaction.domain.Transaction;
import com.backend.backend.user.domain.User;
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
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accountId;

    private BigDecimal balance = BigDecimal.valueOf(0);

    @Column(unique = true)
    private Long accountNumber;

    private Integer password;

    @ManyToOne
    private User user;

    @OneToMany
    private List<Transaction> transactions = new ArrayList<>();

    public void addUser(User user) {
        this.user = user;
    }

    public void addBalance(BigDecimal money) {
        this.balance = this.balance.add(money);
    }

    public void minusBalance(BigDecimal money) {
        this.balance = this.balance.subtract(money);
    }


}
