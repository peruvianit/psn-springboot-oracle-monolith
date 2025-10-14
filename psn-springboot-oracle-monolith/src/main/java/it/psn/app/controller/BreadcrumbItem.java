package it.psn.app.controller;

import java.util.ArrayList;
import java.util.List;

import it.psn.app.interfaccia.menu.VoceMenuSelezionata;
import it.psn.app.interfaccia.menu.VoceMenuView;

/**
 * BreadcrumbItem
 * 
 * @author Emiliano Protti
 *
 */
public class BreadcrumbItem {

	private static String PAGINA_INIZIALE_LABEL = "Home";

	private String nome;
	private String url;

	public static BreadcrumbItem creaPaginaIniziale(String homeLink) {
		return new BreadcrumbItem(PAGINA_INIZIALE_LABEL, homeLink);
	}

	public BreadcrumbItem(String nome, String url) {
		super();
		this.nome = nome;
		this.url = url;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public static List<BreadcrumbItem> crea(VoceMenuSelezionata voceMenuSelezionata, String homeLink) {
		List<BreadcrumbItem> breadcrumb = new ArrayList<>();

		if (!contienePaginaIniziale(breadcrumb)) {
			breadcrumb.add(creaPaginaIniziale(homeLink));
		}

		if (voceMenuSelezionata != null) {
			VoceMenuView voceMenuView = voceMenuSelezionata.getVoceMenuView();
			if (voceMenuView != null) {
				if (voceMenuView.getVocePadre() != null) {
					breadcrumb.addAll(creaBreadcrumbItems(voceMenuView.getVocePadre()));
				}

				breadcrumb = BreadcrumbItem.aggiungiBreadcrumbItem(breadcrumb, voceMenuView.getNome(),
						voceMenuView.getUrl());
			}
		}

		return breadcrumb;
	}

	public static List<BreadcrumbItem> aggiungiBreadcrumbItem(List<BreadcrumbItem> breadcrumb, String nome,
			String url) {
		BreadcrumbItem itemDaAggiungere = new BreadcrumbItem(nome, url);
		for (BreadcrumbItem breadcrumbItem : breadcrumb) {
			if (breadcrumbItem.getNome().equalsIgnoreCase(itemDaAggiungere.getNome()))
				return breadcrumb;
		}
		breadcrumb.add(itemDaAggiungere);
		return breadcrumb;
	}

	private static List<BreadcrumbItem> creaBreadcrumbItems(VoceMenuView voceMenuView) {
		List<BreadcrumbItem> breadcrumb = new ArrayList<>();

		if (voceMenuView != null) {

			if (voceMenuView.getVocePadre() != null) {
				breadcrumb.addAll(creaBreadcrumbItems(voceMenuView.getVocePadre()));
			}

		}

		breadcrumb = BreadcrumbItem.aggiungiBreadcrumbItem(breadcrumb, voceMenuView.getNome(), voceMenuView.getUrl());

		return breadcrumb;
	}

	private static boolean contienePaginaIniziale(List<BreadcrumbItem> breadcrumb) {
		for (BreadcrumbItem breadcrumbItem : breadcrumb) {
			if (breadcrumbItem.getNome().equalsIgnoreCase(PAGINA_INIZIALE_LABEL))
				return true;
		}
		return false;
	}
}
