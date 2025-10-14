<#setting locale="it_IT">
<#setting number_format="#,###,##0.##">
<style>
	table {
		font-size: 12px;
	}
</style>
<h3><#if pageData.titolo??>${pageData.titolo}</#if></h3>
<h4>Elaborazione : <#if pageData.dataElaborazione??>${pageData.dataElaborazione}</#if></h4>
<table>
	<tr>
		<td></td>
	</tr>
	<tr>
		<td colspan="2" style="font-weight: bold;border: 1 solid black;text-align: center;">SVILUPPATORE</td>
		<td colspan="2" style="font-weight: bold;border: 1 solid black;text-align: center;">PROGETTTO</td>
		<td rowspan="2" style="font-weight: bold;border: 1 solid black;text-align: center;">NOTA</td>
	</tr>
	<tr>
		<td style="font-weight: bold;border: 1 solid black;text-align: center;">NOME</td>
		<td style="font-weight: bold;border: 1 solid black;text-align: center;">COGNOME</td>
		<td style="font-weight: bold;border: 1 solid black;text-align: center;">CODICE</td>
		<td style="font-weight: bold;border: 1 solid black;text-align: center;">DESCRIZIONE</td>
	</tr>
	
	<#if pageData.listRigheData??>
		<#list pageData.listRigheData as item>
			<tr>
				<td style="border: 1 solid black;"><#if item.nome??>${item.nome}</#if></td>
				<td style="border: 1 solid black;"><#if item.cognome??>${item.cognome}</#if></td>
				<td style="border: 1 solid black;"><#if item.codiceProgetto??>${item.codiceProgetto}</#if></td>
				<td style="border: 1 solid black;"><#if item.descrizioneProgetto??>${item.descrizioneProgetto}</#if></td>
				<td style="border: 1 solid black;"><#if item.nota??>${item.nota}</#if></td>
			</tr>
		</#list>
	</#if>
	
	<tr>
		<td></td>
	</tr>
	
</table>
<br>
<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>