package it.psn.app.controller.sample.cancella.esito;

import java.time.LocalDateTime;

import it.psn.app.controller.PageData;
import it.psn.appcommon.util.date.DateUtils;

public class EsitoCancellaSamplePageData extends PageData {

	private SampleData sampleData;

	public SampleData getSampleData() {
		return sampleData;
	}

	public void setSampleData(SampleData sampleData) {
		this.sampleData = sampleData;
	}

	protected EsitoCancellaSamplePageData() {
	}

	protected EsitoCancellaSamplePageData(PageData pageData) {
		super(pageData);
	}

	public static class SampleData {

		private String dataModifica;

		protected SampleData(String dataModifica) {
			super();
			this.dataModifica = dataModifica;
		}

		public static SampleData crea(LocalDateTime data) {
			return new SampleData(DateUtils.convertLocalDateTimeToString.apply(data));
		}

		public String getDataModifica() {
			return dataModifica;
		}

	}
}
