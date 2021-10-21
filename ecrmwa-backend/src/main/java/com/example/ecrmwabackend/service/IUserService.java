package com.example.ecrmwabackend.service;

import com.example.ecrmwabackend.model.User;

import java.util.List;

public interface IUserService {
    List<User> getUsers();
    User addUser(User user);
    User updateUser(User user);
    User getUser(long id);
    User findByEmailAndPassword(String email, String password);
    User findByUUID(String uuid);
}
