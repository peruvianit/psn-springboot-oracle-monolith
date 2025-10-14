						
							<div class="clearfix">
			
								<div class="m-t-0 p-y-05 text-center pull-md-left">
									<p class="m-a-0">Risultati: ${pageData.totaleRecord}<#if pageData.totalePagine &gt; 1> - Pagina ${pageData.numeroPagina} di ${pageData.totalePagine}</#if></p>
								</div>
			
								<div class="text-center pull-md-right m-t-0">
									<#if pageData.totalePagine &gt; 1>
										<ul class="pagination m-t-0">
											<#if pageData.numeroPagina &gt; 1>
												<li><a href="<@spring.url '${prefixUrl}?numeroPagina=1${filtro}' />" title="prima pagina">&lt;&lt;</a></li>
											</#if>
											<#if pageData.numeroPagina &gt; 1>
												<li class="hidden-xs-menu"><a href="<@spring.url '${prefixUrl}?numeroPagina=${pageData.numeroPagina-1}${filtro}' />">&lt;</a></li>
											</#if>
											
											<#assign count=0>
											<#assign numeroPagina = pageData.numeroPagina>
											<#if numeroPagina<4 >
												<#assign numeroPagina = 1>
											<#elseif numeroPagina==4>
												<#assign numeroPagina = 2>
											<#elseif numeroPagina==pageData.totalePagine>
												<#assign numeroPagina = numeroPagina-4>
											<#elseif numeroPagina==(pageData.totalePagine-1)>
												<#assign numeroPagina = numeroPagina-3>
											<#elseif numeroPagina%4<=0 >
												<#assign numeroPagina = numeroPagina-2>
											<#elseif numeroPagina%4 &gt; 0 >
												<#assign numeroPagina = numeroPagina-2>
											<#elseif numeroPagina &gt; (pageData.totalePagine-5)>
												<#assign numeroPagina = numeroPagina-5>
											</#if>
											<#list numeroPagina..pageData.totalePagine as i>
												<#if count == 5>
													<#break>
												</#if>
												<#if pageData.totalePagine &gt;= i>
													<li <#if pageData.numeroPagina==i>class="active"</#if>><a href="<@spring.url '${prefixUrl}?numeroPagina=${i}${filtro}' />">${i}</a></li>
												</#if>
												<#assign count=count+1>
											</#list>
											<#if pageData.numeroPagina!=pageData.totalePagine>
												<li class="hidden-xs-menu"><a href="<@spring.url '${prefixUrl}?numeroPagina=${pageData.numeroPagina+1}${filtro}' />">&gt;</a></li>
											</#if>
											<#if pageData.numeroPagina!=pageData.totalePagine>
												<li><a href="<@spring.url '${prefixUrl}?numeroPagina=${pageData.totalePagine}${filtro}' />" title="ultima pagina">&gt;&gt;</a></li>
											</#if>
										</ul>
									</#if>
								</div>
			
							</div>
