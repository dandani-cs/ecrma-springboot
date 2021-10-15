package com.example.ecrmwabackend.service;

import com.example.ecrmwabackend.model.Candidate;
import com.example.ecrmwabackend.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CandidateService {
    @Autowired
    private CandidateRepository repository;

    public Candidate getCandidate(Long id) {
        Optional optional = repository.findById(id);
        if(optional.isEmpty())
            return null;
        else
            return (Candidate) optional.get();
    }
}
