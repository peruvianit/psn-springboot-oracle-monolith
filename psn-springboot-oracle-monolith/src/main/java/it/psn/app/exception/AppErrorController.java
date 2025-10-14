package it.psn.app.exception;

import it.psn.app.controller.PageData;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Controller per la gestione centralizzata degli errori applicativi.
 *
 * Compatibile con Spring Boot 3.3 / Spring Framework 6.
 * Gestisce in modo centralizzato tutte le pagine di errore (400, 401, 403, 404, 500)
 * e sostituisce completamente il vecchio comportamento "Whitelabel".
 *
 * @author Emiliano Protti
 * @refactoredBy Stefano, PSN-ready (2025)
 */
@Controller
@RequestMapping(AppErrorController.URL_ERRORE)
public class AppErrorController implements ErrorController {

    private static final Logger logger = LoggerFactory.getLogger(AppErrorController.class);

    // URL base
    public static final String URL_ERRORE = "/error";

    // Sottopagine errore
    public static final String URL_500 = "/500";
    public static final String URL_400 = "/400";
    public static final String URL_401 = "/401";
    public static final String URL_403 = "/403";
    public static final String URL_404 = "/404";

    // View FreeMarker
    public static final String VIEW_ERRORE_GENERICO = "/layout/error";
    public static final String VIEW_ERRORE_400 = "/layout/400";
    public static final String VIEW_ERRORE_401 = "/layout/401";
    public static final String VIEW_ERRORE_403 = "/layout/403";
    public static final String VIEW_ERRORE_404 = "/layout/404";
    public static final String VIEW_ERRORE_500 = "/layout/500";

    // Messaggio generico di fallback
    public static final String ERROR_MESSAGE = "Si è verificato un errore inatteso";

    /**
     * Entry point generico per /error
     * (viene invocato per tutti i codici HTTP non gestiti esplicitamente).
     */
    @GetMapping
    public String gestisciErroreGenerico(@ModelAttribute("errorResponse") ErrorResponse errorResponse,
                                         Model model,
                                         HttpServletRequest request) {

        Object statusObj = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
        int statusCode = (statusObj != null) ? Integer.parseInt(statusObj.toString()) : 500;

        // Logging strutturato PSN-style
        logger.warn("Gestione errore HTTP {} su path {}", statusCode,
                request.getAttribute(RequestDispatcher.ERROR_REQUEST_URI));

        // Se 404 → pagina dedicata
        if (statusCode == HttpStatus.NOT_FOUND.value()) {
            return VIEW_ERRORE_404;
        }

        // Se 403 → accesso negato
        if (statusCode == HttpStatus.FORBIDDEN.value()) {
            return VIEW_ERRORE_403;
        }

        // Se 401 → non autorizzato
        if (statusCode == HttpStatus.UNAUTHORIZED.value()) {
            return VIEW_ERRORE_401;
        }

        // Se 400 → bad request
        if (statusCode == HttpStatus.BAD_REQUEST.value()) {
            return VIEW_ERRORE_400;
        }

        // Default → 500
        PageData pageData = (PageData) model.asMap().get(PageData.MODEL_ATTRIBUTE_NAME);
        if (errorResponse == null || errorResponse.getMessaggio() == null) {
            errorResponse = ErrorResponse.creaErrorResponseDaEccezione(new Exception(ERROR_MESSAGE));
        }

        model.addAttribute("error", errorResponse);
        model.addAttribute("pageData", pageData);

        return VIEW_ERRORE_500;
    }

    /**
     * Endpoint dedicato per 500 - Internal Server Error.
     */
    @GetMapping(URL_500)
    public String visualizza500(@ModelAttribute("errorResponse") ErrorResponse errorResponse, Model model) {
        return renderErrore(errorResponse, model, VIEW_ERRORE_500, "Errore interno del server");
    }

    /**
     * Endpoint dedicato per 404 - Not Found.
     */
    @GetMapping(URL_404)
    public String visualizza404(@ModelAttribute("errorResponse") ErrorResponse errorResponse, Model model) {
        return renderErrore(errorResponse, model, VIEW_ERRORE_404, "Pagina non trovata");
    }

    /**
     * Endpoint dedicato per 403 - Forbidden.
     */
    @GetMapping(URL_403)
    public String visualizza403(@ModelAttribute("errorResponse") ErrorResponse errorResponse, Model model) {
        return renderErrore(errorResponse, model, VIEW_ERRORE_403, "Accesso non autorizzato");
    }

    /**
     * Endpoint dedicato per 401 - Unauthorized.
     */
    @GetMapping(URL_401)
    public String visualizza401(@ModelAttribute("errorResponse") ErrorResponse errorResponse, Model model) {
        return renderErrore(errorResponse, model, VIEW_ERRORE_401, "Utente non autenticato");
    }

    /**
     * Endpoint dedicato per 400 - Bad Request.
     */
    @GetMapping(URL_400)
    public String visualizza400(@ModelAttribute("errorResponse") ErrorResponse errorResponse, Model model) {
        return renderErrore(errorResponse, model, VIEW_ERRORE_400, "Richiesta non valida");
    }

    /**
     * Metodo centralizzato per il rendering delle pagine errore.
     */
    private String renderErrore(ErrorResponse errorResponse, Model model, String viewName, String messaggioDefault) {
        PageData pageData = (PageData) model.asMap().get(PageData.MODEL_ATTRIBUTE_NAME);

        if (errorResponse == null || errorResponse.getMessaggio() == null) {
            errorResponse = ErrorResponse.creaErrorResponseDaEccezione(new Exception(messaggioDefault));
        }

        model.addAttribute("error", errorResponse);
        model.addAttribute("pageData", pageData);

        return viewName;
    }
}
