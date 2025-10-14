/**
 * 
 */
package it.psn.app.controller.sample;

/**
 * @author Sergio Arellano.{PeruVianIT}
 *
 */
public class RecuperaSampleQuery {

	private String codice;

	private RecuperaSampleQuery(String codice) {
		super();
		this.codice = codice;
	}
	
	public static RecuperaSampleQuery crea(String codice) {
		return new RecuperaSampleQuery(codice);
	}

	public String getCodice() {
		return codice;
	}
}