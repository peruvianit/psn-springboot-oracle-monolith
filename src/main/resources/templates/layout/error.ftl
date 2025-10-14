<#include "../layout/header.ftl">


			<div id="main-page-content" class="page-content">

				<#if error.messaggio??>
					<h2 class="text-center">Si &egrave; verificato un errore</h2>
				<#else>
					<h2 class="text-center">Servizio temporaneamente non disponibile</h2>
				</#if>

				<div class="wrapper-content a13y-read m-x-a">
		
					<div class="frame-message error text-center">
					
						<#if error.messaggio??>
							<p>${error.messaggio}</p>
						<#else>
							<p>Siamo spiacenti si &egrave; verificato un problema tecnico sui nostri sistemi</p>
						</#if>
		
					</div>
					
					<a href="<@spring.url '/app/home' />" class="btn btn-block submit-btn">Torna alla pagina iniziale</a>
					
				</div>
		
			</div>

<#include "../layout/footer.ftl">

<!-----------------------------------------------------------
  EXCEPTION STACKTRACE
  -----------------------------------------------------------
<#if (error.stacktrace)??>${error.stacktrace}</#if>  
-->