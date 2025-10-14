package it.psn.app.controller.sample.modifica;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

import it.psn.app.controller.validator.BaseValidator;

@Component
public class ModificaSampleValidator extends BaseValidator {
	
	@Override
	public boolean supports(Class<?> clazz) {
		return ModificaSampleForm.class.equals(clazz);
	}

	@Override
	public void validate(Object target, Errors errors) {

		ModificaSampleForm modificaSampleRequest = (ModificaSampleForm) target;

		if (modificaSampleRequest.getCodice() == null || modificaSampleRequest.getCodice().isEmpty()) {
			errors.rejectValue("codice", creaMessaggioCampoObbligatorio("codice"));
		}

		if (modificaSampleRequest.getDescrizione() == null || modificaSampleRequest.getDescrizione().isEmpty()) {
			errors.rejectValue("descrizione", creaMessaggioCampoObbligatorio("descrizione"));
		}
		
	}

}
