/**
 * 
 */
package it.psn.app.service.sample;

import java.util.List;

import it.psn.app.common.util.validate.exception.ParametroAssenteException;
import it.psn.app.controller.sample.RecuperaSampleQuery;
import it.psn.app.controller.sample.cancella.CancellaSampleCommand;
import it.psn.app.service.exception.SampleNotFoundException;
import it.psn.app.service.exception.SampleServiceException;

/**
 * @author Sergio Arellano.{PeruVianIT}
 *
 * @version 1.0.0
 * @since 1.0.0
 */
public interface SampleService {

	List<SampleView> sample();
	
	SampleView recuperaSample(RecuperaSampleQuery recuperaSampleQuery) throws ParametroAssenteException, SampleServiceException;
	
	void modifica(ModificaSampleCommand modificaSampleCommand) throws ParametroAssenteException, SampleServiceException, SampleNotFoundException;
	
	void cancella(CancellaSampleCommand cancellaSampleCommand) throws ParametroAssenteException, SampleServiceException, SampleNotFoundException;
}
