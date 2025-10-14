package it.psn.app.interfaccia.menu;

import java.util.ArrayList;

public class ResponseSelectableVoceMenuViews {

	ArrayList<SelectableVoceMenuView> selectableVoceMenuViews;
	boolean selected;

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

}
