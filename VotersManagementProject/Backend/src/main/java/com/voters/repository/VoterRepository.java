package com.voters.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.voters.entity.Voter;

public interface VoterRepository extends JpaRepository <Voter, Integer>{
	Optional<Voter> findByAadhaar(String addhar);
	Optional<Voter> findById(int id); //abstract method
	
	Optional<Voter> findByMobile(String mobile);
	

}
