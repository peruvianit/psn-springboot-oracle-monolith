/**
 * 
 */
package it.psn.app.controller.sample.cancella;

/**
 * @author Sergio Arellano.{PeruVianIT}
 *
 */
public class CancellaSampleCommand {

	private String codice;

	private CancellaSampleCommand(String codice) {
		super();
		this.codice = codice;
	}
	
	public static CancellaSampleCommand crea(String codice) {
		return new CancellaSampleCommand(codice);
	}

	public String getCodice() {
		return codice;
	}

}