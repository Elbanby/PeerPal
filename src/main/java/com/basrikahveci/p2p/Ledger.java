package com.basrikahveci.p2p;

import java.util.HashMap; 
import java.util.Map; 

public class Ledger {
	private static HashMap<String, String> withdrawMap = new HashMap<>(); 
	private static HashMap<String, String> seedMap = new HashMap<>();
	
	public static HashMap<String, String> getWithdrawMap(){
		return withdrawMap;
	}
	
	public static void addWithdrawNode(String id, String value){
		withdrawMap.put(id,value);
	}
	
	public static HashMap<String, String> getSeedMap(){
		return withdrawMap;
	}
	
	public static void addSeedNode(String id, String value){
		seedMap.put(id,value);
	}
	
	public static void printMap(){
		System.out.println("The withdraw map is: " + withdrawMap.values());
		System.out.println("The withdraw map is: " + seedMap.values());
	}
	
}
