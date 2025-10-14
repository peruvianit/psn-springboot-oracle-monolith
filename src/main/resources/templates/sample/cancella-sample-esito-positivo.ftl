<#include "../layout/header.ftl">

			<div id="main-page-content" class="page-content page-sidebar clearfix">
			
				<#include "../layout/breadcrumb.ftl">
		
				<h2>Informazione</h2>
		
				<div class="wrapper-content">

					<div class="frame-message neutral p-a-1">
		
						<p>I dati sono stati correttamente cancellati, data modifica <#if pageData.sampleData.dataModifica??>${pageData.sampleData.dataModifica}</#if></p>
		
						<p>Tra <span class="seconds-redir">-</span> secondi verrai reindirizzato. Se non vuoi attendere clicca sul bottone</p>
		
					</div>
		
					<a data-autoredirect="15"  href="<@spring.url '/sample/cancella/indietro' />" class="btn btn-block submit-btn">Torna alla pagina iniziale</a>
		
				</div>
		
			</div>
		
			<script>
				$(document).ready(function() {
					$.fn.autoRedirect();
				});
			</script>
	
<#include "../layout/footer.ftl">