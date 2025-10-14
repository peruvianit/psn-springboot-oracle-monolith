<#if pageData.breadcrumb??>
	<ol class="breadcrumb m-b-1 p-b-06">
		<#list pageData.breadcrumb as breadcrumbItem>
			<#if breadcrumbItem?is_last>
				<li class="active">${breadcrumbItem.nome}</li>
			<#elseif breadcrumbItem?is_first> 
				<li>
					<a href="${breadcrumbItem.url}">
						<span class="miuricon miur-home-1"></span> ${breadcrumbItem.nome}
					</a>
				</li>
			<#else>
				<#if breadcrumbItem.url??>
					<li><a href="${breadcrumbItem.url}">${breadcrumbItem.nome}</a></li>
				<#else>	
					<li>${breadcrumbItem.nome}</li>
				</#if>
			</#if>
		</#list>
	</ol>
</#if>	