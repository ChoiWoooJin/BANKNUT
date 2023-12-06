package com.backend.backend.suspicious.dto;


import com.backend.backend.suspicious.domain.Description;
import com.backend.backend.suspicious.domain.Suspicious;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

@Data
public class SuspiciousRequest {


    private String descriptionVideo;

    private Description description;

    public Suspicious toSuspicious(){

        return Suspicious.builder()
                .detectedTime(ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime())
                .descriptionVideo(this.descriptionVideo)
                .description(this.description)
                .build();
    }





}
