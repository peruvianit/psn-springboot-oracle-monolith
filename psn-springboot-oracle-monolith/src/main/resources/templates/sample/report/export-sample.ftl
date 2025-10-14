<#include "../../layout/header.ftl">
	
	<div id="main-page-content" class="page-content page-sidebar clearfix">

		<div class="pageinfo-container isrelative">

			<#include "../../layout/breadcrumb.ftl">
			
		</div>

		<h2 class="m-t-0 m-b-1">Export Sample</h2>

		<div class="row m-x-0">

			<!-- colonna sinistra -->
			<div class="col-md-8 p-a-0">

				<!-- card scheda documento -->
				<div class="card p-a-15 m-b-15">

					<div class="card-body">
						<!-- riga -->
						<div class="row">
							<div class="col-xs-12 col-md-4">
								<div class="data-show">
									<p class="data-text">
									<a href="<@spring.url '/sample/export/excel' />" target="_blank"><span class="miuricon miur-file-excel"></span> Excel(Demo)</a>
									</p>
								</div>
							</div>
							<div class="col-xs-12 col-md-4">
								<div class="data-show">
									<p class="data-text">
									<a href="<@spring.url '/sample/export/pdf' />" target="_blank"><span class="miuricon miur-file-pdf"></span> Pdf(Demo)</a>
									</p>
								</div>
							</div>
							<div class="col-xs-12 col-md-4">
								<div class="data-show">
									<p class="data-text">
									<a href="<@spring.url '/sample/export/word' />" target="_blank"><span class="miuricon miur-file-word"></span> Word(Demo)</a>
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