<#include "../../layout/header.ftl">
			
	<div id="main-page-content" class="page-content page-sidebar clearfix">

		<div class="pageinfo-container isrelative">
			<#include "../../layout/breadcrumb.ftl">
		</div>

		<div class="row m-b-15 clearfix">
			<div class="col-xs-12 col-md-6">				
				<a href="<@spring.url '/sample-connect-dbms/criteria-builder' />" class="btn btn-block submit-btn">
					Criteria Builder (Query Dinamica)
					<span class="miuricon miur-drag-intero halign halign-pull-right m-r-15 icon-xtop-01 miuricon-sm"></span>
				</a>
			</div>
			
			<div class="col-xs-12 col-md-6">				
				<a href="<@spring.url '/sample-connect-dbms/query-native' />" class="btn btn-block submit-btn">
					Query Nativa (Query Dinamica)
					<span class="miuricon miur-drag-intero halign halign-pull-right m-r-15 icon-xtop-01 miuricon-sm"></span>
				</a>
			</div>
			
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