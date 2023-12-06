package com.backend.backend.suspicious.dto;


import com.backend.backend.suspicious.domain.Description;
import com.backend.backend.suspicious.domain.Suspicious;
import lombok.Data;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
public class SuspiciousResponse {

    private long totalPage;

    private List<InnerData> list = new ArrayList<>();

    public SuspiciousResponse(Page<Suspicious> suspiciousPage) {
        this.totalPage = suspiciousPage.getTotalPages();
        for (Suspicious suspicious : suspiciousPage.getContent()) {
            this.list.add(new InnerData(suspicious));
        }
    }

    // Newly added constructor
    public SuspiciousResponse(Suspicious suspicious) {
        this.list.add(new InnerData(suspicious));
    }

    @Data
    static class InnerData {
        private Long suspiciousId;

        private LocalDateTime date;

        private Description description;

        private Long atm;

        public InnerData(Suspicious suspicious) {
            this.suspiciousId = suspicious.getSuspiciousId();
            this.date = suspicious.getDetectedTime();
            this.description = suspicious.getDescription();
            this.atm = suspicious.getAtm().getId();
        }
    }
}
