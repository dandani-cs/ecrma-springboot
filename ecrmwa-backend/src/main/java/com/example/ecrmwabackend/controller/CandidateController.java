package com.example.ecrmwabackend.controller;

import com.example.ecrmwabackend.model.Candidate;
import com.example.ecrmwabackend.service.ICandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class CandidateController {
    @Autowired
    private ICandidateService service;

    @RequestMapping("/api/candidates")
    public List<Candidate> findCandidates() { return service.findAll(); }

    @RequestMapping("/api/get-candidate/{id}")
    public Candidate getCandidate(@PathVariable long id) { return service.getCandidate(id); }

    @RequestMapping(value = "/api/add-candidate", method = RequestMethod.POST)
    public Candidate addCandidate(@RequestBody Candidate candidate) { return service.addCandidate(candidate); }
}
