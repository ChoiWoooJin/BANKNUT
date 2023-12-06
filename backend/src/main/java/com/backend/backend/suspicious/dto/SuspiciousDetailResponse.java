package com.backend.backend.suspicious.dto;

import com.backend.backend.suspicious.domain.Description;
import com.backend.backend.suspicious.domain.Suspicious;
import lombok.Data;

import java.time.LocalDateTime;


@Data
public class SuspiciousDetailResponse {

    private Long suspiciousId;

    private LocalDateTime date;

    private Description description;

    private String descriptionVideo;

    private Long atm;

    public SuspiciousDetailResponse(Suspicious suspicious) {
        this.suspiciousId = suspicious.getSuspiciousId();
        this.date = suspicious.getDetectedTime();
        this.description = suspicious.getDescription();
        this.descriptionVideo = suspicious.getDescriptionVideo();
        this.atm = suspicious.getAtm().getId();
    }
}
