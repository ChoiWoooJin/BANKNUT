package com.backend.backend.account.dto;


import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Data
public class SendToFastApiRequest {


    private String uuid;

    private List<MultipartFile> images = new ArrayList<>();
}
