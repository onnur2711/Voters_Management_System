package com.voters.execptionHandling;

import java.util.HashMap;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
@RestControllerAdvice
public class VoterException {
	@ExceptionHandler
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public Map<String,String> exceptionHandling(MethodArgumentNotValidException e) {
		Map<String, String> map = new HashMap<>();
		e.getBindingResult().getFieldErrors().forEach(err->map.put(err.getField(), err.getDefaultMessage()));
		return map;
	}
	@ExceptionHandler(VoterNotFoundException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public Map<String,String> voterException(VoterNotFoundException v){
		Map<String, String> map = new HashMap<>();
		map.put("Message", v.getMessage());
		
		return map;
		
	}
	@ExceptionHandler
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public Map<String, String> voterAlreadyExists(VoterAlreadyExistsException e){
		Map<String, String> map = new HashMap<>();
		map.put("Message",e.getMessage());
		return map;
		
	}
	

}
