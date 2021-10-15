package com.example.ecrmwabackend.controller;

import com.example.ecrmwabackend.model.Campaigns;
import com.example.ecrmwabackend.service.CandidateService;
import com.example.ecrmwabackend.service.ElecperService;
import com.example.ecrmwabackend.service.ICampaignsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class CampaignsTester {

    @Autowired
    private ICampaignsService campaignsService;

    @Autowired
    private CandidateService candidateService;

    @Autowired
    private ElecperService elecperService;

    @RequestMapping(value = "/CampaignsTester/getCampaigns")
    public List<Campaigns> getCampaigns() {
        return campaignsService.getCampaigns();
    }

    @RequestMapping(value = "/CampaignsTester/getCampaign/{campaign_id}")
    public Campaigns getCampaign(@PathVariable Long campaign_id) {
        return campaignsService.getCampaign(campaign_id);
    }

    @RequestMapping(value = "/CampaignsTester/addCampaign", method = RequestMethod.POST)
    public Campaigns addCampaign(@RequestBody Campaigns campaign) {
        return campaignsService.addCampaign(campaign);
    }

    @RequestMapping(value = "/CampaignsTester/updateCampaign/{campaign_id}/{id}/{elecper_id}", method = RequestMethod.PUT)
    public Campaigns updateCampaign(@PathVariable Long campaign_id, @PathVariable Long id, @PathVariable Long elecper_id, @RequestBody Campaigns campaign) {
        if(id != -1) {
            campaign.setCandidate(candidateService.getCandidate(id));
        }
        if(elecper_id != -1) {
            campaign.setElecper(elecperService.getElecper(elecper_id));
        }
        return campaignsService.updateCampaign(campaign);
    }

    @RequestMapping(value = "/CampaignsTester/deleteCampaign/{campaign_id}", method = RequestMethod.DELETE)
    public void deleteCampaign(@PathVariable Long campaign_id) {
        campaignsService.deleteCampaign(campaign_id);
    }

    @RequestMapping(value = "/CampaignsTester/getPartiesOfElecper/{elecper_id}")
    public List<String> getPartiesOfElecper(@PathVariable Long elecper_id) {
        return campaignsService.getPartiesOfElecper(elecper_id);
    }

    @RequestMapping(value = "/CampaignsTester/getPositionsOfElecper/{elecper_id}")
    public List<String> getPositionsOfElecper(@PathVariable Long elecper_id) {
        return campaignsService.getPositionsOfElecper(elecper_id);
    }
}
