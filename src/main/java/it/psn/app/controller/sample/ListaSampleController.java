package it.psn.app.controller.sample;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import it.psn.app.controller.BreadcrumbItem;
import it.psn.app.controller.PageData;
import it.psn.app.service.sample.SampleService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping(ListaSampleController.URL_BASE)
public class ListaSampleController {

	/**
	 * BaseRequest URL di input
	 */
	public static final String URL_BASE = "/sample";

	/**
	 * Viste di output
	 */
	public static final String VIEW_HOME = "/sample/lista-sample";

	/**
	 * Services
	 */
	
	@Autowired
	SampleService sampleService;
	
	@GetMapping({ "", URL_BASE })
	public String visualizza(Model model, HttpSession session, HttpServletRequest httpRequest) throws Exception {
		ListaSamplePageData pageData = new ListaSamplePageData((PageData) model.asMap().get(PageData.MODEL_ATTRIBUTE_NAME));
		pageData.setTitolo("Pagina iniziale - " + pageData.getTitolo());

		pageData.setListSampleData(sampleService.sample());
		
		
		List<BreadcrumbItem> breadcrumb = new ArrayList<BreadcrumbItem>();
		breadcrumb.add(BreadcrumbItem.creaPaginaIniziale(httpRequest.getContextPath() + "/"));
		breadcrumb = BreadcrumbItem.aggiungiBreadcrumbItem(breadcrumb, "Sample",
				httpRequest.getContextPath() + "/sample");
		breadcrumb = BreadcrumbItem.aggiungiBreadcrumbItem(breadcrumb, "Lista Sample", "");
		pageData.setBreadcrumb(breadcrumb);
		
		model.addAttribute("pageData", pageData);
		return VIEW_HOME;
	}

}
