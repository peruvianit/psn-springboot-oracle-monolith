package it.psn.app.interfaccia.menu;

import java.io.Serializable;

/**
 * VoceDTO Menu Selezionata
 * 
 */
public class VoceMenuSelezionata implements Serializable {

	private static final long serialVersionUID = -2806833801574294413L;

	public static final String ATTRIBUTE_NAME = "voceMenuSelezionata";

	private VoceMenuView VoceMenuView;

	public VoceMenuSelezionata() {
	}

	public VoceMenuSelezionata(VoceMenuView VoceMenuView) {
		super();
		this.VoceMenuView = VoceMenuView;
	}

	public VoceMenuView getVoceMenuView() {
		return VoceMenuView;
	}

}
