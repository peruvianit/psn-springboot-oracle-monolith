<table>
	<tr>
		<td colspan="4" style="font-weight: bold;text-align: center;"><#if pageData.titolo??>${pageData.titolo}</#if></td>
	</tr>
	<tr>
		<td></td>
	</tr>
	<tr>
		<td></td>
	</tr>
	<tr>
		<td></td>
	</tr>
	<tr>
		<td colspan="2">Applicazione:</td>
		<td colspan="2" style="font-weight: bold;"><#if pageData.titoloApplicazione??>${pageData.titoloApplicazione}</#if></td>
	</tr>
	<tr>
		<td colspan="2">Report prodotto il:</td>
		<td colspan="2" style="font-weight: bold;"><#if pageData.dataElaborazione??>${pageData.dataElaborazione}</#if></td>
	</tr>
	<tr>
		<td></td>
	</tr>
	<tr>
		<td style="font-weight: bold;border: 1 solid black;text-align: center;">Codice</td>
		<td style="font-weight: bold;border: 1 solid black;text-align: center;">Descrizione</td>
		<td style="font-weight: bold;border: 1 solid black;text-align: center;">Valore</td>
	</tr>
	</tr>
	<#assign rigaCorrenteCiclo = 9>
	<#if pageData.listRigheData??>
		<#list pageData.listRigheData as item>
			<tr>
				<td style="border: 1 solid black;"><#if item.codice??>${item.codice}</#if></td>
				<td style="border: 1 solid black;"><#if item.descrizione??>${item.descrizione}</#if></td>
				<td style="border: 1 solid black;" class="numero intero"><#if item.valore??>${item.valore}</#if></td>
			</tr>
			<#assign rigaCorrenteCiclo++>
		</#list>
	</#if>
	<tr>
		<td colspan="2" style="font-weight: bold;text-align: right;"></td>
		<td style="border: 1 solid black;" class="formula numero intero">SUM(C9:C${rigaCorrenteCiclo - 1})</td>
	</tr>
		<td></td>
	</tr>
	
</table>