package it.psn.app.interfaccia.menu;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.ui.Model;

public class SelectableVoceMenuView {

	VoceMenuView voceMenuView;
	ArrayList<SelectableVoceMenuView> selectableVoceMenuViews;
	boolean selected;

	public SelectableVoceMenuView(VoceMenuView voceMenuView, boolean selected) {
		super();
		this.voceMenuView = voceMenuView;
		this.selected = selected;
	}

	public String getId() {
		return voceMenuView.getId();
	}

	public String getNome() {
		return voceMenuView.getNome();
	}

	public String getDescrizione() {
		return voceMenuView.getDescrizione();
	}

	public String getUrl() {
		return voceMenuView.getUrl();
	}

	public List<VoceMenuView> getSottovoci() {
		return voceMenuView.getSottovoci();
	}

	public VoceMenuView getVocePadre() {
		return voceMenuView.getVocePadre();
	}

	public ArrayList<SelectableVoceMenuView> getSelectableVoceMenuViews() {
		return selectableVoceMenuViews;
	}

	public void setSelectableVoceMenuViews(ArrayList<SelectableVoceMenuView> selectableVoceMenuViews) {
		this.selectableVoceMenuViews = selectableVoceMenuViews;
	}

	public boolean getSelected() {
		return selected;
	}

	public void setSelected(boolean selected) {
		this.selected = selected;
	}

	/**
	 * Metodo Per la costruzione delle voci di menu
	 * 
	 * @param model
	 * @param voceMenuViews
	 * @param requestUri
	 * @return
	 */
	public static ResponseSelectableVoceMenuViews creaSelectableVoceMenuViews(Model model,
			List<VoceMenuView> voceMenuViews, String requestUri) {
		ResponseSelectableVoceMenuViews responseSelectableVoceMenuViews = new ResponseSelectableVoceMenuViews();
		ArrayList<SelectableVoceMenuView> selectableVoceMenuViews = new ArrayList<>();

		for (Iterator<VoceMenuView> it = voceMenuViews.iterator(); it.hasNext();) {
			VoceMenuView voceMenuView = it.next();
			boolean selected = false;

			if(requestUri!=null) {
				if (voceMenuView.getUrl() != null) {
					selected = verificaUrlSelezionata(voceMenuView.getUrl(), requestUri);
					
					if (selected) {
						model.addAttribute(VoceMenuSelezionata.ATTRIBUTE_NAME, new VoceMenuSelezionata(voceMenuView));
					}
				}
			}

			SelectableVoceMenuView selectableVoceMenuView = new SelectableVoceMenuView(voceMenuView, selected);

			if (!voceMenuView.getSottovoci().isEmpty()) {
				responseSelectableVoceMenuViews = creaSelectableVoceMenuViews(model, voceMenuView.getSottovoci(), requestUri);

				if (!responseSelectableVoceMenuViews.getSelectableVoceMenuViews().isEmpty()) {
					selectableVoceMenuView.setSelectableVoceMenuViews(responseSelectableVoceMenuViews.getSelectableVoceMenuViews());
					selectableVoceMenuView.setSelected(responseSelectableVoceMenuViews.getSelected());
				}

			}

			selectableVoceMenuViews.add(selectableVoceMenuView);
		}

		responseSelectableVoceMenuViews.setSelectableVoceMenuViews(selectableVoceMenuViews);
		return responseSelectableVoceMenuViews;
	}

	/**
	 * @param voceMenuViews
	 * @param idVoceMenuView
	 * @return
	 */
	public static ResponseSelectableVoceMenuViews selezionaSelectableVoceMenuViewsPerIdVoceMenuView(
			List<VoceMenuView> voceMenuViews, String idVoceMenuView) {
		ResponseSelectableVoceMenuViews responseSelectableVoceMenuViews = new ResponseSelectableVoceMenuViews();
		ArrayList<SelectableVoceMenuView> selectableVoceMenuViews = new ArrayList<>();

		for (Iterator<VoceMenuView> it = voceMenuViews.iterator(); it.hasNext();) {
			VoceMenuView voceMenuView = it.next();
			boolean selected = false;

			if (voceMenuView.getUrl() != null) {
				selected = voceMenuView.getId().equals(idVoceMenuView);
			}

			SelectableVoceMenuView selectableVoceMenuView = new SelectableVoceMenuView(voceMenuView, selected);

			if (!voceMenuView.getSottovoci().isEmpty()) {
				responseSelectableVoceMenuViews = selezionaSelectableVoceMenuViewsPerIdVoceMenuView(
						voceMenuView.getSottovoci(), idVoceMenuView);

				if (!responseSelectableVoceMenuViews.getSelectableVoceMenuViews().isEmpty()) {
					selectableVoceMenuView
							.setSelectableVoceMenuViews(responseSelectableVoceMenuViews.getSelectableVoceMenuViews());
					selectableVoceMenuView.setSelected(responseSelectableVoceMenuViews.getSelected());
				}

			}

			selectableVoceMenuViews.add(selectableVoceMenuView);
		}

		responseSelectableVoceMenuViews.setSelectableVoceMenuViews(selectableVoceMenuViews);
		return responseSelectableVoceMenuViews;
	}

	/**
	 * @param urlVoceMenu
	 * @param requestUrl
	 * @return
	 */
	private static boolean verificaUrlSelezionata(String urlVoceMenu, String requestUrl) {
		return urlVoceMenu.equalsIgnoreCase(requestUrl.split("\\?")[0]);
	}
}
