package com.example.ecrmwabackend.service;

import com.example.ecrmwabackend.model.Candidate;
import com.example.ecrmwabackend.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CandidateService implements ICandidateService {
    @Autowired
    private CandidateRepository repository;

    @Override
    public List<Candidate> findAll() { return (List<Candidate>) repository.findAll(); }

    @Override
    public List<Candidate> findByName(String searchString) {
        return (List<Candidate>) repository.findByName(searchString);
    }

    @Override
    public Candidate addCandidate(Candidate candidate) {
        return repository.save(candidate);
    }

    @Override
    public Candidate updateCandidate(Candidate candidate) {
        return repository.save(candidate);
    }

    @Override
    public void deleteCandidate(Candidate candidate) {
        repository.delete(candidate);
    }

    @Override
    public Candidate getCandidate(long id) {
        Optional<Candidate> candidate = repository.findById(id);
        return candidate.isEmpty() ? null : candidate.get();
    }
}
