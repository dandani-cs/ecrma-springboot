package com.example.ecrmwabackend.repository;

import com.example.ecrmwabackend.model.Candidate;
// <<<<<<< Campaign-Elecper
// import org.springframework.data.repository.CrudRepository;
// import org.springframework.stereotype.Repository;

// @Repository
// public interface CandidateRepository extends CrudRepository<Candidate, Long> {

// =======
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CandidateRepository extends CrudRepository<Candidate, Long> {
    @Query("SELECT c FROM Candidate c WHERE CONCAT(c.first_name, c.last_name, c.middle_initial) like %:searchString%")
    List<Candidate> findByName(@Param("searchString") String searchString);
}
