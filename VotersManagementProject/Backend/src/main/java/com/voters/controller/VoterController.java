package com.voters.controller;

import java.util.List;

import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.voters.dto.VoterDto;
import com.voters.entity.Voter;
import com.voters.service.VoterService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/votersapp")
public class VoterController {
	@Autowired
	private VoterService service;
	//1.REST API to insert voter
	@PostMapping("/insert")
	public ResponseEntity<?> insertVoter(@RequestBody @Valid VoterDto v) {
		 Object response = service.insertVoter(v);
		 return ResponseEntity.ok(response);
		
	}
	
	//2.REST API to readall voters
	@GetMapping("/readall")
	public ResponseEntity<?> getAllVoters(){
		Object response= service.readAllVoters();
			return ResponseEntity.ok(response);
	}
	//3.REST API to readone voter
	@GetMapping("/readone/{id}")
	public ResponseEntity<?> readOne(@PathVariable int id){
		Optional<Voter> response = service.readOne(id);
		return ResponseEntity.ok(response);
	}
	
	//4.REST API for update voters
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateVoter(@PathVariable int id,@RequestBody @Valid VoterDto nv){
		Object response = service.updateVoter(id, nv);
		return ResponseEntity.ok(response);
	}
	
	//5.REST API to delete voters
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteVoter(@PathVariable int id) {
		String response = service.deleteVoter(id);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/searchbyaadhaar/{aadhaar}")
	public ResponseEntity<?> searchByAadhaar(@PathVariable String aadhaar){
		Voter response=service.searchByAadhaar(aadhaar);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/searchbymobile/{mobile}")
	public ResponseEntity<?> searchByMobile(@PathVariable String mobile){
		Voter response=service.searchByMobile(mobile);
		return ResponseEntity.ok(response);
	}
}
