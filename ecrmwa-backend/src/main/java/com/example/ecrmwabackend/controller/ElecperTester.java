package com.example.ecrmwabackend.controller;

import com.example.ecrmwabackend.model.Elecper;
import com.example.ecrmwabackend.service.IElecperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class ElecperTester {

    @Autowired
    private IElecperService elecperService;

    @RequestMapping(value = "/ElecperTester/getElecpers")
    public List<Elecper> getElecpers() {
        return elecperService.getElecpers();
    }

    @RequestMapping(value = "/ElecperTester/getElecper/{elecper_id}")
    public Elecper getElecper(@PathVariable Long elecper_id) {
        return elecperService.getElecper(elecper_id);
    }

    @RequestMapping(value = "/ElecperTester/addElecper", method = RequestMethod.POST)
    public Elecper addElecper(@RequestBody Elecper elecper) {
        return elecperService.addElecper(elecper);
    }

    @RequestMapping(value = "/ElecperTester/updateElecper/{elecper_id}", method = RequestMethod.PUT)
    public Elecper updateElecper(@PathVariable Long elecper_id, @RequestBody Elecper elecper) {
        return elecperService.updateElecper(elecper);
    }

    @RequestMapping(value = "/ElecperTester/deleteElecper/{elecper_id}", method = RequestMethod.DELETE)
    public void deleteElecper(@PathVariable Long elecper_id) {
        elecperService.deleteElecper(elecper_id);
    }

    @RequestMapping(value = "/ElecperTester/updateElecperArchive/{elecper_id}", method = RequestMethod.PATCH)
    public void updateElecperArchive(@PathVariable Long elecper_id) {
        elecperService.updateElecperArchive(elecper_id);
    }
}
