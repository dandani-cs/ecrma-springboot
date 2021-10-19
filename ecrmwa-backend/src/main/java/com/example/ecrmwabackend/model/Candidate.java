package com.example.ecrmwabackend.model;

import javax.persistence.*;

import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "candidates")
public class Candidate {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String last_name;
    private String first_name;
    private char   middle_initial;

    private Date   birth_date;
    private Date   grad_date;

    private String religion;
    private String sex;
    private String degree;
    private String university;
    private String image_path;

    public Candidate()
    {

    }

    public Candidate(long   id, String last_name,
                     String first_name,
                     char   middle_initial,
                     Date   birth_date,
                     Date   grad_date,
                     String religion,
                     String sex,
                     String degree,
                     String university,
                     String image_path) {
        this.setId(id);
        this.setLast_name(last_name);
        this.setFirst_name(first_name);
        this.setMiddle_initial(middle_initial);
        this.setBirth_date(birth_date);
        this.setGrad_date(grad_date);
        this.setReligion(religion);
        this.setSex(sex);
        this.setDegree(degree);
        this.setUniversity(university);
        this.setImage_path(image_path);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public char getMiddle_initial() {
        return middle_initial;
    }

    public void setMiddle_initial(char middle_initial) {
        this.middle_initial = middle_initial;
    }

    public Date getBirth_date() {
        return birth_date;
    }

    public void setBirth_date(Date birth_date) {
        this.birth_date = birth_date;
    }

    public Date getGrad_date() {
        return grad_date;
    }

    public void setGrad_date(Date grad_date) {
        this.grad_date = grad_date;
    }

    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getImage_path() {
        return image_path;
    }

    public void setImage_path(String image_path) {
        this.image_path = image_path;
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
        final Candidate other = (Candidate) obj;
        if (this.first_name != other.first_name) {
            return false;
        }
        if (!Objects.equals(this.last_name, other.last_name)) {
            return false;
        }
        if (!Objects.equals(this.middle_initial, other.middle_initial)) {
            return false;
        }
        if (!Objects.equals(this.birth_date, other.birth_date)) {
            return false;
        }
        if (!Objects.equals(this.religion, other.religion)) {
            return false;
        }
        if (!Objects.equals(this.sex, other.sex)) {
            return false;
        }
        if (!Objects.equals(this.degree, other.degree)) {
            return false;
        }
        if (!Objects.equals(this.university, other.university)) {
            return false;
        }
        if (!Objects.equals(this.grad_date, other.grad_date)) {
            return false;
        }
        if (!Objects.equals(this.image_path, other.image_path)) {
            return false;
        }
        return Objects.equals(this.id, other.id);
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 79 * hash + Objects.hashCode(this.id);
        hash = 79 * hash + Objects.hashCode(this.first_name);
        hash = 79 * hash + Objects.hashCode(this.last_name);
        hash = 79 * hash + Objects.hashCode(this.middle_initial);
        hash = 79 * hash + Objects.hashCode(this.birth_date);
        hash = 79 * hash + Objects.hashCode(this.religion);
        hash = 79 * hash + Objects.hashCode(this.sex);
        hash = 79 * hash + Objects.hashCode(this.degree);
        hash = 79 * hash + Objects.hashCode(this.university);
        hash = 79 * hash + Objects.hashCode(this.grad_date);
        hash = 79 * hash + Objects.hashCode(this.image_path);
        return hash;
    }
}
