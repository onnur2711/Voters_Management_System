package com.voters.execptionHandling;

public class VoterAlreadyExistsException extends RuntimeException{

	public VoterAlreadyExistsException(String msg) {
		super(msg);
	}
	

}
