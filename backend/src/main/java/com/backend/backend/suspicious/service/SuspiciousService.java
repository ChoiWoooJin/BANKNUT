package com.backend.backend.suspicious.service;


import com.backend.backend.atm.domain.Atm;
import com.backend.backend.atm.repository.AtmRepository;
import com.backend.backend.suspicious.domain.Suspicious;
import com.backend.backend.suspicious.dto.SuspiciousDetailResponse;
import com.backend.backend.suspicious.dto.SuspiciousRequest;
import com.backend.backend.suspicious.dto.SuspiciousResponse;
import com.backend.backend.suspicious.repository.SuspiciousRepository;
import com.backend.backend.user.domain.User;
import com.backend.backend.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Service
@RequiredArgsConstructor
public class SuspiciousService {

    private final SuspiciousRepository suspiciousRepository;

    private final AtmRepository atmRepository;

    private final UserRepository userRepository;

    @Transactional
    public SuspiciousResponse register(Long atmId, Long userId, SuspiciousRequest suspiciousRequest) {
        Suspicious suspicious = suspiciousRequest.toSuspicious();

        Atm atm = atmRepository.findById(atmId).orElseThrow();
        User user = userRepository.findById(userId).orElseThrow();

        suspicious.setAtm(atm);
        suspicious.setUser(user);

        Suspicious savedSuspicious = suspiciousRepository.save(suspicious);

        return new SuspiciousResponse(savedSuspicious);
    }

    public SuspiciousDetailResponse detail(Long detailId){
        return new SuspiciousDetailResponse(suspiciousRepository.findById(detailId).orElseThrow());

    }


    public SuspiciousResponse getSuspiciousList(int page) {
        Pageable pageable = PageRequest.of(page, 20, Sort.by("detectedTime").descending());
        Page<Suspicious> suspiciousPage = suspiciousRepository.findAll(pageable);
        return new SuspiciousResponse(suspiciousPage);
    }
}
