package com.backend.backend.user.dto;

import com.backend.backend.user.domain.User;
import lombok.Data;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Data
public class UserRequest {


    private String faceId;

    private String name;

    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final int LENGTH = 8;

    private static String generateRandomString() {
        Random random = new Random();
        return IntStream.range(0, LENGTH)
                .mapToObj(i -> CHARACTERS.charAt(random.nextInt(CHARACTERS.length())))
                .map(String::valueOf)
                .collect(Collectors.joining());
    }


    public User toUser(){
        return User.builder()
                .registerDate(LocalDate.from(ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime()))
                .uuid(generateRandomString())
                .name(this.name)
                .faceId(faceId)
                .build();
    }
}
