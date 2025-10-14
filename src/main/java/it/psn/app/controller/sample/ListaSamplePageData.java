package it.psn.app.controller.sample;

import java.util.ArrayList;
import java.util.List;

import it.psn.app.controller.PageData;
import it.psn.app.service.sample.SampleView;

/**
 * Page Data
 * 
 */
public class ListaSamplePageData extends PageData {

	List<SampleData> listSampleData = new ArrayList<>();
	
	protected ListaSamplePageData() {
	}

	protected ListaSamplePageData(PageData pageData) {
		super(pageData);
	}
	
	public List<SampleData> getListSampleData() {
		return listSampleData;
	}

	public void setListSampleData(List<SampleView> listSampleView) {
		listSampleView.forEach(sample -> listSampleData.add(
				SampleData.crea(sample.getCodice(), sample.getDescrizione())
				));
	}

	public static class SampleData{
		
		private String codice;
		private String descrizione;
		
		private SampleData(String codice, String descrizione) {
			super();
			this.codice = codice;
			this.descrizione = descrizione;
		}
		
		public static SampleData crea(String codice, String descrizione) {
			return new SampleData(codice, descrizione);
		}

		public String getCodice() {
			return codice;
		}

		public String getDescrizione() {
			return descrizione;
		}
		
	}

}
