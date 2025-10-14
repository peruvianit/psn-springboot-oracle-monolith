package it.psn.app.service.exception;

import java.io.Serializable;

/**
 * Errore Serizio Sample
 * 
 * Sergio Arellano.{PeruVianIT}
 *
 */
public class SampleNotFoundException extends Exception implements Serializable{

	private static final long serialVersionUID = -1321491855663494417L;

	protected SampleNotFoundException(String messaggio) {
		super(messaggio);
	}

	/**
	 * Errore nella risposta
	 * 
	 * @param messaggio
	 * 
	 * @return
	 */
	public static SampleNotFoundException crea(String codice) {
		return new SampleNotFoundException("Non stato trovato Sample con il codice : " + codice);
	}
}
