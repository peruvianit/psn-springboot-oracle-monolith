package it.psn.appcommon.util.date.validate;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

/**
 * Classe pressa da un progetto, da testare.
 * 
 * @author Sergio Arellano.{PeruVianIT}
 *
 * @version 1.0.0-BETA
 * @since 1.12.0
 */
public class CodiceFiscaleValidate {
	final String mesi;
	final String vocali;
	final String consonanti;
	final String alfabeto;
	int[][] matricecod;
	
	public CodiceFiscaleValidate() {
		mesi = "ABCDEHLMPRST";
		vocali = "AEIOU";
		consonanti = "BCDFGHJKLMNPQRSTVWXYZ";
		alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		// matrice x il calcolo del carattere di controllo
		matricecod = new int[91][2];
		matricecod[0][1] = 1;
		matricecod[0][0] = 0;
		matricecod[1][1] = 0;
		matricecod[1][0] = 1;
		matricecod[2][1] = 5;
		matricecod[2][0] = 2;
		matricecod[3][1] = 7;
		matricecod[3][0] = 3;
		matricecod[4][1] = 9;
		matricecod[4][0] = 4;
		matricecod[5][1] = 13;
		matricecod[5][0] = 5;
		matricecod[6][1] = 15;
		matricecod[6][0] = 6;
		matricecod[7][1] = 17;
		matricecod[7][0] = 7;
		matricecod[8][1] = 19;
		matricecod[8][0] = 8;
		matricecod[9][1] = 21;
		matricecod[9][0] = 9;
		matricecod[10][1] = 1;
		matricecod[10][0] = 0;
		matricecod[11][1] = 0;
		matricecod[11][0] = 1;
		matricecod[12][1] = 5;
		matricecod[12][0] = 2;
		matricecod[13][1] = 7;
		matricecod[13][0] = 3;
		matricecod[14][1] = 9;
		matricecod[14][0] = 4;
		matricecod[15][1] = 13;
		matricecod[15][0] = 5;
		matricecod[16][1] = 15;
		matricecod[16][0] = 6;
		matricecod[17][1] = 17;
		matricecod[17][0] = 7;
		matricecod[18][1] = 19;
		matricecod[18][0] = 8;
		matricecod[19][1] = 21;
		matricecod[19][0] = 9;
		matricecod[20][1] = 2;
		matricecod[20][0] = 10;
		matricecod[21][1] = 4;
		matricecod[21][0] = 11;
		matricecod[22][1] = 18;
		matricecod[22][0] = 12;
		matricecod[23][1] = 20;
		matricecod[23][0] = 13;
		matricecod[24][1] = 11;
		matricecod[24][0] = 14;
		matricecod[25][1] = 3;
		matricecod[25][0] = 15;
		matricecod[26][1] = 6;
		matricecod[26][0] = 16;
		matricecod[27][1] = 8;
		matricecod[27][0] = 17;
		matricecod[28][1] = 12;
		matricecod[28][0] = 18;
		matricecod[29][1] = 14;
		matricecod[29][0] = 19;
		matricecod[30][1] = 16;
		matricecod[30][0] = 20;
		matricecod[31][1] = 10;
		matricecod[31][0] = 21;
		matricecod[32][1] = 22;
		matricecod[32][0] = 22;
		matricecod[33][1] = 25;
		matricecod[33][0] = 23;
		matricecod[34][1] = 24;
		matricecod[34][0] = 24;
		matricecod[35][1] = 23;
		matricecod[35][0] = 25;
	}
	
	// ------------------------------------------------------------------------------//
	// calcolaCognome //
	// restituisce i 3 caratteri del codice derivati dal cognome //
	// ------------------------------------------------------------------------------//
	private String calcolaCognome(String cogn) {
		cogn = cogn.toUpperCase();

		int i = 0;
		String stringa = "";
		// trova consonanti
		while ((stringa.length() < 3) && (i + 1 <= cogn.length())) {
			if (consonanti.indexOf(cogn.charAt(i)) > -1) {
				stringa += cogn.charAt(i);
			}
			i++;
		}
		i = 0;
		// se non bastano prende vocali
		while ((stringa.length() < 3) && (i + 1 <= cogn.length())) {
			if (vocali.indexOf(cogn.charAt(i)) > -1) {
				stringa += cogn.charAt(i);
			}
			i++;
		}
		// se non bastano aggiungo le x
		if (stringa.length() < 3) {
			for (i = stringa.length(); i < 3; i++) {
				stringa += "X";
			}
		}
		return stringa;
	}
	
	// ------------------------------------------------------------------------------//
	// calcolaNome //
	// restituisce i 3 caratteri del codice derivati dal nome //
	// ------------------------------------------------------------------------------//
	private String calcolaNome(String nom) {
		nom = nom.toUpperCase();

		int i = 0;
		String stringa = "", cons = "";
		// trova consonanti
		while ((cons.length() < 4) && (i + 1 <= nom.length())) {
			if (consonanti.indexOf(nom.charAt(i)) > -1) {
				cons += nom.charAt(i);
			}
			i++;
		}
		// se sono + di 3 prende 1° 3° 4°
		if (cons.length() > 3) {
			stringa = cons.substring(0, 1) + cons.substring(2, 4);
			return stringa;
		} else {
			stringa = cons;
		}
		i = 0;
		// se non bastano prende vocali
		while ((stringa.length() < 3) && (i + 1 <= nom.length())) {
			if (vocali.indexOf(nom.charAt(i)) > -1) {
				stringa += nom.charAt(i);
			}
			i++;
		}
		// se non bastano aggiungo le x
		if (stringa.length() < 3) {
			for (i = stringa.length(); i < 3; i++) {
				stringa += "X";
			}
		}
		return stringa;

				}
	
	// ------------------------------------------------------------------------------//
	// noAccentate //
	// restituisce la stringa s trasformando le lettere accentate in non
	// accentate //
	// ad esempio "andò" viene trasformata "ando" //
	// ------------------------------------------------------------------------------//
	private String noAccentate(String s) {
		final String ACCENTATE = "ÀÈÉÌÒÙàèéìòù";
		final String NOACCENTO = "AEEIOUAEEIOU";
		int i = 0;

		s = s.toUpperCase();
		// scorre la stringa originale
		while (i < s.length()) {
			int p = ACCENTATE.indexOf(s.charAt(i));
			// se ha trovato una lettera accentata
			if (p > -1) {
				// sostituisce con la relativa non accentata
				s = s.substring(0, i) + NOACCENTO.charAt(p)
						+ s.substring(i + 1);
			}
			i++;
		}

		return s;
	}
	
	/**
	 * Business method. Calcola il codice fiscale a partire dai dati anagrafici
	 * Tutti i dati sono estressi per cui in ogni caso il codice fiscale
	 * &egrave; calcolato
	 * 
	 * @return Il codice fiscale corrispondente
	 */
	public String calcolaCodice(String cognome, String nome, Date dataNascita, String sesso, String codistat) {
		String codice;

		nome = nome.toUpperCase();
		cognome = cognome.toUpperCase();
		sesso = sesso.toUpperCase();

		int anno = 0, mese = 0, giorno = 0, codcontrollo = 0;

		Calendar cal = new GregorianCalendar();
		cal.setTime(dataNascita);

		String a = Integer.toString(cal.get(Calendar.YEAR));
		a = a.substring(a.length() - 2, a.length());
		anno = Integer.parseInt(a);
		mese = cal.get(Calendar.MONTH);
		giorno = cal.get(Calendar.DATE);

		codice = calcolaCognome(noAccentate(cognome.trim()))
				+ calcolaNome(noAccentate(nome.trim()));
		if (sesso.equals("F")) {
			giorno = giorno + 40;
		}
		codice += ((anno < 10) ? "0" : "") + Integer.toString(anno)
				+ mesi.charAt(mese) + ((giorno < 10) ? "0" : "")
				+ Integer.toString(giorno);
		codice += codistat;
		for (int i = 0; i < 15; i++) {
			codcontrollo += matricecod[Character.getNumericValue(codice
					.charAt(i))][(i + 1) % 2];
		}
		codice += alfabeto.charAt(codcontrollo % 26);
		return codice;
	}
	
	/**
	 * Business method. Estrae la data di nascita dal codice fiscale
	 * 
	 * @return Data di nascita
	 * @throws Exception 
	 */
	public static Date estraiDataNascita(String codicefiscale) throws Exception {
		Date data;

		Calendar calendar = Calendar.getInstance();
		codicefiscale = codicefiscale.toUpperCase();
		// Controlliamo la validità del codice fiscale
		if (!verificaCodice(codicefiscale).booleanValue())
			throw new Exception("Codice fiscale errato");

		StringBuffer anno = new StringBuffer();
		anno.append(codicefiscale.substring(6, 8));

		String mese = "";
		char ms = codicefiscale.charAt(8);

		switch (ms) {
		case 'A':
			mese = "01";
			break;
		case 'B':
			mese = "02";
			break;
		case 'C':
			mese = "03";
			break;
		case 'D':
			mese = "04";
			break;
		case 'E':
			mese = "05";
			break;
		case 'H':
			mese = "06";
			break;
		case 'L':
			mese = "07";
			break;
		case 'M':
			mese = "08";
			break;
		case 'P':
			mese = "09";
			break;
		case 'R':
			mese = "10";
			break;
		case 'S':
			mese = "11";
			break;
		case 'T':
			mese = "12";
			break;
		}

		StringBuffer giorno = new StringBuffer();
		giorno.append(codicefiscale.substring(9, 11));

		int gg = Integer.parseInt(giorno.toString());
		if (gg > 40)
			gg -= 40;

		String prefAnno="19";
		if (Integer.parseInt("20"+anno.toString())<calendar.get(Calendar.YEAR)) {
			prefAnno="20";
		}
		
		String ggStr=new String(Integer.toString(gg));
		if (ggStr.length()==1) ggStr='0'+ggStr;
		
		String dataNascita = ggStr + mese + prefAnno + anno;

		// calcola data
		SimpleDateFormat formatodata= new SimpleDateFormat("ddMMyyyy");
		try {
			data = formatodata.parse(dataNascita);
		} catch (Exception e) {
			throw new Exception(e);
		}
		return data;
	}
	
	
	public static String estraiSesso(String codicefiscale)  {
		if (Integer.parseInt(codicefiscale.substring(9,11))>40) {
			return "F";
		}else {
			return "M";
		}
	}

	/**
	 * Business method Verifica la correttezza del codice fiscale sulla base del
	 * carattere di controllo
	 * 
	 * @return true corretto false altrimenti
	 */
	public static Boolean verificaCodice(String value) {
		int tot = 0;
		int tabDisp[] = { 1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 2, 4, 18, 20, 11,
				3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23 };

		value = value.toUpperCase();
		try {
			if (value.length() != 16)
				return Boolean.valueOf(false);

			char valchars[] = new char[value.length()];
			value.getChars(0, value.length(), valchars, 0);
			for (int i = 1; i < 14; i += 2) {
				char c = valchars[i];
				if (c == ' ')
					return Boolean.valueOf(false);

				int n = Character.getNumericValue(c);
				tot += (Character.isDigit(c)) ? n : n - 10;
			}

			for (int i = 0; i < 15; i += 2) {
				char c = valchars[i];
				if (c == ' ')
					return Boolean.valueOf(false);

				int n = Character.getNumericValue(c);
				if (Character.isDigit(c)) {
					if (n > tabDisp.length)
						return Boolean.valueOf(false);
					tot += tabDisp[n];
				} else {
					if (n - 10 > tabDisp.length)
						return Boolean.valueOf(false);
					tot += tabDisp[n - 10];
				}
			}

			if (Character.getNumericValue(valchars[15]) != tot % 26 + 10)
				return Boolean.valueOf(false);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return Boolean.valueOf(false);
		}
		return Boolean.valueOf(true);
	}
}
