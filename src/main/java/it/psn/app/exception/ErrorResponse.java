package it.psn.app.exception;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

/**
 * Oggetto contenente l'errore generato dall'applicazione da tornare alla vista
 * 
 */
public class ErrorResponse implements Serializable {

	private static final long serialVersionUID = 7972197004839122395L;

	private static final String TESTO_GENERICO_ERRORE_VALIDAZIONE = "Si sono verificati degli errori nella compilazione del modulo. Per favore controlla i dati inseriti";

	private String testo;
	private String stacktrace;
	private String messaggio;
	private String field;
	private Map<String, String> mapFieldMessage;
	private String details;

	/**
	 * Link per tornare ad un punto sicuro dell'applicazione
	 */
	private String safeLink;

	/**
	 * Testo descrittivo del link sicuro
	 */
	private String safeLinkText;
	
	public ErrorResponse() {
		super();
	}

	/**
	 * Crea un messaggio di errore applicativo gesibile dall'utente
	 * 
	 * @param message
	 * @return
	 */
	public static ErrorResponse createRecoverableError(String message) {
		return createRecoverableError(message, null);
	}

	/**
	 * Crea un messaggio di errore applicativo gesibile dall'utente
	 * 
	 * @param ex
	 * @return
	 */
	public static ErrorResponse createRecoverableError(Exception ex) {
		return createRecoverableError(ex.getMessage(), null);
	}

	/**
	 * Crea un messaggio di errore dal quale l'utente non può porre rimedio.
	 * 
	 * @param message
	 * @param details
	 * @return
	 */
	public static ErrorResponse createRecoverableError(String message, String details) {
		return new ErrorResponse(details, message, null);
	}
	
	public static ErrorResponse creaErrorResponsePerElemento(String campo, String testo, String messaggio) {
		if (testo != null) {
			return new ErrorResponse(campo, testo, messaggio);
		} else {
			return new ErrorResponse(campo, TESTO_GENERICO_ERRORE_VALIDAZIONE, messaggio);
		}
	}

	public static ErrorResponse creaErrorResponseSoloTesto(String testo) {
		if (testo != null) {
			return new ErrorResponse(testo);
		} else {
			return new ErrorResponse(TESTO_GENERICO_ERRORE_VALIDAZIONE);
		}
	}

	public static ErrorResponse creaErrorResponseDaEccezione(Throwable ex) {
		return new ErrorResponse(ex.getMessage(), ExceptionUtils.getStackTrace(ex));
	}

	public ErrorResponse(String testo) {
		super();
		this.testo = testo;
		this.messaggio = testo;
	}

	public ErrorResponse(String messaggio, String stacktrace) {
		super();
		this.messaggio = messaggio;
		this.stacktrace = stacktrace;
	}

	public ErrorResponse(String testo, String messaggio, String field) {
		super();
		this.testo = testo;
		this.messaggio = messaggio;
		this.field = field;
	}
	
	/**
	 * Errori di validazione dei form
	 * 
	 * @param errors
	 * @return
	 */
	public static ErrorResponse formValidationError(BindingResult errors) {
		Map<String, String> mapFieldMessage = new HashMap<String, String>();
		List<FieldError> errorsList = errors.getFieldErrors();
		for (FieldError currentError : errorsList) {
			String message = currentError.getCodes()[currentError.getCodes().length-1];
			message = message.replace("}", "").replace("{", "");
			mapFieldMessage.put(currentError.getField(), message);
		}
		return new ErrorResponse(mapFieldMessage, null, null, null);
	}

	/**
	 * Creazione basata su una mappa di campi in errore
	 * 
	 * @param mapFieldMessage
	 * @param details
	 * @param safeLink
	 * @param safeLinkText
	 */
	private ErrorResponse(Map<String, String> mapFieldMessage, String details, String safeLink, String safeLinkText) {
		this.mapFieldMessage = mapFieldMessage;
		this.setDetails(details);
	}

	public String getTesto() {
		return testo;
	}

	public String getMessaggio() {
		return messaggio;
	}

	public String getField() {
		return field;
	}

	public Map<String, String> getMapFieldMessage() {
		return mapFieldMessage;
	}

	public String getStacktrace() {
		return stacktrace;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public String getSafeLink() {
		return safeLink;
	}

	public void setSafeLink(String safeLink) {
		this.safeLink = safeLink;
	}

	public String getSafeLinkText() {
		return safeLinkText;
	}

	public void setSafeLinkText(String safeLinkText) {
		this.safeLinkText = safeLinkText;
	}

}
