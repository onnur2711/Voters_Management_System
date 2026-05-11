package com.voters.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class Voter {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int vId;
	private String vName;
	private String eMail;
	private String mobile;
	private int age;
	private String gender;
	@Column(unique = true)
	private String aadhaar;
	
	
	

}
