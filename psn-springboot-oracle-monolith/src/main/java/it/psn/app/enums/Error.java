package it.psn.app.enums;

/**
 * Enum per gli errori applicativi
 * 
 * @author Sergio Arellano.{PeruVianIT}
 *
 * @version 1.0.0
 */
public enum Error {
	
	PAGINA_NON_TROVATA("001", "Pagina non trovata"), 
	ACCESSO_NEGATO("002", "Accesso negato"), 
	SESSIONE_SCADUTA("003", "La tua sessione è scaduta. Effettua nuovamente la login per continuare"), 
	SERVIZIO_NON_RAGGIUNGIBILE("004", "Sistema momentaneamente indisponibile, riprovare più tardi"),
	CAMPO_OBBLIGATORIO("005", "Il campo ? &egrave; obbligatorio"),
	CAMPO_ERRATO("006", "Il valore ? non &egrave; consentito");

	private String codice;
	private String descrizione;

	public String getCodice() {
		return codice;
	}

	public String getDescrizione() {
		return descrizione;
	}
	
	public String getMessaggio(String campo) {
		return descrizione.replace("?", campo);
	}

	Error(String codice, String descrizione) {
		this.codice = codice;
		this.descrizione = descrizione;
	}
}
