package com.backend.backend.user.domain;

import com.backend.backend.account.domain.Account;
import com.backend.backend.suspicious.domain.Suspicious;
import com.backend.backend.verfication.domain.Verification;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@DynamicInsert
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String faceId;

    private String name;

    private String uuid;

    private LocalDate registerDate;

    @OneToMany
    private List<Verification> verifications = new ArrayList<>();

    @OneToMany
    private List<Account> accounts = new ArrayList<>();

    @OneToMany
    private List<Suspicious> suspiciousList = new ArrayList<>();

}
