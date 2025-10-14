package it.psn.app.interfaccia.menu;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class MenuServiceFacade {

	public List<MenuView> recuperaMenuAbilitati(RecuperaMenuAbilitatiCommand recuperaMenuAbilitatiCommand) {
		List<MenuView> list = new ArrayList<>();
		
		MenuView menu = new MenuView();
		
		menu.setId("1001");
		menu.setCodice("WTSB_MAIN");
		menu.setDescrizione("Menu Demo");
		menu.setNome("nome menu");
		
		List<VoceMenuView> voci = new ArrayList<>();
		
		VoceMenuView voce1 = new VoceMenuView();
		voce1.setId("1");
		voce1.setNome("Sample");
		voce1.setDescrizione("propotipo interfaccia");
		voce1.setUrl("/app/sample");
		
		VoceMenuView voce2 = new VoceMenuView();
		voce2.setId("2");
		voce2.setNome("Home");
		voce2.setDescrizione("descrizione della voce 2");
		voce2.setUrl("/app/home");
		
		voci.add(voce1);
		voci.add(voce2);
		
		
		menu.setVoci(voci);
		
		list.add(menu);
		
		return list;
	}

}
