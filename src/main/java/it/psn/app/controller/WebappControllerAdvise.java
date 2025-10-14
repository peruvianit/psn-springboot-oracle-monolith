package it.psn.app.controller;

import java.nio.file.AccessDeniedException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.info.BuildProperties;
import org.springframework.ui.Model;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.mvc.support.DefaultHandlerExceptionResolver;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import it.psn.app.exception.AppErrorController;
import it.psn.app.exception.ErrorResponse;
import it.psn.app.interfaccia.menu.MenuServiceFacade;
import it.psn.app.interfaccia.menu.MenuView;
import it.psn.app.interfaccia.menu.RecuperaMenuAbilitatiCommand;
import it.psn.app.interfaccia.menu.SelectableMenuView;
import it.psn.app.interfaccia.menu.VoceMenuSelezionata;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

/**
 * ControllerAdvice globale per la gestione centralizzata di:
 * - dati di pagina (PageData)
 * - gestione errori di alto livello
 * - compatibile Spring Boot 3.x / Spring MVC 6
 */
@ControllerAdvice
@SessionAttributes("VoceMenuSelezionata")
public class WebappControllerAdvise extends DefaultHandlerExceptionResolver {

    private static final Logger logger = LoggerFactory.getLogger(WebappControllerAdvise.class);

    @Value("${application.title}")
    private String applicationTitle;

    @Value("${application.subtitle}")
    private String applicationSubtitle;

    @Value("${application.menu.principale}")
    private List<String> codiciMenu;

    @Value("${application.menu.posizione:LATERALE}")
    private String posizioneMenu;

    private final String urlLogout = "auth/logout";

    @Value("${google.analytics.enabled:false}")
    private boolean googleAnalyticsEnable;

    @Value("${google.analytics.id:}")
    private String googleAnalyticsId;

    @Value("${cdn.enabled:false}")
    private boolean cdnEnabled;

    @Value("${cdn.url:}")
    private String cdnUrl;

    @Autowired(required = false)
    private BuildProperties buildProperties;

    @Autowired
	private MenuServiceFacade service;
    
    /**
     * Inizializza i dati base da includere nel Model di tutte le pagine MVC.
     */
    @ModelAttribute
    public void recuperaPageData(HttpSession session,
                            HttpServletRequest httpServletRequest,
                            Model model,
                            VoceMenuSelezionata voceMenuSelezionata) {

        boolean mostraMenu = true;
        List<SelectableMenuView> selectableMenuViews = null;
        List<BreadcrumbItem> breadcrumb = null;
        String titolo = applicationTitle;
        String nomeProfilo = null;
        String nomeContesto = null;

        
//        if (sidiUser == null) {
//			mostraMenu = false;
//		} else {
			/*
			 * COSTRUZIONE UTENTE
			 */
//			utenteView = UtenteView.creaUtenteView(sidiUser.getUsername(), sidiUser.getNome(), sidiUser.getCognome(),
//					sidiUser.getCodiceFiscale());
//			logger.info("ACCESSO UTENTE: " + utenteView.toString());

			if (isPaginaErrore(httpServletRequest)) {
				mostraMenu = false;
			} else {
				/*
				 * COSTRUZIONE MENU
				 */
				List<MenuView> menuViews = null;
//				if (!sidiUser.getProfili().isEmpty()) {
					Set<String> codiciProfilo = new HashSet<>();
//
//					if (sidiUser.getProfiloSelezionato() != null) {
//						Profilo profilo = sidiUser.getProfiloSelezionato();
//						codiciProfilo.add(profilo.getCodice().getCodice());
//					} else {
//						for (Profilo profilo : sidiUser.getProfili()) {
//							codiciProfilo.add(profilo.getCodice().getCodice());
//						}
//					}
//
					menuViews = service.recuperaMenuAbilitati(new RecuperaMenuAbilitatiCommand(codiciProfilo));
					selectableMenuViews = creaMenuSideBar(menuViews, selectableMenuViews, model,
							httpServletRequest, session, codiciMenu);
//				}

				/*
				 * SELEZIONE VOCE MENU
				 */
				voceMenuSelezionata = (VoceMenuSelezionata) model.asMap().get(VoceMenuSelezionata.ATTRIBUTE_NAME);

				/*
				 * Se non è stata trovata una voce di menu per la url sulla request, utilizzo
				 * l'ultima voceMenuSelezionata che ho inserito in sessione
				 */
//				if (voceMenuSelezionata.getVoceMenuView() == null) {
//					voceMenuSelezionata = (VoceMenuSelezionata) session
//							.getAttribute(VoceMenuSelezionata.ATTRIBUTE_NAME);
//					if (voceMenuSelezionata != null) {
//						selectableMenuViews = SelectableMenuView.selezionaSelectableMenuViewsPerIdVoceMenuView(
//								menuViews, voceMenuSelezionata.getVoceMenuView().getId(), codiciMenu);
//					}
//				}

				session.setAttribute(VoceMenuSelezionata.ATTRIBUTE_NAME, voceMenuSelezionata);

				/*
				 * COSTRUZIONE BREADCRUMB
				 */
				breadcrumb = BreadcrumbItem.crea(voceMenuSelezionata,
						httpServletRequest.getContextPath() + "/app/home");
			}

			/*
			 * PROFILO E CONTESTO SELEZIONATO
			 */
//			nomeContesto = sidiUser.getContestoSelezionato() != null
//					? sidiUser.getContestoSelezionato().getNome().getNome()
//					: null;
//			nomeProfilo = sidiUser.getProfiloSelezionato() != null ? sidiUser.getProfiloSelezionato().getNome().getNome()
//					: null;
//		}
        
        // Calcolo URL CDN o context-path base
        if (!cdnEnabled) {
            String requestUrl = httpServletRequest.getRequestURL().toString();
            String[] parts = requestUrl.split("/");
            if (parts.length >= 4) {
                String server = parts[0] + "//" + parts[2];
                String context = parts[3];
                cdnUrl = server + "/" + context;
            }
        }

        // Versione applicazione
        String versione = (buildProperties != null) ? buildProperties.getVersion() : "1.0.0";

        // Popolamento oggetto PageData
        model.addAttribute(PageData.MODEL_ATTRIBUTE_NAME,
                new PageData(
                        null,                 // utenteView
                        selectableMenuViews,  // selectableMenuViews
                        titolo,
                        null,                 // breadcrumb
                        applicationTitle,
                        applicationSubtitle,
                        "$urlAreaRiservata",
                        "$urlSidiWeb",
                        urlLogout,
                        mostraMenu,
                        posizioneMenu,
                        googleAnalyticsEnable,
                        googleAnalyticsId,
                        cdnEnabled,
                        cdnUrl,
                        nomeProfilo,
                        nomeContesto,
                        versione
                ));
    }
    
    private List<SelectableMenuView> creaMenuSideBar(List<MenuView> menuViews,
			List<SelectableMenuView> selectableMenuViews, Model model, HttpServletRequest httpServletRequest,
			HttpSession session, List<String> codiciMenu) {
		selectableMenuViews = SelectableMenuView.creaSelectableMenuViews(model, menuViews,
				httpServletRequest.getRequestURI(), codiciMenu);
		return selectableMenuViews;
	}

    /**
     * Gestione 403 - Accesso negato
     */
    @ExceptionHandler(AccessDeniedException.class)
    public String handleAccessDeniedException(AccessDeniedException ex, RedirectAttributes redirectAttributes) {
        logger.warn("Accesso negato: {}", ex.getMessage());
        redirectAttributes.addFlashAttribute("errorResponse", ErrorResponse.creaErrorResponseDaEccezione(ex));
        return "redirect:" + AppErrorController.URL_ERRORE + AppErrorController.URL_403;
    }

    /**
     * Gestione 405 - Metodo HTTP non supportato
     */
    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public String handleHttpRequestMethodNotSupported(HttpRequestMethodNotSupportedException ex,
                                                      RedirectAttributes redirectAttributes) {
        logger.error("Metodo HTTP non supportato: {}", ex.getMessage());
        redirectAttributes.addFlashAttribute("errorResponse", ErrorResponse.creaErrorResponseDaEccezione(ex));
        return "redirect:" + AppErrorController.URL_ERRORE + AppErrorController.URL_404;
    }

    /**
     * Gestione risorsa o path non trovato (HTTP 404)
     */
    @ExceptionHandler(org.springframework.web.servlet.resource.NoResourceFoundException.class)
    public String handleNoResourceFoundException(org.springframework.web.servlet.resource.NoResourceFoundException ex,
                                                 RedirectAttributes redirectAttributes,
                                                 HttpServletRequest request) {
        logger.warn("Risorsa non trovata: {}", ex.getResourcePath());

        redirectAttributes.addFlashAttribute("errorResponse",
                ErrorResponse.creaErrorResponseDaEccezione(ex));

        // forward diretto per non perdere lo status 404
        return "forward:" + AppErrorController.URL_ERRORE + AppErrorController.URL_404;
    }
    
    /**
     * Gestione eccezioni generiche (500)
     */
    @ExceptionHandler(Exception.class)
    public String handleGenericException(Exception ex, RedirectAttributes redirectAttributes) {
        String message = ex.getMessage() != null ? ex.getMessage() : ex.getClass().getSimpleName();
        logger.error("Errore non gestito: {}", message, ex);
        redirectAttributes.addFlashAttribute("errorResponse", ErrorResponse.creaErrorResponseDaEccezione(ex));
        return "redirect:" + AppErrorController.URL_ERRORE + AppErrorController.URL_500;
    }

    /**
     * Gestione errori imprevisti (Throwable a livello di VM)
     */
    @ExceptionHandler(Throwable.class)
    public String handleThrowable(Throwable ex, RedirectAttributes redirectAttributes) {
        logger.error("Errore grave a livello di JVM: {}", ex.getMessage(), ex);
        redirectAttributes.addFlashAttribute("errorResponse", ErrorResponse.creaErrorResponseDaEccezione(ex));
        return "redirect:" + AppErrorController.URL_ERRORE + AppErrorController.URL_500;
    }

    /**
     * Utility per riconoscere se si sta renderizzando una pagina errore.
     */
    @SuppressWarnings("unused")
	private boolean isPaginaErrore(HttpServletRequest request) {
        String path = request.getRequestURI();
        return path != null && path.contains("/error");
    }
}
