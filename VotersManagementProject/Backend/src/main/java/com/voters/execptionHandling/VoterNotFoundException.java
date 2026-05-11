package com.voters.execptionHandling;

public class VoterNotFoundException extends RuntimeException{

	public VoterNotFoundException(String msg) {
		super(msg);
		
	}

}
