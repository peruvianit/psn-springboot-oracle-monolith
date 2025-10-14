<#include "../layout/header.ftl">
	
	<div id="main-page-content" class="page-content page-sidebar clearfix">

		<div class="pageinfo-container isrelative">

			<#include "../layout/breadcrumb.ftl">
			
		</div>

		<h2 class="m-t-0 m-b-1">Dettaglio Sample</h2>

		<div class="row m-x-0">

			<!-- colonna sinistra -->
			<div class="col-md-8 p-a-0">

				<!-- card scheda documento -->
				<div class="card p-a-15 m-b-15">

					<div class="card-body">

						<h5 class="m-a-0 text-uppercase light">Scheda Sample</h5>
						<hr class="thin-color-separator border-cc-01 m-b-1">

						<!-- riga -->
						<div class="row">
							<div class="col-xs-12 col-md-4">
								<div class="data-show">
									<p class="data-text">Codice:</p>
									<p class="data-value">${pageData.sampleData.codice}</p>
								</div>
							</div>
							<div class="col-xs-12 col-md-4">
								<div class="data-show">
									<p class="data-text">Descrizione:</p>
									<p class="data-value">${pageData.sampleData.descrizione}</p>
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

		<a href="<@spring.url '/sample/dettaglio/indietro' />"><span class="miuricon miur-freccia-indietro"></span> Torna alla lista</a>

	</div>

	<script src="<@spring.url '/master/assets/js/tablesaw.joined.min.js' />"></script>
	<script>
		"use strict";

		$(document).ready(function() {

			$(opt.eMainContainer).trigger("enhance.tablesaw");
			$.fn.pageAnchor({
				"anchorLink": c_opt.eJsIsAnchor
			});
		});
	</script>
	
<#include "../layout/footer.ftl">