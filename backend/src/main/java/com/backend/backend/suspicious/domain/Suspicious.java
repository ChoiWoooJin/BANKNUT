package com.backend.backend.suspicious.domain;


import com.backend.backend.atm.domain.Atm;
import com.backend.backend.user.domain.User;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@Getter
@DynamicInsert
public class Suspicious {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long suspiciousId;


    private String descriptionVideo;

    private LocalDateTime detectedTime;

    @Enumerated(EnumType.STRING)
    private Description description;

    @ManyToOne
    public Atm atm;

    @ManyToOne
    public User user;


    public void setAtm(Atm atm){
        this.atm = atm;
    }

    public void setUser(User user){
        this.user = user;
    }
}
