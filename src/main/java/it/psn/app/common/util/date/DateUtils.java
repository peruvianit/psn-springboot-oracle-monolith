/**
 * 
 */
package it.psn.app.common.util.date;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.function.Function;

/**
 * @author Sergio Arellano.{PeruVianIT}
 *
 */
public class DateUtils {

	static DateTimeFormatter dateFormatter =  DateTimeFormatter.ofPattern("dd-MM-yyyy");
	
	static DateTimeFormatter dateTimeFormatter =  DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
	
	public static Function<String, LocalDate> convertStringToLocalDate = 
			(String data) -> LocalDate.parse(data, dateFormatter); 
	
	public static Function<String, LocalDateTime> convertStringToLocalDateTimeDxc = 
			(String data) -> {
				return LocalDateTime.parse(data,DateTimeFormatter.ISO_LOCAL_DATE_TIME);
			};
			
	public static Function<LocalDate, String> convertLocalDateToString = 
			(LocalDate data) -> data.format(dateFormatter); 
			
	public static Function<LocalDateTime, String> convertLocalDateTimeToString = 
			(LocalDateTime data) -> data.format(dateTimeFormatter); 
	
 
}
