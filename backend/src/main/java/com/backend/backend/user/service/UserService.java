package com.backend.backend.user.service;

import com.backend.backend.user.dto.UserRequest;
import com.backend.backend.user.dto.UserResponse;
import com.backend.backend.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;



    @Transactional
    public UserResponse join(UserRequest userRequest){
        return new UserResponse( userRepository.save(userRequest.toUser()));
    }
        
}
