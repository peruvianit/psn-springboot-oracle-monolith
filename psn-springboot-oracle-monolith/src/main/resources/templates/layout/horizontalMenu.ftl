			<!-- menu primario orizzontale -->
			<div id="main-menu-container-h" data-clone-source="local-menu-h">
				<ul id="menu-h">
			
					<!-- contenitore menu user clonato orizzontale -->
					<li class="mobile-usermenu dropdown" data-clone-target="mobile-usermenu-h"></li>
					<!-- contenitore menu user clonato orizzontale -->
					
					<#if pageData.selectableMenuViews??>
						<#list pageData.selectableMenuViews as selectableMenuView>
							<#list selectableMenuView.selectableVoceMenuViews as selectableVoceMenuView1lvl>
								<#if selectableVoceMenuView1lvl.selectableVoceMenuViews?? &&  selectableVoceMenuView1lvl.selectableVoceMenuViews?has_content>
									<li class="dropdown <#if selectableVoceMenuView1lvl?is_last>last</#if>">
										<a href="#0" class="dropdown-toggle <#if selectableVoceMenuView1lvl.selected??><#if selectableVoceMenuView1lvl.selected>active</#if></#if>" data-toggle="dropdown">${selectableVoceMenuView1lvl.nome} <span class="switchicon miuricon miur-freccia-giu miuricon-xs m-t-02" data-switchicon-odd="miur-freccia-giu" data-switchicon-even="miur-freccia-su"></span></a>
										<div class="dropdown-menu" role="menu">
											<ul>
												<#list selectableVoceMenuView1lvl.selectableVoceMenuViews as selectableVoceMenuView2lvl>
													<li>
														<a href="${selectableVoceMenuView2lvl.url}">${selectableVoceMenuView2lvl.nome}</a>
													</li>
												</#list>
											</ul>
										</div>
									</li>
								<#else>
									<li <#if selectableVoceMenuView1lvl?is_last>class="last"</#if>>
										<a <#if selectableVoceMenuView1lvl.selected??><#if selectableVoceMenuView1lvl.selected>class="active"</#if></#if> href="<#if selectableVoceMenuView1lvl.url??>${selectableVoceMenuView1lvl.url}</#if>">${selectableVoceMenuView1lvl.nome}</a>
									</li>
								</#if>
							</#list>
						</#list>
					</#if>
			
				</ul>
			</div>
			<!-- menu primario orizzontale -->
			
