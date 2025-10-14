package it.psn.app.controller.sample.cancella.esito;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import it.psn.app.controller.PageData;
import it.psn.app.service.sample.SampleService;

@Controller
@RequestMapping(EsitoCancellaSampleController.URL_BASE)
@SessionAttributes(PageData.MODEL_ATTRIBUTE_NAME)
public class EsitoCancellaSampleController {

	/**
	 * Request URL di input
	 */
	public static final String URL_BASE = "/sample/cancella-sample/esito";

	/**
	 * Viste di output
	 */
	public static final String VIEW_MODIFICA_EMAIL_ESITO_POSITIVO = "/sample/cancella-sample-esito-positivo";

	@Autowired
	SampleService sampleService;
	
	@GetMapping()
	public String visualizza(Model model,
							 @RequestParam(required = false, name = "codice") String codice) throws Exception {
		EsitoCancellaSamplePageData pageData = new EsitoCancellaSamplePageData((PageData) model.asMap().get(PageData.MODEL_ATTRIBUTE_NAME));
		pageData.setTitolo("Esito modifica sample - " + pageData.getTitolo());
		
		pageData.setSampleData(EsitoCancellaSamplePageData.SampleData.crea(LocalDateTime.now()));
		model.addAttribute(PageData.MODEL_ATTRIBUTE_NAME, pageData);
		return VIEW_MODIFICA_EMAIL_ESITO_POSITIVO;
	}

}
