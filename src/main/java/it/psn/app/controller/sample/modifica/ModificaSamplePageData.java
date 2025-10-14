package it.psn.app.controller.sample.modifica;

import it.psn.app.controller.PageData;
import it.psn.app.exception.ErrorResponse;

public class ModificaSamplePageData extends PageData {

	private SampleData sampleData;
	private ErrorResponse errorResponse;

	public ErrorResponse getErrorResponse() {
		return errorResponse;
	}

	public SampleData getSampleData() {
		return sampleData;
	}

	public void setSampleData(SampleData sampleData) {
		this.sampleData = sampleData;
	}

	protected ModificaSamplePageData() {
	}

	protected ModificaSamplePageData(PageData pageData, ErrorResponse errorResponse) {
		super(pageData);
		this.errorResponse = errorResponse;
	}

	public static class SampleData {

		private String codice;
		private String descrizione;

		protected SampleData(String codice, String descrizione) {
			super();
			this.codice = codice;
			this.descrizione = descrizione;
		}

		public static SampleData crea(ModificaSampleForm modificaSampleForm) {
			return new SampleData(modificaSampleForm.getCodice(),
					modificaSampleForm.getDescrizione());
		}

		public String getCodice() {
			return codice;
		}

		public String getDescrizione() {
			return descrizione;
		}

	}

}
