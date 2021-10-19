package com.example.ecrmwabackend.service;

import com.example.ecrmwabackend.model.User;
import com.example.ecrmwabackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {
    @Autowired
    private UserRepository repository;

    @Override
    public User addUser(User user) { return repository.save(user); }

    @Override
    public User updateUser(User user) { return repository.save(user); }

    @Override
    public List<User> getUsers() { return (List<User>) repository.findAll(); }

    @Override
    public User getUser(long id) {
        Optional<User> user = repository.findById(id);
        return user.isEmpty() ? null : user.get();
    }

    @Override
    public User findByEmailAndPassword(String email, String password)
    {
        Optional<User> user = repository.findByEmailAndPassword(email, password);
        return user.isEmpty() ? null : user.get();
    }

    @Override
    public User findByUUID(String uuid)
    {
        Optional<User> user = repository.findByUuid(uuid);
        return user.isEmpty() ? null : user.get();
    }
}
