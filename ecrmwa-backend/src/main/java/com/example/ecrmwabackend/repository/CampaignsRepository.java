package com.example.ecrmwabackend.repository;

import com.example.ecrmwabackend.model.Campaigns;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface CampaignsRepository extends CrudRepository <Campaigns, Long> {

    @Query(value = "select distinct Party from Campaigns where elecper_id = ?1", nativeQuery = true)
    List<String> getPartiesOfElecper(Long elecper_id);

    @Query(value = "select distinct Position from Campaigns where elecper_id = ?1", nativeQuery = true)
    List<String> getPositionsOfElecper(Long elecper_id);
}
