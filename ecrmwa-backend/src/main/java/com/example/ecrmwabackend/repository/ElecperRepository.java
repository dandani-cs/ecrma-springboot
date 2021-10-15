package com.example.ecrmwabackend.repository;

import com.example.ecrmwabackend.model.Elecper;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ElecperRepository extends CrudRepository <Elecper, Long> {

    @Transactional
    @Modifying
    @Query("update Elecper set archived = ?2 where elecper_id = ?1")
    void updateArchive(Long elecper_id, boolean archive);
}
