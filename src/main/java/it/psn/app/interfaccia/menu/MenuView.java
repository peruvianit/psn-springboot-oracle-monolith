package it.psn.app.interfaccia.menu;

import java.util.ArrayList;
import java.util.List;


public class MenuView {

	private String id;
	private String nome;
	private String descrizione;
	private String codice;
	
	List<VoceMenuView> voci = new ArrayList<>();

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

	public String getCodice() {
		return codice;
	}

	public void setCodice(String codice) {
		this.codice = codice;
	}

	public List<VoceMenuView> getVoci() {
		return voci;
	}

	public void setVoci(List<VoceMenuView> voci) {
		this.voci = voci;
	}
	
}
