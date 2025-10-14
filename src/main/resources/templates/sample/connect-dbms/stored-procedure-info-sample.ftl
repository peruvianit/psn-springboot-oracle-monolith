<#include "../../layout/header.ftl">
	
	<div id="main-page-content" class="page-content page-sidebar clearfix">

		<div class="pageinfo-container isrelative">

			<#include "../../layout/breadcrumb.ftl">
			
		</div>

		<h2 class="m-t-0 m-b-1">Chiamata Procedura Sample</h2>
		
		<p class="data-text">
			<strong class="text-danger">Importante!</strong>, per l'utilizzo del esempio, sara funzionante sul progetto clonato. </br>
			Dopo che hai clonato il template, bisogna creare un Stored Procedure sul schema del tuo progetto, il <strong>Stored procedured di test</strong>.</br>  
			Il script lo <strong>trovi</strong> su : </br>
			/web-template-spring-boot/src/main/resources/create_stored_procedure_test-pls.sql</br></br> 
		</p>

		<div class="row m-x-0">

			<!-- colonna sinistra -->
			<div class="col-md-8 p-a-0">

				<!-- card scheda documento -->
				<div class="card p-a-15 m-b-15">

					<div class="card-body">
						<!-- riga -->
						<div class="row">
							<div class="col-xs-12 col-md-6">
								<div class="data-show">
									<p class="data-text">
									<a href="<@spring.url '/sample/stored-procedure/execute' />"><span class="miuricon miur-setting-gear"></span> Stored Procedure (Demo)</a>
									</p>
								</div>
							</div>
							
						</div>
						<!-- riga -->
					</div>

				</div>
				<!-- /card scheda documento -->

			</div>
			<!-- /colonna sinistra -->

			<!-- colonna destra -->
			<div class="col-md-4 p-a-0">

				<div class="hidden-md hidden-lg">
					<hr class="m-y-25">
				</div>

				<!-- wrapper necessario per creare uno spazio ad hoc -->
				<div class="container-right-col">
				</div>

			</div>

		</div>
	</div>
	
<#include "../../layout/footer.ftl">