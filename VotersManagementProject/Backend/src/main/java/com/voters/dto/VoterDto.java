package com.voters.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
@Data
public class VoterDto {
	@NotNull(message="Name Cannot be null...")
	public String vName;
	@Email(message="mail can't be without @...")
	public String eMail;
	@Pattern(regexp="^\\d{10}$",message="Mobile number should be exactly 10 digits")
	public String mobile;
	@Min(18)
	@Max(150)
	public int age;
	@NotEmpty(message = "Gender is male/female/other")
	public String gender;
	@Column(unique=true)
	@Pattern(regexp = "^\\d{12}$", message = "Aadhaar number should contain exactly 12 digits")
	public String aadhaar;
	

}
