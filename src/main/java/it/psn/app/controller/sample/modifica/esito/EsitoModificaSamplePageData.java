package it.psn.app.controller.sample.modifica.esito;

import it.psn.app.common.util.date.DateUtils;
import it.psn.app.controller.PageData;
import it.psn.app.service.sample.SampleView;

public class EsitoModificaSamplePageData extends PageData {

	private SampleData sampleData;

	public SampleData getSampleData() {
		return sampleData;
	}

	public void setSampleData(SampleData sampleData) {
		this.sampleData = sampleData;
	}

	protected EsitoModificaSamplePageData() {
	}

	protected EsitoModificaSamplePageData(PageData pageData) {
		super(pageData);
	}

	public static class SampleData {

		private String codice;
		private String descrizione;
		private String dataModifica;

		protected SampleData(String codice, String descrizione, String dataModifica) {
			super();
			this.codice = codice;
			this.descrizione = descrizione;
			this.dataModifica = dataModifica;
		}

		public static SampleData crea(SampleView sampleView) {
			return new SampleData(sampleView.getCodice(),
								  sampleView.getDescrizione(),
								  DateUtils.convertLocalDateTimeToString.apply(sampleView.getDataModifica()));
		}

		public String getCodice() {
			return codice;
		}

		public String getDescrizione() {
			return descrizione;
		}

		public String getDataModifica() {
			return dataModifica;
		}

	}
}
