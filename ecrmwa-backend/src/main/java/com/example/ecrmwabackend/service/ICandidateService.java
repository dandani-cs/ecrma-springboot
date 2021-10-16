package com.example.ecrmwabackend.service;

import com.example.ecrmwabackend.model.Candidate;

import java.util.List;

public interface ICandidateService {
    List<Candidate> findAll();
    List<Candidate> findByName(String searchString);
    Candidate getCandidate(long id);
    Candidate addCandidate(Candidate candidate);
    Candidate updateCandidate(Candidate candidate);
    void deleteCandidate(Candidate candidate);
}
