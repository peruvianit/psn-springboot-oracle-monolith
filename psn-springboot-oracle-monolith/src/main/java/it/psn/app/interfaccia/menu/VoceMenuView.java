package it.psn.app.interfaccia.menu;

import java.util.ArrayList;
import java.util.List;

public class VoceMenuView {

	
	private String id;
	private String nome;
	private String descrizione;
	private String url;
	private List<VoceMenuView> sottovoci = new ArrayList<>();
	private VoceMenuView vocePadre;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getDescrizione() {
		return descrizione;
	}
	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public List<VoceMenuView> getSottovoci() {
		return sottovoci;
	}
	public void setSottovoci(List<VoceMenuView> sottovoci) {
		this.sottovoci = sottovoci;
	}
	public VoceMenuView getVocePadre() {
		return vocePadre;
	}
	public void setVocePadre(VoceMenuView vocePadre) {
		this.vocePadre = vocePadre;
	}
}
