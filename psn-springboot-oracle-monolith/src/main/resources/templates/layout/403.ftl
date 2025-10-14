<#include "../layout/header.ftl">


			<div id="main-page-content" class="page-content">

				<h2 class="text-center">Accesso non autorizzato</h2>

				<div class="wrapper-content a13y-read m-x-a">
		
					<div class="frame-message error text-center">
		
						<p>Non puoi accedere al contenuto richiesto</p>
		
					</div>
					
					<a href="<@spring.url '/home' />" class="btn btn-block submit-btn">Torna alla pagina iniziale</a>
					
				</div>
		
			</div>

<#include "../layout/footer.ftl">

<!-----------------------------------------------------------
  EXCEPTION STACKTRACE
  -----------------------------------------------------------
<#if (error.stacktrace)??>${error.stacktrace}</#if>  
-->