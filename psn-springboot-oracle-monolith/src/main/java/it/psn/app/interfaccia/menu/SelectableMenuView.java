package it.psn.app.interfaccia.menu;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;

public class SelectableMenuView {
	
	private static Logger logger = LoggerFactory.getLogger(SelectableMenuView.class);

	MenuView menuView;
	ArrayList<SelectableVoceMenuView> selectableVoceMenuViews;

	public SelectableMenuView(MenuView menuView) {
		super();
		this.menuView = menuView;
	}

	public String getId() {
		return menuView.getId();
	}

	public String getNome() {
		return menuView.getNome();
	}

	public String getDescrizione() {
		return menuView.getDescrizione();
	}

	public List<VoceMenuView> getVoci() {
		return menuView.getVoci();
	}

	public ArrayList<SelectableVoceMenuView> getSelectableVoceMenuViews() {
		return selectableVoceMenuViews;
	}

	public void setSelectableVoceMenuViews(ArrayList<SelectableVoceMenuView> selectableVoceMenuViews) {
		this.selectableVoceMenuViews = selectableVoceMenuViews;
	}

	/**
	 * Metodo per la costruzione dei menu
	 * 
	 * @param model
	 * @param menuViews
	 * @param requestUri
	 * @param codiciMenu
	 * @return
	 */
	public static ArrayList<SelectableMenuView> creaSelectableMenuViews(Model model, List<MenuView> menuViews, String requestUri, List<String> codiciMenu) {
		logger.debug("CodiciMenuAbilitati: " + codiciMenu);
		ArrayList<SelectableMenuView> selectableMenuViews = new ArrayList<>();
		for (Iterator<MenuView> it = menuViews.iterator(); it.hasNext();) {
			MenuView menuView = it.next();
			logger.debug("CodiceMenu: " + menuView.getCodice());
			
			if(codiciMenu.contains(menuView.getCodice())) {
				SelectableMenuView selectableMenuView = new SelectableMenuView(menuView);
				selectableMenuView.setSelectableVoceMenuViews(SelectableVoceMenuView.creaSelectableVoceMenuViews(model, menuView.getVoci(), requestUri).getSelectableVoceMenuViews());
				selectableMenuViews.add(selectableMenuView);
			}
		}

		return selectableMenuViews;
	}
	
	/**
	 * @param menuViews
	 * @param idVoceMenuView
	 * @return
	 */
	public static ArrayList<SelectableMenuView> selezionaSelectableMenuViewsPerIdVoceMenuView(List<MenuView> menuViews, String idVoceMenuView, List<String> codiciMenu) {
		ArrayList<SelectableMenuView> selectableMenuViews = new ArrayList<>();
		for (Iterator<MenuView> it = menuViews.iterator(); it.hasNext();) {
			MenuView menuView = it.next();
			if(codiciMenu.contains(menuView.getCodice())) {
				SelectableMenuView selectableMenuView = new SelectableMenuView(menuView);
				selectableMenuView.setSelectableVoceMenuViews(SelectableVoceMenuView.selezionaSelectableVoceMenuViewsPerIdVoceMenuView(menuView.getVoci(), idVoceMenuView).getSelectableVoceMenuViews());
				selectableMenuViews.add(selectableMenuView);
			}
		}

		return selectableMenuViews;
	}

}
