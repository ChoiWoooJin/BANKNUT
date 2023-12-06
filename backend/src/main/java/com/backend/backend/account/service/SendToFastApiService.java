package com.backend.backend.account.service;

import com.backend.backend.account.dto.SendToFastApiRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class SendToFastApiService {

    private static final String FASTAPI_ENDPOINT = "http://192.168.100.60:8000/upload_and_train/";


    public void sendImagesToFastAPI(SendToFastApiRequest request) throws IOException {

        RestTemplate restTemplate = new RestTemplate();


        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("uuid", request.getUuid());

        for (MultipartFile file : request.getImages()) {
            body.add("files", new NamedByteArrayResource(file.getBytes(), file.getOriginalFilename()));
            log.info("body {}", file.getOriginalFilename());
        }

        HttpEntity<MultiValueMap<String, Object>> entity = new HttpEntity<>(body, headers);



        try {
            ResponseEntity<String> response = restTemplate.postForEntity(FASTAPI_ENDPOINT, entity, String.class);
            if (response.getStatusCode() != HttpStatus.OK) {
                // 응답 상태 코드가 OK가 아닐 경우 처리
                throw new RuntimeException("Failed to send data to FastAPI: " + response.getBody());
            }
        } catch (RestClientException e) {
            // RestTemplate 호출 중 발생한 예외 처리
            throw new RuntimeException("Error occurred while calling FastAPI: " + e.getMessage(), e);
        }
    }
}
