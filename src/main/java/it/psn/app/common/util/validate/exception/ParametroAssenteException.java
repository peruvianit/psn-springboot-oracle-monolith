package it.psn.app.common.util.validate.exception;

public class ParametroAssenteException extends Exception {

	private static final long serialVersionUID = -743342628951309361L;

	private ParametroAssenteException(String nomeParametro) {
		super("Parametro assente: " + nomeParametro);
	}

	public static ParametroAssenteException crea(String nomeParametro) throws ParametroAssenteException {
		throw new ParametroAssenteException(nomeParametro);
	}

}
