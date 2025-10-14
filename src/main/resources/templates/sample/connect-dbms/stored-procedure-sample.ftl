<#include "../layout/header.ftl">

			<div id="main-page-content" class="page-content page-sidebar clearfix">
			
				<#include "../layout/breadcrumb.ftl">
		
				<h2>Informazione</h2>
		
				<div class="wrapper-content">

					<div class="frame-message neutral p-a-1">
		
						<p>La procedura <strong><#if pageData.sampleData.nomeProcedura??>${pageData.sampleData.nomeProcedura}</#if></strong> andata a buon fine.</p>
		
						<p><strong>esito :</strong> <#if pageData.sampleData.esito??>${pageData.sampleData.esito}</#if></p>
						<p><strong>descrizione esito:</strong> <#if pageData.sampleData.descrizioneEsito??>${pageData.sampleData.descrizioneEsito}</#if></p>
		
					</div>
				</div>
		
			</div>
		
<#include "../layout/footer.ftl">