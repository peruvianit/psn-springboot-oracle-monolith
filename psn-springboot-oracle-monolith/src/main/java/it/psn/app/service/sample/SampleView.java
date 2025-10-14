package it.psn.app.service.sample;

import java.time.LocalDateTime;

public class SampleView {
	
	private String codice;
	private String descrizione;
	private LocalDateTime dataModifica;
	
	private SampleView(String codice, String descrizione, LocalDateTime dataModifica) {
		super();
		this.codice = codice;
		this.descrizione = descrizione;
		this.dataModifica = dataModifica;
	}

	public static SampleView crea(String codice, String descrizione, LocalDateTime dataModifica) {
		return new SampleView(codice, descrizione, dataModifica);
	}
	
	public String getCodice() {
		return codice;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public LocalDateTime getDataModifica() {
		return dataModifica;
	}

}