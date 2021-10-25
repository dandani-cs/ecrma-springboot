package com.example.ecrmwabackend.service;

import com.example.ecrmwabackend.model.Elecper;

import java.util.List;

public interface IElecperService {

    List<Elecper> getElecpers();
    Elecper getElecper(Long elecper_id);
    Elecper addElecper(Elecper elecPer);
    Elecper updateElecper(Elecper elecPer);
    void updateElecperArchive(Long elecper_id);
    void deleteElecper(Long elecper_id);
}
