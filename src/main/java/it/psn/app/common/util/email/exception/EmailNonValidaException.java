/**
 * 
 */
package it.psn.app.common.util.email.exception;

/**
 * Validazione email
 * 
 * @author SLSAArel
 *
 * @version 1.0.0
 */
public class EmailNonValidaException extends Exception {

	private static final long serialVersionUID = 680385655764871263L;

	private EmailNonValidaException(String message) {
		super(message);
	}

	public static EmailNonValidaException invalido(String email) throws EmailNonValidaException {
		throw new EmailNonValidaException("Email non valido, controllare : " + email);
	}

}