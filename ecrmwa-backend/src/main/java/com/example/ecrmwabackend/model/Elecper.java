package com.example.ecrmwabackend.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

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

    public Elecper() {
    }

    public Elecper(Long elecper_id, String name, LocalDate sdate, LocalDate fdate, boolean archived) {
        this.elecper_id = elecper_id;
        this.name = name;
        this.sdate = sdate;
        this.fdate = fdate;
        this.archived = archived;
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

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 79 * hash + Objects.hashCode(this.elecper_id);
        hash = 79 * hash + Objects.hashCode(this.name);
        hash = 79 * hash + Objects.hashCode(this.sdate);
        hash = 79 * hash + Objects.hashCode(this.fdate);
        hash = 79 * hash + Objects.hashCode(this.archived);
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
        final Elecper other = (Elecper) obj;
        if (!Objects.equals(this.archived, other.archived)) {
            return false;
        }
        if (!Objects.equals(this.fdate, other.fdate)) {
            return false;
        }
        if (!Objects.equals(this.sdate, other.sdate)) {
            return false;
        }
        if (!Objects.equals(this.name, other.name)) {
            return false;
        }
        return Objects.equals(this.elecper_id, other.elecper_id);
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Elecper{");
        sb.append("elecper_id=").append(elecper_id);
        sb.append(", name='").append(name).append('\'');
        sb.append(", sdate='").append(sdate).append('\'');
        sb.append(", fdate='").append(fdate).append('\'');
        sb.append(", archived='").append(archived).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
