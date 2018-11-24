package com.basrikahveci.p2p;

import java.util.HashMap; 
import java.util.Map; 

public class Ledger {
	private static HashMap<String, String> withdrawMap = new HashMap<>(); 
	private static HashMap<String, String> seedMap = new HashMap<>();
	
	public HashMap<String, String> getWithdrawMap(){
		return withdrawMap;
	}
	
	public void addWithdrawNode(String id, String value){
		withdrawMap.put(id,value);
	}
	
	public HashMap<String, String> getSeedMap(){
		return withdrawMap;
	}
	
	public void addSeedNode(String id, String value){
		seedMap.put(id,value);
	}
	
}
