package it.psn.app.controller.sample.cancella;

/**
 * Richiesta dell'azione salva
 * 
 * @author Emiliano Protti
 *
 */
public class CancellaSampleForm {

	private String codice;
	private String descrizione;
	
	public CancellaSampleForm() {}
	
	public String getCodice() {
		return codice;
	}
	public void setCodice(String codice) {
		this.codice = codice;
	}
	public String getDescrizione() {
		return descrizione;
	}
	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
}
