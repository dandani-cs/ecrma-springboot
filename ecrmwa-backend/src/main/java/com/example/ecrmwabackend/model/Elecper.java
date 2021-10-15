package com.example.ecrmwabackend.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

//AUTOMATICALLY CREATED TABLE DEETS
/*
+------------+--------------+------+-----+---------+-------+
| Field      | Type         | Null | Key | Default | Extra |
+------------+--------------+------+-----+---------+-------+
| elecper_id | bigint       | NO   | PRI | NULL    |       |
| archived   | bit(1)       | NO   |     | NULL    |       |
| fdate      | date         | YES  |     | NULL    |       |
| name       | varchar(255) | YES  |     | NULL    |       |
| sdate      | date         | YES  |     | NULL    |       |
+------------+--------------+------+-----+---------+-------+
 */

@Entity
@Table(name = "Elecper")
public class Elecper {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long elecper_id;

    String name;
    LocalDate sdate;
    LocalDate fdate;
    boolean archived;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "elecper", orphanRemoval = true)
    private List<Campaigns> campaigns;

    public Elecper() {
    }

    public Elecper(Long elecper_id, String name, LocalDate sdate, LocalDate fdate, boolean archived, List<Campaigns> campaigns) {
        this.elecper_id = elecper_id;
        this.name = name;
        this.sdate = sdate;
        this.fdate = fdate;
        this.archived = archived;
        this.campaigns = campaigns;
    }

    public Long getElecper_id() {
        return elecper_id;
    }

    public void setElecper_id(Long elecper_id) {
        this.elecper_id = elecper_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getSdate() {
        return sdate;
    }

    public void setSdate(LocalDate sdate) {
        this.sdate = sdate;
    }

    public LocalDate getFdate() {
        return fdate;
    }

    public void setFdate(LocalDate fdate) {
        this.fdate = fdate;
    }

    public boolean isArchived() {
        return archived;
    }

    public void setArchived(boolean archived) {
        this.archived = archived;
    }

    public List<Campaigns> getCampaigns() {
        return campaigns;
    }

    public void setCampaigns(List<Campaigns> campaigns) {
        this.campaigns = campaigns;
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
