package com.example.ecrmwabackend.service;

import com.example.ecrmwabackend.model.Campaigns;
import com.example.ecrmwabackend.model.Elecper;
import com.example.ecrmwabackend.repository.ElecperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ElecperService implements IElecperService{

    @Autowired
    private ElecperRepository repository;

    @Override
    public List<Elecper> getElecpers() {
        return (List<Elecper>) repository.findAll();
    }

    @Override
    public Elecper getElecper(Long elecper_id) {
        Optional optional = repository.findById(elecper_id);
        if(optional.isEmpty())
            return null;
        else
            return (Elecper) optional.get();
    }

    @Override
    public Elecper addElecper(Elecper elecper) {
        return repository.save(elecper);
    }

    @Override
    public Elecper updateElecper(Elecper elecper) {
        return repository.save(elecper);
    }

    @Override
    public void updateElecperArchive(Long elecper_id, boolean archive) {
        repository.updateArchive(elecper_id, archive);
    }

    @Override
    public void deleteElecper(Long elecper_id) {
        repository.deleteById(elecper_id);
    }
}
