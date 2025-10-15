package it.psn.app.common.util.validate.exception;

public class ParametroListaVuotaException extends Exception {

	private static final long serialVersionUID = -743342628951309361L;

	private ParametroListaVuotaException(String nomeParametro) {
		super("Lista vuota : " + nomeParametro);
	}

	public static ParametroListaVuotaException crea(String nomeParametro) throws ParametroListaVuotaException {
		throw new ParametroListaVuotaException(nomeParametro);
	}

}
