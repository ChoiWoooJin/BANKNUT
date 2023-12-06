package com.backend.backend.user.repository;

import com.backend.backend.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByFaceId(String faceId);


}
