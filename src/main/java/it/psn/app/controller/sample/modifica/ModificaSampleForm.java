package it.psn.app.controller.sample.modifica;

/**
 * Richiesta dell'azione salva
 * 
 */
public class ModificaSampleForm {

	private String codice;
	private String descrizione;
	
	public ModificaSampleForm() {}
	
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
