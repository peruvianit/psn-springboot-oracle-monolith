package it.psn.app.controller.validator;

import org.springframework.validation.Validator;
import it.psn.app.enums.Error;

/**
 * Classe di supporto alla validazione
 * 
 * @author Giannini
 *
 */
public abstract class BaseValidator implements Validator {

	/**
	 * Verifica che il testo sia alfabetico
	 * 
	 * @param text
	 * @return
	 */
	protected boolean isAlphabetic(String text) {
		return text.matches("[a-zA-Z]+");
	}

	/**
	 * Verifica che il testo sia alfabetico
	 * 
	 * @param text
	 * @return
	 */
	protected boolean isNumeric(String number) {
		return number.matches("[0-9]+");
	}
	
	/**
	 * Controllo codice fiscale
	 * 
	 * @param cf
	 * @return
	 */
	protected boolean isValidCF(String cf) {
		int i, s, c;
		String cf2;
		int setdisp[] = { 1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23 };
		if (cf.length() == 0)
			return false;
		if (cf.length() != 16) {
			return false;
		}
		cf2 = cf.toUpperCase();
		for (i = 0; i < 16; i++) {
			c = cf2.charAt(i);
			if (!(c >= '0' && c <= '9' || c >= 'A' && c <= 'Z')) {
				return false;
			}
		}
		s = 0;
		for (i = 1; i <= 13; i += 2) {
			c = cf2.charAt(i);
			if (c >= '0' && c <= '9')
				s = s + c - '0';
			else
				s = s + c - 'A';
		}
		for (i = 0; i <= 14; i += 2) {
			c = cf2.charAt(i);
			if (c >= '0' && c <= '9')
				c = c - '0' + 'A';
			s = s + setdisp[c - 'A'];
		}
		if (s % 26 + 'A' != cf2.charAt(15)) {
			return false;
		}
		return true;
	}
	
	public String creaMessaggioCampoObbligatorio(String campo) {
		return Error.CAMPO_OBBLIGATORIO.getMessaggio(campo);
	}
	
	public String creaMessaggioCampoErrato(String campo) {
		return Error.CAMPO_ERRATO.getMessaggio(campo);
	}
}
