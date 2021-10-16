package com.example.ecrmwabackend.service;

import com.example.ecrmwabackend.model.Campaigns;

import java.util.List;

public interface ICampaignsService {

    List<Campaigns> getCampaigns();
    Campaigns getCampaign(Long campaign_id);
    Campaigns addCampaign(Campaigns campaign);
    Campaigns updateCampaign(Campaigns campaign);
    void deleteCampaign(Long campaign_id);
    List<String> getPartiesOfElecper(Long elecper_id);
    List<String> getPositionsOfElecper(Long elecper_id);
}
