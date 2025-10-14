<#include "../../layout/header.ftl">
			
	<div id="main-page-content" class="page-content page-sidebar clearfix">

		<div class="pageinfo-container isrelative">
			<#include "../../layout/breadcrumb.ftl">
		</div>

		<div class="card p-a-15 m-b-15">
		
			<p class="m-b-15">
				Implementazione di un Repository Custom con utilizzo di <strong>@PersistenceContext</strong>.
			</p>
			<table class="tablesaw tablesaw-stack light-layout zebrastyle" data-tablesaw-mode="stack">
				<thead>
					<tr>
						<th class="cell-18 text-md-center">Codigo tipo caso</th>
						<th>Descrizione</th>
					</tr>
				</thead>
				<tbody>
					<#list pageData.listSampleData as sampleData>
						<tr>
							<td class="text-md-center">${sampleData.codigoTipoCaso}</td>
							<td>${sampleData.descrizioneTipoCaso}</td>
						</tr>
					</#list>
				</tbody>
			</table>
			
			<p class="m-t-15">
				<a href="<@spring.url '/sample-connect-dbms' />"><span class="miuricon miur-freccia-indietro"></span> Torna alla lista</a>
			</p>
			
		</div>
	</div>

	

	<script>

		"use strict";
	
		$(document).ready(function() {

			$.fn.showPopover({"placement":"auto", "trigger":"focus", "container":"body", "html":true});

			$.fn.actionConfirm();
		});
	</script>

<#include "../../layout/footer.ftl">