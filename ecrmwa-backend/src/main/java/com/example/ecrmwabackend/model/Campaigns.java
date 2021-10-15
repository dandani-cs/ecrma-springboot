package com.example.ecrmwabackend.model;

import javax.persistence.*;
import java.util.HashMap;

/*
+-------------+--------------+------+-----+---------+-------+
| Field       | Type         | Null | Key | Default | Extra |
+-------------+--------------+------+-----+---------+-------+
| campaign_id | bigint       | NO   | PRI | NULL    |       |
| party       | varchar(255) | YES  |     | NULL    |       |
| platform    | varchar(255) | YES  |     | NULL    |       |
| position    | varchar(255) | YES  |     | NULL    |       |
| id          | bigint       | YES  | MUL | NULL    |       |
| elecper_id  | bigint       | YES  | MUL | NULL    |       |
+-------------+--------------+------+-----+---------+-------+
 */

@Entity
@Table(name = "Campaigns")
public class Campaigns {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long campaign_id;

    @ManyToOne(fetch = FetchType.LAZY)
    //@Column(nullable = false)
    @JoinColumn(name = "id")
    private Candidate candidate;

    @ManyToOne(fetch = FetchType.LAZY)
    //@Column(nullable = false)
    @JoinColumn(name = "elecper_id")
    private Elecper elecper;

    private String party;
    private String position;
    private String platform;


    public Campaigns() {
    }

    public Campaigns(Long campaign_id, Candidate candidate, Elecper elecper, String party, String position, String platform) {
        this.campaign_id = campaign_id;
        this.candidate = candidate;
        this.elecper = elecper;
        this.party = party;
        this.position = position;
        this.platform = platform;
    }

    public Long getCampaign_id() {
        return campaign_id;
    }

    public void setCampaign_id(Long campaign_id) {
        this.campaign_id = campaign_id;
    }

    public void setCandidate(Candidate candidate) {
        this.candidate = candidate;
    }

    public Candidate getCandidate() {
        return candidate;
    }

    public Elecper getElecper() {
        return elecper;
    }

    public void setElecper(Elecper elecper) {
        this.elecper = elecper;
    }

    public String getParty() {
        return party;
    }

    public void setParty(String party) {
        this.party = party;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }

    @Override
    public String toString() {
        return super.toString();
    }
}
