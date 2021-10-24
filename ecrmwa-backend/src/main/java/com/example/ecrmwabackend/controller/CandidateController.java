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

    @RequestMapping("/api/find-candidate-by-name")
    public List<Candidate> findByName(@RequestParam String searchString) { return service.findByName(searchString); }

    @RequestMapping(value = "/api/add-candidate", method = RequestMethod.POST)
    public Candidate addCandidate(@RequestBody Candidate candidate) { return service.addCandidate(candidate); }

    @RequestMapping(value = "/api/update-candidate", method = RequestMethod.POST)
    public Candidate updateCandidate(@RequestBody Candidate candidate) { return service.updateCandidate(candidate); }

    @RequestMapping(value = "/api/delete-candidate/{id}", method = RequestMethod.DELETE)
    public void deleteCandidate(@PathVariable long id) { service.deleteCandidate(service.getCandidate(id)); }
}
