package com.voters.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voters.dto.VoterDto;
import com.voters.entity.Voter;
import com.voters.execptionHandling.VoterAlreadyExistsException;
import com.voters.execptionHandling.VoterNotFoundException;
import com.voters.repository.VoterRepository;
@Service
public class VoterService {
	@Autowired
	public VoterRepository repository;
	
	//1.insert voters data
	public Object insertVoter(VoterDto v) {
		Optional<Voter> existing = repository.findByAadhaar(v.getAadhaar());
		if(existing.isPresent()) {
				throw new VoterAlreadyExistsException("voter already exists with this Addhar number");
		}
		Voter voter = Voter.build(0, 
				v.getVName(), v.getEMail(), v.getMobile(), v.getAge(), v.getGender(), v.getAadhaar());
		Voter saved = repository.save(voter);
		Map<String, Object> map  = new HashMap<>();
		map.put("message","Voter added successfully");
		map.put("data",saved);
		return map;
		
	}
	
	//2.readall data
	public Object readAllVoters(){
		List<Voter> voters = repository.findAll();
		if(voters.isEmpty()) {
			return "Database is empty";
			
			}
		return voters;
			
		
	}
	
	//3.readone data
	public Optional<Voter> readOne(int id){
		Optional<Voter> voter = repository.findById(id);
		if(voter.isPresent()) {
			return voter;
		}
		else {
			throw new VoterNotFoundException("Voter with id "+id+" doesn't exist in database" );
		}

		
	}
	
	//4.updating a voter data
	public Object updateVoter(int id, VoterDto nv) {
		Optional<Voter> opt = repository.findById(id);
		if(opt.isPresent()) {
			Voter existingVoter = opt.get();
			existingVoter.setVName(nv.getVName());
			existingVoter.setEMail(nv.getEMail());
			existingVoter.setMobile(nv.getMobile());
			existingVoter.setAge(nv.getAge());
			existingVoter.setGender(nv.getGender());
			existingVoter.setAadhaar(nv.getAadhaar());
			repository.save(existingVoter);
			Map<String, Object> map = new HashMap<>();
			map.put("message", "Voter updated Successfully");
			map.put("data", "updated");
			return map;
			
		}
		else {
			throw new VoterNotFoundException("Voter with id "+ id+" doesn't exist");
			
		}
	}
	
	//5.delete a voter data
	public String deleteVoter(int id) {
		Optional<Voter> opt = repository.findById(id);
		if(opt.isPresent()) {
			repository.delete(opt.get());
			return "Voter with id "+id+" is deleted";
		}else {
			
		throw new VoterNotFoundException("Voter with id "+id+" doesn't exist");
		}
	}
	
	public Voter searchByMobile(String mobile){

	     Optional<Voter> voter = repository.findByMobile(mobile);
	     if(voter.isPresent()) 
	    	return voter.get();
	    
	    else
	    	throw new VoterNotFoundException("Voter not found with mobile number "+ mobile);
	

	}
	public Voter searchByAadhaar(String aadhaar){

	     Optional<Voter> voter = repository.findByAadhaar(aadhaar);
	     if(voter.isPresent())
	    	return voter.get();
	    			 
	    else
	    	throw new VoterNotFoundException("Voter not found with Aadhaar number "+ aadhaar);
	

	}
}