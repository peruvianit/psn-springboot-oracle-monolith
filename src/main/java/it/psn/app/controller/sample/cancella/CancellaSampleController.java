package it.psn.app.controller.sample.cancella;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import it.psn.app.controller.BreadcrumbItem;
import it.psn.app.controller.PageData;
import it.psn.app.controller.sample.ListaSampleController;
import it.psn.app.controller.sample.RecuperaSampleQuery;
import it.psn.app.controller.sample.cancella.esito.EsitoCancellaSampleController;
import it.psn.app.service.sample.SampleService;
import jakarta.servlet.http.HttpServletRequest;

@Controller
@RequestMapping(CancellaSampleController.URL_BASE)
public class CancellaSampleController {

	/**
	 * BaseRequest URL di input
	 */
	public static final String URL_BASE = "/sample/cancella";
	public static final String URL_CONFERMA = "/conferma";
	public static final String URL_INDIETRO = "/indietro";
	
	/**
	 * Viste di output
	 */
	public static final String VIEW_HOME = "/sample/cancella-sample";

	@Autowired
	private SampleService sampleService;

	@GetMapping()
	public String visualizza(Model model, 
							 @RequestParam(required = true, name = "codice") String codice,
							 HttpServletRequest httpRequest) throws Exception {
		CancellaSamplePageData pageData = new CancellaSamplePageData(
				(PageData) model.asMap().get(PageData.MODEL_ATTRIBUTE_NAME));
		pageData.setTitolo("Dettaglio documento scaduto - " + pageData.getTitolo());

		List<BreadcrumbItem> breadcrumb = new ArrayList<BreadcrumbItem>();
		breadcrumb.add(BreadcrumbItem.creaPaginaIniziale(httpRequest.getContextPath() + "/"));
		breadcrumb = BreadcrumbItem.aggiungiBreadcrumbItem(breadcrumb, "Sample",
				httpRequest.getContextPath() + "/sample");
		breadcrumb = BreadcrumbItem.aggiungiBreadcrumbItem(breadcrumb, "Dettaglio", "");
		pageData.setBreadcrumb(breadcrumb);

		pageData.setSampleData(sampleService.recuperaSample(RecuperaSampleQuery.crea(codice)));

		model.addAttribute("pageData", pageData);
		
		return VIEW_HOME;
	}
	
	@PostMapping(URL_CONFERMA)
	public String conferma(Model model, 
						   @RequestParam(required = true, name = "codice") String codice
						   //RedirectAttributes redirectAttributes,
						   //BindingResult errors
						   ) throws Exception {
		
		sampleService.cancella(CancellaSampleCommand.crea(codice));
		return "redirect:" + EsitoCancellaSampleController.URL_BASE;
	}

	@GetMapping(URL_INDIETRO)
	public String indietro() throws Exception {
		return "redirect:" + ListaSampleController.URL_BASE;
	}
}
