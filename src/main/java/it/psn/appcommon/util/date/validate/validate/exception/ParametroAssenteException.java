package it.psn.appcommon.util.date.validate.validate.exception;

public class ParametroAssenteException extends Exception {

	private static final long serialVersionUID = -743342628951309361L;

	private ParametroAssenteException(String nomeParametro) {
		super("Parametro assente: " + nomeParametro);
	}

	public static ParametroAssenteException crea(String nomeParametro) throws ParametroAssenteException {
		throw new ParametroAssenteException(nomeParametro);
	}

}
