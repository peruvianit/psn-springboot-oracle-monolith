/**
 * 
 */
package it.psn.app.service.sample;

/**
 * @author Sergio Arellano.{PeruVianIT}
 *
 */
public class ModificaSampleCommand {

	private String codice;
	private String descrizione;

	private ModificaSampleCommand(String codice, String descrizione) {
		super();
		this.codice = codice;
		this.descrizione = descrizione;
	}
	
	public static ModificaSampleCommand crea(String codice, String descrizione) {
		return new ModificaSampleCommand(codice, descrizione);
	}

	public String getCodice() {
		return codice;
	}

	public String getDescrizione() {
		return descrizione;
	}
	
}