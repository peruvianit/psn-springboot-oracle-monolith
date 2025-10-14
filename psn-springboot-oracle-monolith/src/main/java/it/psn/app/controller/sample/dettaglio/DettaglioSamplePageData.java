package it.psn.app.controller.sample.dettaglio;

import it.psn.app.controller.PageData;
import it.psn.app.service.sample.SampleView;

/**
 * Esempio per un Dettagio standard
 * 
 * @author Sergio Arellano.{PeruVianIT}
 *
 */
public class DettaglioSamplePageData extends PageData {

	private SampleData sampleData;

	protected DettaglioSamplePageData() {
	}

	protected DettaglioSamplePageData(PageData pageData) {
		super(pageData);
	}

	public SampleData getSampleData() {
		return sampleData;
	}

	public void setSampleData(SampleView sampleView) {
		this.sampleData = SampleData.crea(sampleView);
	}

	public static class SampleData {
		private String codice;
		private String descrizione;

		private SampleData(String codice, String descrizione) {
			super();
			this.codice = codice;
			this.descrizione = descrizione;
		}

		public static SampleData crea(SampleView sampleView) {
			return new SampleData(sampleView.getCodice(), sampleView.getDescrizione());
		}

		public String getCodice() {
			return codice;
		}

		public String getDescrizione() {
			return descrizione;
		}

	}

}
