<#include "../../layout/header.ftl">
			
	<div id="main-page-content" class="page-content page-sidebar clearfix">

		<div class="pageinfo-container isrelative">
			<#include "../../layout/breadcrumb.ftl">
		</div>

		<div class="card p-a-15 m-b-15">
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
			<#assign prefixUrl = '${pageData.prefixUrl}' />
			<#assign filtro = '' />
			<#include "../../layout/pagination.ftl">
	
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