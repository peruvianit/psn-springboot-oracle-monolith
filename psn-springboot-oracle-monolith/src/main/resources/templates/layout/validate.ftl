<#if pageData.errorResponse??>
	<#if pageData.errorResponse.messaggio?? || pageData.errorResponse.field?? || pageData.errorResponse.mapFieldMessage??>
		<div class="frame-message bg-white error m-t-0">
			<#if (pageData.errorResponse.messaggio)??>
				<p>${pageData.errorResponse.messaggio}</p>
			</#if>
		
			<#if (pageData.errorResponse.field)??>
				<p>${pageData.errorResponse.field}: ${pageData.errorResponse.messaggio}</p>
				<script>
					$(window).on("load", function () {
					    $.fn.showFormError("${pageData.errorResponse.field}","${pageData.errorResponse.messaggio}");
					});
				</script>
			</#if>
		
			<#if (pageData.errorResponse.mapFieldMessage)??>
				<#list pageData.errorResponse.mapFieldMessage?keys as field>
				   <p>${pageData.errorResponse.mapFieldMessage[field]?replace('-',' ')}</p>
				</#list>
				 
				<script>
					$(window).on("load", function () {
						<#list pageData.errorResponse.mapFieldMessage?keys as field>
					    	$.fn.showFormError("${field}", "${pageData.errorResponse.mapFieldMessage[field]?replace('-',' ')}");
						</#list>
					});
				</script>
			</#if>
		</div>
	</#if>
</#if>