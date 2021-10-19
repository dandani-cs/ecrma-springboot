package com.example.ecrmwabackend.model;

import javax.persistence.*;
import java.util.Objects;

@Entity()
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String email;
    private String password;
    private String uuid;
    private Boolean is_admin;
    private Boolean is_logged_in;

    public User()
    {

    }

    public User(long id, String email, String password, String uuid, Boolean is_admin, Boolean is_logged_in) {
        this.setId(id);
        this.setEmail(email);
        this.setPassword(password);
        this.setUuid(uuid);
        this.setIs_admin(is_admin);
        this.setIs_logged_in(is_logged_in);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getIs_admin() {
        return is_admin;
    }

    public void setIs_admin(Boolean is_admin) {
        this.is_admin = is_admin;
    }

    public Boolean getIs_logged_in() {
        return is_logged_in;
    }

    public void setIs_logged_in(Boolean is_logged_in) {
        this.is_logged_in = is_logged_in;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String recent_uuid) {
        this.uuid = recent_uuid;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final User other = (User) obj;
        if (this.email != other.email) {
            return false;
        }
        if (!Objects.equals(this.password, other.password)) {
            return false;
        }
        if (!Objects.equals(this.is_admin, other.is_admin)) {
            return false;
        }
        if (!Objects.equals(this.is_logged_in, other.is_logged_in)) {
            return false;
        }
        return Objects.equals(this.id, other.id);
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 79 * hash + Objects.hashCode(this.id);
        hash = 79 * hash + Objects.hashCode(this.email);
        hash = 79 * hash + Objects.hashCode(this.password);
        hash = 79 * hash + Objects.hashCode(this.is_admin);
        hash = 79 * hash + Objects.hashCode(this.is_logged_in);
        return hash;
    }
}
