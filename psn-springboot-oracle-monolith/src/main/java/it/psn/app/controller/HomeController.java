package it.psn.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	
	@GetMapping("/home")
	public String health(Model model) {

		HomePageData pageData = new HomePageData((PageData) model.asMap().get(PageData.MODEL_ATTRIBUTE_NAME));
		pageData.setTitolo("Pagina iniziale - " + pageData.getTitolo());

		model.addAttribute("pageData", pageData);
		return "home/home";
	}
}
