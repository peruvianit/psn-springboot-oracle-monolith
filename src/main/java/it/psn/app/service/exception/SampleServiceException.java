package it.psn.app.service.exception;

import java.io.Serializable;

/**
 * Errore Serizio Sample
 * 
 * Sergio Arellano.{PeruVianIT}
 *
 */
public class SampleServiceException extends Exception implements Serializable{

	private static final long serialVersionUID = -1321491855663494417L;

	protected SampleServiceException(String messaggio) {
		super(messaggio);
	}

	/**
	 * Errore nella risposta
	 * 
	 * @param messaggio
	 * 
	 * @return
	 */
	public static SampleServiceException crea(String messaggio) {
		return new SampleServiceException(messaggio);
	}
}
