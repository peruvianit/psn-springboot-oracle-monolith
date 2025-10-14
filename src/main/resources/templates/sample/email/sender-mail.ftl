<#include "../../layout/header.ftl">
	
	<div id="main-page-content" class="page-content page-sidebar clearfix">

		<div class="pageinfo-container isrelative">

			<#include "../../layout/breadcrumb.ftl">
			
		</div>

		<h2 class="m-t-0 m-b-1">Invio Mail</h2>
		
		<p class="data-text">
			<strong class="text-danger">Info:</strong> Per l'utilizzo del esempio, L'email è una delle attive per il utilizzo del server <strong>SMTP</strong>.</br>
			</br>  
		</p>

		<div class="row m-x-0">

			<!-- colonna sinistra -->
			<div class="col-md-8 p-a-0">

				<#include "../../layout/validate.ftl">

				<form id="form-sample" name="sign-list" class="validit" action="<@spring.url '/sample/sender-mail/send' />" method="post" autocomplete="off">

					<!-- card scheda documento -->
					<div class="card p-a-15 m-b-15">

						<div class="card-body">

							<h5 class="m-a-0 text-uppercase light">Sample</h5>
							<h3 class="text-danger"> Utenza abilitata per il Test</h3>
							<hr class="thin-color-separator border-cc-01 m-b-1">

							<!-- riga -->
							<div class="row">
								<div class="col-xs-12 col-md-12">
									<div class="form-group">
										<label for="request-note" class="clearfix block">
											<span>Email:</span>
										</label>
										<input type="text" id="email" name="email" class="form-control" rows="2" value="ciccio@istruzione.it" readonly/>
									</div>
								</div>
								
							</div>
							<!-- riga -->

						</div>

					</div>
					<!-- /card scheda documento -->

					
					<div class="form-container bg-white p-a-0">
						<div id="form-block-error" class="hidden">
							<p>Si sono verificati degli errori nei seguenti campi:</p>
							<div id="resume-errors"></div>
							<p>Per favore ricontrolla i campi del modulo</p>
						</div>
					</div>

					<button type="submit" class="btn btn-block submit-btn isrelative" aria-label="Invia" tabindex="1000">
						Invia
						<span class="miuricon miur-check-circled halign halign-pull-right m-r-5 icon-xtop-01 miuricon-sm"></span>
					</button>
				</form>
				
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

	<script src="<@spring.url '/master/assets/js/tablesaw.joined.min.js' />"></script>
	<script src="<@spring.url '/master/assets/js/form-validation.joined.min.js' />"></script>
	<script src="<@spring.url '/master/assets/js/form-utils.lib.min.js' />"></script>
	<script>
		"use strict";

		$(document).ready(function() {

			$(opt.eMainContainer).trigger("enhance.tablesaw");
			$.fn.pageAnchor({
				"anchorLink": c_opt.eJsIsAnchor
			});
		});
	</script>
	
<#include "../../layout/footer.ftl">