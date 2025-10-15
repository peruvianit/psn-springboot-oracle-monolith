/**
 * 
 */
package it.psn.app.common.util.format;

import org.apache.commons.text.WordUtils;

/**
 * Metodi di utilità per capitalizzare una parola
 * 
 * @author Giannini
 *
 */
public class WordCapitalizer {

	private static final char[] HUMAN_NAME_DELIMITERS = new char[] { ' ', '\'', '-' };

	private WordCapitalizer() {
	}

	/**
	 * Capitalizza la prima lettera di ogni parola separata da spazio e da
	 * apostrofo e trasforma il resto del testo in minuscolo.
	 * 
	 * Metodo adatto per la capitalizzazione di nome o cognome di persona, nome
	 * di città, nazioni ecc.
	 * 
	 * ES: MIRKO dell'acqua -> Mirko Dell'Acqua
	 * 
	 * @param word
	 * @return
	 */
	public static String toHumanName(String word) {
		return WordUtils.capitalize(word.toLowerCase(), HUMAN_NAME_DELIMITERS);
	}

}
