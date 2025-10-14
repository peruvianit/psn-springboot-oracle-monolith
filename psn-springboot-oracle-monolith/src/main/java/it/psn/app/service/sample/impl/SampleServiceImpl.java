/**
 * 
 */
package it.psn.app.service.sample.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.stereotype.Service;

import it.psn.app.controller.sample.RecuperaSampleQuery;
import it.psn.app.controller.sample.cancella.CancellaSampleCommand;
import it.psn.app.service.exception.SampleNotFoundException;
import it.psn.app.service.exception.SampleServiceException;
import it.psn.app.service.sample.ModificaSampleCommand;
import it.psn.app.service.sample.SampleService;
import it.psn.app.service.sample.SampleView;
import it.psn.appcommon.util.date.validate.ParamUtils;
import it.psn.appcommon.util.date.validate.ParamUtils.Parametro;
import it.psn.appcommon.util.date.validate.validate.exception.ParametroAssenteException;

/**
 * 
 * @author Sergio Arellano.{PeruVianIT}
 *
 * @version 1.0.0
 * @since 1.0.0
 * 
 */
@Service
public class SampleServiceImpl implements SampleService {

	@Override
	public List<SampleView> sample() {
		
		
		String[] array = {"A", "B", "C", "D", "E"};
		
		Stream<String> stream1 = Arrays.stream(array);
		
		List<SampleView> listSampleView = new ArrayList<>();
		
		stream1.forEach(ele -> {
			listSampleView.add(SampleView.crea(ele,"Descrizione " + ele, LocalDateTime.now()));
		});
		// TODO Auto-generated method stub
		return listSampleView;
	}

	@Override
	public SampleView recuperaSample(RecuperaSampleQuery recuperaSampleQuery) throws SampleServiceException, ParametroAssenteException {
		
		ParamUtils.verifyNotNullOrEmpty(recuperaSampleQuery, Parametro.RECUPERA_SAMPLE_QUERY);
		ParamUtils.verifyNotNullOrEmpty(recuperaSampleQuery.getCodice(), Parametro.CODICE);
		
		return SampleView.crea(recuperaSampleQuery.getCodice(), "Descrizione " + recuperaSampleQuery.getCodice(), LocalDateTime.now());
	}

	@Override
	public void modifica(ModificaSampleCommand modificaSampleCommand) throws ParametroAssenteException, SampleServiceException, SampleNotFoundException {
		
		ParamUtils.verifyNotNullOrEmpty(modificaSampleCommand, Parametro.MODIFICA_SAMPLE_COMMAND);
		ParamUtils.verifyNotNullOrEmpty(modificaSampleCommand.getCodice(), Parametro.CODICE);
		ParamUtils.verifyNotNullOrEmpty(modificaSampleCommand.getDescrizione(), Parametro.DESCRIZIONE);
		
		SampleView.crea(modificaSampleCommand.getCodice(), modificaSampleCommand.getDescrizione(), LocalDateTime.now());
	}

	@Override
	public void cancella(CancellaSampleCommand cancellaSampleCommand) throws ParametroAssenteException, SampleServiceException, SampleNotFoundException {

		ParamUtils.verifyNotNullOrEmpty(cancellaSampleCommand, Parametro.CANCELLA_SAMPLE_COMMAND);
		ParamUtils.verifyNotNullOrEmpty(cancellaSampleCommand.getCodice(), Parametro.CODICE);
		
		// implementazione Cancellazione 
		
	}

}
