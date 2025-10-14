package it.psn.app.controller;

import java.util.List;
import java.util.Map;

import it.psn.app.interfaccia.menu.SelectableMenuView;

/**
 * Page Data
 * 
 * @author Emiliano Protti
 *
 */
public class PageData {

	public static final String MODEL_ATTRIBUTE_NAME = "pageData";

	/*
	 * Vista rappresentativa dell'utente loggato
	 */
	private UtenteView utenteView;

	/*
	 * Struttura gerarchica del menu utente
	 */
	private List<SelectableMenuView> selectableMenuViews;

	/*
	 * titolo della pagina
	 */
	private String titolo;

	/*
	 * breadcrumb della pagina
	 */
	private List<BreadcrumbItem> breadcrumb;

	/*
	 * titolo principale dell'applicazione
	 */
	private String titoloApplicazione;

	/*
	 * titolo secondario dell'applicazione
	 */
	private String sottotitoloApplicazione;

	/*
	 * link per l'area riservata
	 */
	private String urlAreaRiservata;

	/*
	 * link per sidi web
	 */
	private String urlSidiWeb;

	/*
	 * link per il logout dall'applicazione
	 */
	private String urlEsci;

	/*
	 * è la homepage dell'applicazione
	 */
	private boolean isHomepage = false;

	/*
	 * abilitazione / disabilitazione di Google Analytics
	 */
	private boolean googleAnalyticsEnable;

	/*
	 * ID di Google Analytics
	 */
	private String googleAnalyticsId;

	/*
	 * Abilitazione / disabilitazione del server CDN per i contenuti statici
	 */
	private boolean cdnEnabled;

	/*
	 * Url del server CDN
	 */
	private String cdnUrl;

	/*
	 * impostazioni del layout della pagina; TRUE mostra il menu FALSE lo nasconde
	 */
	private boolean mostraMenu;

	/*
	 * impostazioni del layout della pagina; "LATERALE" mostra il menu laterale a
	 * sx, "ORIZZONTALE" mostra il menu orizzontale. DEFAULT: "LATERALE"
	 */
	private String posizioneMenu;

	/*
	 * Filtro
	 */
	private Map<String, Object> filtro = null;

	/*
	 * nome del profilo selezionato dall'utente
	 */
	private String nomeProfilo;

	/*
	 * nome del contesto selezionato dall'utente
	 */
	private String nomeContesto;

	/*
	 * Paginazione
	 */
	protected Integer numeroPagina;

	private Integer dimensionePagina;

	private Integer totaleRecord;
	@SuppressWarnings("unused")
	private Integer totalePagine;

	private String versione;

	protected PageData() {
	}

	public PageData(UtenteView utenteView, List<SelectableMenuView> selectableMenuViews, String titolo,
			List<BreadcrumbItem> breadcrumb, String titoloApplicazione, String sottotitoloApplicazione,
			String urlAreaRiservata, String urlSidiWeb, String urlEsci, boolean mostraMenu, String posizioneMenu,
			boolean googleAnalyticsEnable, String googleAnalyticsId, boolean cdnEnabled, String cdnUrl,
			String nomeProfiloSelezionato, String nomeContestoSelezionato, String versione) {
		super();
		this.utenteView = utenteView;
		this.selectableMenuViews = selectableMenuViews;
		this.titolo = titolo;
		this.breadcrumb = breadcrumb;
		this.titoloApplicazione = titoloApplicazione;
		this.sottotitoloApplicazione = sottotitoloApplicazione;
		this.urlAreaRiservata = urlAreaRiservata;
		this.urlSidiWeb = urlSidiWeb;
		this.urlEsci = urlEsci;
		this.mostraMenu = mostraMenu;
		this.posizioneMenu = posizioneMenu;
		this.googleAnalyticsEnable = googleAnalyticsEnable;
		this.googleAnalyticsId = googleAnalyticsId;
		this.cdnEnabled = cdnEnabled;
		this.cdnUrl = cdnUrl;
		this.nomeProfilo = nomeProfiloSelezionato;
		this.nomeContesto = nomeContestoSelezionato;
		this.versione = versione;
	}

	public PageData(PageData pageData) {
		super();
		this.utenteView = pageData.getUtenteView();
		this.selectableMenuViews = pageData.getSelectableMenuViews();
		this.titolo = pageData.getTitolo();
		this.breadcrumb = pageData.getBreadcrumb();
		this.titoloApplicazione = pageData.getTitoloApplicazione();
		this.sottotitoloApplicazione = pageData.getSottotitoloApplicazione();
		this.urlAreaRiservata = pageData.getUrlAreaRiservata();
		this.urlSidiWeb = pageData.getUrlSidiWeb();
		this.urlEsci = pageData.getUrlEsci();
		this.mostraMenu = pageData.getMostraMenu();
		this.posizioneMenu = pageData.getPosizioneMenu();
		this.googleAnalyticsEnable = pageData.getGoogleAnalyticsEnable();
		this.googleAnalyticsId = pageData.getGoogleAnalyticsId();
		this.cdnEnabled = pageData.getCdnEnabled();
		this.cdnUrl = pageData.getCdnUrl();
		this.nomeProfilo = pageData.getNomeProfilo();
		this.nomeContesto = pageData.getNomeContesto();
		this.versione = pageData.getVersione();
	}

	public PageData(Integer numeroPagina, Integer dimensionePagina, Integer totaleRecord, Integer totalePagine) {
		this.numeroPagina = numeroPagina;
		this.dimensionePagina = dimensionePagina;
		this.totaleRecord = totaleRecord;
		this.totalePagine = totalePagine;
	}

	public static class UtenteView {
		String username;
		String nome;
		String cognome;
		String codiceFiscale;

		public UtenteView(String username, String nome, String cognome, String codiceFiscale) {
			super();
			this.username = username;
			this.nome = nome;
			this.cognome = cognome;
			this.codiceFiscale = codiceFiscale;
		}

		public static UtenteView creaUtenteView(String username, String nome, String cognome, String codiceFiscale) {
			return new UtenteView(username, nome, cognome, codiceFiscale);
		}

		public String getUsername() {
			return username;
		}

		public String getNome() {
			return nome;
		}

		public String getCognome() {
			return cognome;
		}

		public String getCodiceFiscale() {
			return codiceFiscale;
		}

		@Override
		public String toString() {
			// TODO Auto-generated method stub
			return "[USERNAME:" + this.username + "; CODICE FISCALE:" + this.codiceFiscale + "]";
		}

	}

	public UtenteView getUtenteView() {
		return utenteView;
	}

	public List<SelectableMenuView> getSelectableMenuViews() {
		return selectableMenuViews;
	}

	public void setSelectableMenuViews(List<SelectableMenuView> selectableMenuViews) {
		this.selectableMenuViews = selectableMenuViews;
	}

	public String getTitolo() {
		return titolo;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

	public List<BreadcrumbItem> getBreadcrumb() {
		return breadcrumb;
	}

	public void setBreadcrumb(List<BreadcrumbItem> breadcrumb) {
		this.breadcrumb = breadcrumb;
	}

	public String getTitoloApplicazione() {
		return titoloApplicazione;
	}

	public String getSottotitoloApplicazione() {
		return sottotitoloApplicazione;
	}

	public String getUrlAreaRiservata() {
		return urlAreaRiservata;
	}

	public String getUrlSidiWeb() {
		return urlSidiWeb;
	}

	public String getUrlEsci() {
		return urlEsci;
	}

	public boolean getMostraMenu() {
		return mostraMenu;
	}

	public void setMostraMenu(boolean mostraMenu) {
		this.mostraMenu = mostraMenu;
	}

	public String getPosizioneMenu() {
		return posizioneMenu;
	}

	public boolean getGoogleAnalyticsEnable() {
		return googleAnalyticsEnable;
	}

	public String getGoogleAnalyticsId() {
		return googleAnalyticsId;
	}

	public boolean getCdnEnabled() {
		return cdnEnabled;
	}

	public String getCdnUrl() {
		return cdnUrl;
	}

	public void setGoogleAnalyticsEnable(boolean googleAnalyticsEnable) {
		this.googleAnalyticsEnable = googleAnalyticsEnable;
	}

	public boolean getIsHomepage() {
		return isHomepage;
	}

	public void setIsHomepage(boolean isHomepage) {
		this.isHomepage = isHomepage;
	}

	public Integer getNumeroPagina() {
		return (numeroPagina != null ? numeroPagina : 1);
	}

	public void setNumeroPagina(Integer numeroPagina) {
		this.numeroPagina = numeroPagina;
	}

	public Integer getDimensionePagina() {
		return dimensionePagina;
	}

	public void setDimensionePagina(Integer dimensionePagina) {
		this.dimensionePagina = dimensionePagina;
	}

	public Integer getTotaleRecord() {
		return totaleRecord;
	}

	public void setTotaleRecord(Integer totaleRecord) {
		this.totaleRecord = totaleRecord;
	}

	public Integer getTotalePagine() {
		int totalePagine = (totaleRecord / dimensionePagina);
		return totaleRecord % dimensionePagina == 0 ? totalePagine : totalePagine + 1;
	}

	public void setTotalePagine(Integer totalePagine) {
		this.totalePagine = totalePagine;
	}

	public Map<String, Object> getFiltro() {
		return filtro;
	}

	public void setFiltro(Map<String, Object> filtro) {
		this.filtro = filtro;
	}

	public void aggiungiItemBreadcrumb(String label, String url) {
		BreadcrumbItem.aggiungiBreadcrumbItem(breadcrumb, label, url);
	}

	public String getNomeProfilo() {
		return nomeProfilo;
	}

	public String getNomeContesto() {
		return nomeContesto;
	}

	public String getVersione() {
		return versione;
	}

	public void setVersione(String versione) {
		this.versione = versione;
	}

}
