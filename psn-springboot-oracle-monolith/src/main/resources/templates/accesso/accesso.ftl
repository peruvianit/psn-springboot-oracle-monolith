	<#include "../layout/header.ftl">
			
	<div id="main-page-content" class="page-content">

		<h1 class="text-center"><span class="miuricon miur-profili"></span> Selezione profilo e contesto</h1>

		<div class="content-frame wrapper-content wrapper-content-ml p-a-15 m-t-2 m-b-3 m-x-a">

			<#if pageData.profiliData?has_content>
				<!-- primo livello -->
				<ul class="profile-list-container m-a-0 p-a-0">
				
					<#list pageData.profiliData as profiloData>
						
						<#if profiloData.contestiData?has_content>
							<li>
								<h5 class="m-a-0">
									<a href="#" class="isrelative block">${profiloData.nome}
										<span class="miuricon miur-freccia-avanti miuricon-xs halign halign-pull-right"></span>
									</a>
								</h5>
								<div id="profile-${profiloData.codice}">
									<ul class="menu-level-2 m-a-0 m-t-5 p-a-0">
										<#list profiloData.contestiData as contestoData>
											<li>
												<a href="<@spring.url '/accesso/seleziona-contesto?codiceProfilo=${profiloData.codice}&codiceContesto=${contestoData.codice}&valoreContesto=${contestoData.valore}' />">${contestoData.nome} - <#if contestoData.decodifica??>${contestoData.decodifica}<#else>${contestoData.valore}</#if></a>
											</li>
										</#list>
									</ul>
								</div>
							</li>
						<#else>
							<li>
								<h5 class="m-a-0">
									<a href="<@spring.url '/accesso/seleziona-profilo?codiceProfilo=${profiloData.codice}' />" class="isrelative block">${profiloData.nome}
										<span class="miuricon miur-freccia-avanti miuricon-xs halign halign-pull-right"></span>
									</a>
								</h5>
							</li>
						</#if>
						
					</#list>
					
				</ul>
				<!-- primo livello -->
			<#else>
				<div class="frame-message info">
					<p>Nessun profilo associato</p>
				</div>
			</#if>

			<div class="row m-t-2">
				<div class="col-md-offset-8 col-md-4">
					<a href="<@spring.url '/${pageData.urlEsci}' />" class="btn btn-block btn-default isrelative text-uppercase"><strong>Esci</strong>
						<span class="miuricon miur-logout halign halign-pull-right m-r-5 icon-xtop-01 miuricon-s"></span>
					</a>
				</div>
			</div>

		</div>

	</div>

<#include "../layout/footer.ftl">