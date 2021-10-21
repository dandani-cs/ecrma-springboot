package com.example.ecrmwabackend.repository;

import com.example.ecrmwabackend.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByEmailAndPassword(String email, String password);
    Optional<User> findByUuid(String uuid);
}