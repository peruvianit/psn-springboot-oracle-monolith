/**
 * 
 */
package it.psn.app.common.util.email;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;

import it.psn.app.common.util.email.exception.EmailNonValidaException;

/**
 * @author Sergio Arellano.{PeruVianIT}
 *
 */
public class EmailUtils {
	
	/**
	 * 
	 * @param email
	 * 
	 * @throws EmailNonValidaException se l'email non è valida
	 */
	public static void verificaEmail(String email) throws EmailNonValidaException {
	   try {
	      InternetAddress emailAddr = new InternetAddress(email);
	      emailAddr.validate();
	   } catch (AddressException ex) {
	      throw EmailNonValidaException.invalido(email);
	   }
	}
	
	/**
	 * Estrae gli indirizzi dalla stringa tentando la split con "," se presente oppure ";" 
	 * @param toAddresses
	 * 
	 * @return
	 */
	public static String[] splitAddresses(String toAddresses) {
		if(toAddresses.indexOf(",")>-1){
			return toAddresses.split(",");
		}else if(toAddresses.indexOf(";")>-1){
			return toAddresses.split(";");
		}else{
			return new String[]{toAddresses};
		}
		
	}
}
