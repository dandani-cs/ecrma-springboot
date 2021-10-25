package com.example.ecrmwabackend.service;

import com.example.ecrmwabackend.model.Campaigns;
import com.example.ecrmwabackend.repository.CampaignsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CampaignsService implements ICampaignsService {

    @Autowired
    private CampaignsRepository repository;

    @Override
    public List<Campaigns> getCampaigns() {
        return (List<Campaigns>) repository.findAll();
    }

    @Override
    public Campaigns getCampaign(Long campaign_id) {
        Optional optional = repository.findById(campaign_id);
        if(optional.isEmpty())
            return null;
        else
            return (Campaigns) optional.get();
    }

    @Override
    public Campaigns addCampaign(Campaigns campaign) {
        return repository.save(campaign);
    }

    @Override
    public Campaigns updateCampaign(Campaigns campaign) {
        return repository.save(campaign);
    }

    @Override
    public void deleteCampaign(Long campaign_id) {
        repository.deleteById(campaign_id);
    }

    @Override
    public List<String> getPartiesOfElecper(Long elecper_id) {
        return (List<String>) repository.getPartiesOfElecper(elecper_id);
    }

    @Override
    public List<String> getPositionsOfElecper(Long elecper_id) {
        return (List<String>) repository.getPositionsOfElecper(elecper_id);
    }

    @Override
    public List<Campaigns> getCampaignsPerId(Long id) {
        return (List<Campaigns>) repository.getCampaignsPerId(id);
    }
}