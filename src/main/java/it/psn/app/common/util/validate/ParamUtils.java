/**
 * 
 */
package it.psn.app.common.util.validate;

import java.util.Collection;

import it.psn.app.common.util.validate.exception.ParametroAssenteException;
import it.psn.app.common.util.validate.exception.ParametroListaVuotaException;

/**
 * Validazione parametri in input. 
 * 
 * @author SLSAArel
 *
 * @version 1.0.0
 * @since 1.0.0
 */
public class ParamUtils {
	public static void verifyNotNullOrEmpty(Object valoreParametro, Parametro paramtro) throws ParametroAssenteException {
		boolean isNull = valoreParametro == null;
		if (isNull) {
			throw ParametroAssenteException.crea(paramtro.getDescrizione());
		}
	}
	
	/**
	 * 
	 * @param valoreParametro
	 * @param parametro
	 * 
	 * @throws ParametroAssenteException
	 * 
	 * @since 1.5.0
	 */
	public static void verifyNotNullOrEmpty(Object valoreParametro, String parametro) throws ParametroAssenteException {
		boolean isNull = valoreParametro == null;
		if (isNull) {
			throw ParametroAssenteException.crea(parametro);
		}
	}
	
	public static void verifySizeCollection(Collection<?> collection, Parametro paramtro) throws ParametroAssenteException, ParametroListaVuotaException  {
		boolean isNull = collection == null;
		if (isNull) {
			throw ParametroAssenteException.crea(paramtro.getDescrizione());
		}
		
		if (collection.size()<=0) {
			throw ParametroListaVuotaException.crea(paramtro.getDescrizione());
		}
	}
	
	public enum Parametro{

		// PARAMETRI
		CODICE("Codice"),
		DESCRIZIONE("Descrizione"),
		CODICE_DOCUMENTO("Codice documento"),
		NOME("nome"),
		COGNOME("cognome"),
		
		// OGGETTI PASSATTI COME QUERY
		RECUPERA_SAMPLE_QUERY("Recupera sample query"),
		RECUPERA_DOWNLOAD_SAMPLE_QUERY("Recupera download sample query"),
		
		// OGGETTI PASSATTI COME COMMAND
		MODIFICA_SAMPLE_COMMAND("Modifica sample command"),
		CANCELLA_SAMPLE_COMMAND("Cancella sample command");
		
		private String descrizione;

		public String getDescrizione() {
			return descrizione;
		}
		
		Parametro(String descrizione) {
			this.descrizione = descrizione;
		
		}
	}

}
