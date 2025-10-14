package it.psn.app.controller.sample.modifica;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import it.psn.app.controller.BreadcrumbItem;
import it.psn.app.controller.PageData;
import it.psn.app.controller.sample.ListaSampleController;
import it.psn.app.controller.sample.RecuperaSampleQuery;
import it.psn.app.controller.sample.modifica.esito.EsitoModificaSampleController;
import it.psn.app.exception.ErrorResponse;
import it.psn.app.service.exception.SampleNotFoundException;
import it.psn.app.service.exception.SampleServiceException;
import it.psn.app.service.sample.ModificaSampleCommand;
import it.psn.app.service.sample.SampleService;
import it.psn.app.service.sample.SampleView;
import jakarta.servlet.http.HttpServletRequest;

@Controller
@RequestMapping(ModificaSampleController.URL_BASE)
@SessionAttributes("modificaSampleForm")
public class ModificaSampleController {
	
	/*
    * Add user in model attribute
    */
   @ModelAttribute("modificaSampleForm")
   public ModificaSampleForm setModificaSampleForm() {
      return new ModificaSampleForm();
   }
   

	/**
	 * Request URL di input
	 */
	public static final String URL_BASE = "/sample/modifica";
	
	public static final String URL_VISUALIZZA = "/visualizza";
	public static final String URL_SALVA = "/salva";
	public static final String URL_INDIETRO = "/indietro";

	/**
	 * Viste di output
	 */
	public static final String VIEW_MODFICA = "/sample/modifica-sample";

	@Autowired
	SampleService sampleService;

	@Autowired
	private ModificaSampleValidator modificaSampleValidator;
	
	@GetMapping()
	public String accedi(@ModelAttribute ModificaSampleForm modificaSampleForm,
						 @RequestParam(required = false, name = "codice") String codice,
						 RedirectAttributes redirectAttributes) throws Exception {
		
		SampleView sampleview = sampleService.recuperaSample(RecuperaSampleQuery.crea(codice));
		
		modificaSampleForm.setCodice(sampleview.getCodice());
		modificaSampleForm.setDescrizione(sampleview.getDescrizione());
		
		return "forward:" + URL_BASE + URL_VISUALIZZA;
	}
	
	@GetMapping(URL_VISUALIZZA)
	public String mostra(Model model, 
						 HttpServletRequest httpRequest, 
						 @ModelAttribute ModificaSampleForm modificaSampleForm,
						 @ModelAttribute ErrorResponse errorResponse) throws Exception {
		ModificaSamplePageData pageData = new ModificaSamplePageData((PageData) model.asMap().get(PageData.MODEL_ATTRIBUTE_NAME), errorResponse);
		pageData.setTitolo("Visualizza modifica sample - " + pageData.getTitolo());
		
		List<BreadcrumbItem> breadcrumb = new ArrayList<>();
		breadcrumb.add(BreadcrumbItem.creaPaginaIniziale(httpRequest.getContextPath()));
		breadcrumb.add(new BreadcrumbItem("Sample",
				httpRequest.getContextPath() + "/sample"));
		breadcrumb.add(new BreadcrumbItem("Modifica Sample", null));
		pageData.setBreadcrumb(breadcrumb);
		
		ModificaSamplePageData.SampleData sampleData = 
				ModificaSamplePageData.SampleData.crea(modificaSampleForm);
		
		pageData.setSampleData(sampleData);

		model.addAttribute("pageData", pageData);
		return VIEW_MODFICA;
	}

	@PostMapping(URL_SALVA)
	public String salva(Model model, 
						RedirectAttributes redirectAttributes, 
						ModificaSampleForm modificaSampleForm, 
						BindingResult errors) throws Exception {
		/*
		 * VALIDAZIONE FROM
		 */
		modificaSampleValidator.validate(modificaSampleForm, errors);
		if (errors.hasErrors()) {
			redirectAttributes.addFlashAttribute("modificaSampleForm", modificaSampleForm);
			redirectAttributes.addFlashAttribute("errorResponse", ErrorResponse.formValidationError(errors));
			return "redirect:" + URL_BASE + URL_VISUALIZZA;
		}
		
		try {
			sampleService.modifica(ModificaSampleCommand.crea(modificaSampleForm.getCodice(), 
					modificaSampleForm.getDescrizione()));
		} catch (SampleServiceException | SampleNotFoundException ex) {
			redirectAttributes.addFlashAttribute("modificaSampleForm", modificaSampleForm);
			redirectAttributes.addFlashAttribute("errorResponse", ErrorResponse.createRecoverableError(ex.getMessage()));
			return "redirect:" + URL_BASE + URL_VISUALIZZA;
		}

		return "redirect:" + EsitoModificaSampleController.URL_BASE + "?codice=" + modificaSampleForm.getCodice();
	}
	
	@GetMapping(URL_INDIETRO)
	public String indietro() throws Exception {
		return "redirect:" + ListaSampleController.URL_BASE;
	}

}
