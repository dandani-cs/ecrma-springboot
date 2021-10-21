package com.example.ecrmwabackend.controller;

import com.example.ecrmwabackend.model.User;
import com.example.ecrmwabackend.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class UserController {
    @Autowired
    private IUserService service;

    // TODO: remove this in the future
    @RequestMapping(value = "/api/users/show")
    public List<User> showUsers()  { return service.getUsers(); }

    @RequestMapping(value = "/api/users/add", method = RequestMethod.POST)
    public User addUser(@RequestBody User user) { return service.addUser(user); }

    @RequestMapping(value = "/api/users/logout", method = RequestMethod.POST)
    public User logoutUser(@RequestBody String uuid)
    {
        User authUser = service.findByUUID(uuid);
        if(authUser != null)
        {
            authUser.setIs_logged_in(false);
            authUser.setUuid("");
            service.updateUser(authUser);
        }
        return authUser;
    }

    @RequestMapping(value = "/api/users/login", method = RequestMethod.POST)
    public User loginUser(@RequestBody User credentials)
    {
        // TODO: maybe hash password
        String email = credentials.getEmail();
        String pass  = credentials.getPassword();

        User authUser = service.findByEmailAndPassword(email, pass);

        if(authUser != null && !authUser.getIs_logged_in())
        {
            authUser.setIs_logged_in(true);
            authUser.setUuid(UUID.randomUUID().toString());
            service.updateUser(authUser);
            System.out.println("User UUID: " + authUser.getUuid());
        }

        return authUser;
    }
}
