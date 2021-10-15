package com.example.ecrmwabackend.model;

import javax.persistence.*;
import java.util.List;


@Table(name = "candidate")
@Entity
public class Candidate {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "candidate", orphanRemoval = true)
    private List<Campaigns> campaigns;

    public Candidate() {
    }

    public Candidate(Long id, List<Campaigns> campaigns) {
        this.id = id;
        this.campaigns = campaigns;
    }

    public List<Campaigns> getCampaigns() {
        return campaigns;
    }

    public void setCampaigns(List<Campaigns> campaigns) {
        this.campaigns = campaigns;
    }
}