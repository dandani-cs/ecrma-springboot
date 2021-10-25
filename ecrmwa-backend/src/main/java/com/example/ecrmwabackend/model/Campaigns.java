package com.example.ecrmwabackend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.HashMap;
import java.util.Objects;

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
    @JsonIgnoreProperties(value = {"Campaigns", "hibernateLazyInitializer"})
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "id")
    private Candidate candidate;

    @ManyToOne(fetch = FetchType.LAZY)
    //@Column(nullable = false)
    @JsonIgnoreProperties(value = {"Campaigns", "hibernateLazyInitializer"})
    @OnDelete(action = OnDeleteAction.CASCADE)
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
        int hash = 7;
        hash = 79 * hash + Objects.hashCode(this.campaign_id);
        hash = 79 * hash + Objects.hashCode(this.candidate);
        hash = 79 * hash + Objects.hashCode(this.elecper);
        hash = 79 * hash + Objects.hashCode(this.party);
        hash = 79 * hash + Objects.hashCode(this.position);
        hash = 79 * hash + Objects.hashCode(this.platform);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Campaigns other = (Campaigns) obj;
        if (!Objects.equals(this.candidate, other.candidate)) {
            return false;
        }
        if (!Objects.equals(this.elecper, other.elecper)) {
            return false;
        }
        if (!Objects.equals(this.party, other.party)) {
            return false;
        }
        if (!Objects.equals(this.position, other.position)) {
            return false;
        }
        if (!Objects.equals(this.platform, other.platform)) {
            return false;
        }
        return Objects.equals(this.campaign_id, other.campaign_id);
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Campaigns{");
        sb.append("campaign_id=").append(campaign_id);
        sb.append(", candidate='").append(candidate).append('\'');
        sb.append(", elecper='").append(elecper).append('\'');
        sb.append(", party='").append(party).append('\'');
        sb.append(", position='").append(position).append('\'');
        sb.append(", platform='").append(platform).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
