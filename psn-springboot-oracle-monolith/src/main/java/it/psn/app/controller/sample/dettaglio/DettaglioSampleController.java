package it.psn.app.controller.sample.dettaglio;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import it.psn.app.controller.BreadcrumbItem;
import it.psn.app.controller.PageData;
import it.psn.app.controller.sample.ListaSampleController;
import it.psn.app.controller.sample.RecuperaSampleQuery;
import it.psn.app.service.sample.SampleService;
import jakarta.servlet.http.HttpServletRequest;

@Controller
@RequestMapping(DettaglioSampleController.URL_BASE)
public class DettaglioSampleController {

	@SuppressWarnings("unused")
	private static Logger logger = LoggerFactory.getLogger(DettaglioSampleController.class);

	/**
	 * BaseRequest URL di input
	 */
	public static final String URL_BASE = "/sample/dettaglio";
	public static final String URL_INDIETRO = "/indietro";
	
	/**
	 * Viste di output
	 */
	public static final String VIEW_HOME = "/sample/dettaglio-sample";

	@Autowired
	private SampleService sampleService;

	@GetMapping()
	public String visualizza(Model model, 
							 @RequestParam(name = "codice") String codice,
							 HttpServletRequest httpRequest) throws Exception {
		DettaglioSamplePageData pageData = new DettaglioSamplePageData(
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

	@GetMapping(URL_INDIETRO)
	public String indietro() throws Exception {
		return "redirect:" + ListaSampleController.URL_BASE;
	}
}
