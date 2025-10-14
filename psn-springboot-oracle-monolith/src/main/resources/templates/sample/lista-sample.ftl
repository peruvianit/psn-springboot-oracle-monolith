<#include "../layout/header.ftl">
			
	<div id="main-page-content" class="page-content page-sidebar clearfix">

		<div class="pageinfo-container isrelative">
			<#include "../layout/breadcrumb.ftl">
		</div>

		<div class="card p-a-15 m-b-15">
			<table class="tablesaw tablesaw-stack light-layout zebrastyle" data-tablesaw-mode="stack">
				<thead>
					<tr>
						<th class="cell-18 text-md-center">Codice</th>
						<th>Descrizione</th>
						<th class="cell-20 text-md-center">Azioni</th>
					</tr>
				</thead>
				<tbody>
					<#list pageData.listSampleData as sampleData>
						<tr>
							<td class="text-md-center">${sampleData.codice}</td>
							<td>${sampleData.descrizione}</td>
							<td class="text-md-center actions-link actions-link-bordered">
								<a href="<@spring.url '/sample/dettaglio?codice=${sampleData.codice}' />" title="visualizza dettaglio">
										<span class="miuricon miur-eye"></span>
								</a>
								<a href="<@spring.url '/sample/modifica?codice=${sampleData.codice}' />" title="modifica">
										<span class="miuricon miur-pencil-1"></span>
								</a>
								<a href="<@spring.url '/sample/cancella?codice=${sampleData.codice}' />" title="cancella">
										<span class="miuricon miur-trash-2"></span>
								</a>
							</td>
						</tr>
					</#list>
				</tbody>
			</table>
		</div>
	</div>

	<script>

		"use strict";
	
		$(document).ready(function() {

			$.fn.showPopover({"placement":"auto", "trigger":"focus", "container":"body", "html":true});

			$.fn.actionConfirm();
		});
	</script>

<#include "../layout/footer.ftl">