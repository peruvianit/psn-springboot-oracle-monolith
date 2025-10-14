			<!-- sidebar container -->
			<div id="sidebar-container" class="clearfix">
			
				<!-- aggancio menu utente -->
				<div id="mobile-usermenu-wrapper-v">
			
					<ul id="mobile-usermenu-v">
						<!-- contenitore menu user clonato verticale -->
						<li class="mobile-usermenu dropdown" data-clone-target="mobile-usermenu-v"></li>
						<!-- contenitore menu user clonato verticale -->
					</ul>
				</div>
				<!-- aggancio menu utente -->
			
				<!-- inizio sidebar -->
				<div id="sidebar">
					<#if pageData.selectableMenuViews??> 
						<#list pageData.selectableMenuViews as selectableMenuView>
							<div id="sidebar-menu-header">
								<h4>${selectableMenuView.nome}</h4>
							</div>
							<!-- primo livello -->
							<ul class="side-menu">
								<#list selectableMenuView.selectableVoceMenuViews as selectableVoceMenuView1lvl>
									<li <#if selectableVoceMenuView1lvl.selected??><#if selectableVoceMenuView1lvl.selected>class="active"</#if></#if>>
										<span class="vline"></span>
										<a 
											<#if selectableVoceMenuView1lvl.url??>
												href="${selectableVoceMenuView1lvl.url}">${selectableVoceMenuView1lvl.nome} <span class="sidebar-icon miuricon miur-freccia-avanti"></span>
											<#else>
												href="javascript:void(0);" data-toggle="collapse" data-target="#${selectableVoceMenuView1lvl.id?replace(".", "-")}">${selectableVoceMenuView1lvl.nome} <span class="switchicon sidebar-icon miuricon miur-freccia-giu" data-switchicon-odd="miur-freccia-giu" data-switchicon-even="miur-freccia-su"></span>
											</#if>
										</a>
										<#if selectableVoceMenuView1lvl.selectableVoceMenuViews?? &&  selectableVoceMenuView1lvl.selectableVoceMenuViews?has_content>
											<!-- secondo livello -->
											<#assign lvl2selected = false>
											<#list selectableVoceMenuView1lvl.selectableVoceMenuViews as selectableVoceMenuView2lvl>
												<#if selectableVoceMenuView2lvl.selected??>
													<#if selectableVoceMenuView2lvl.selected>
														<#assign lvl2selected = true>
													</#if>
												</#if>
											</#list>
											<div id="${selectableVoceMenuView1lvl.id?replace(".", "-")}" class="multilevel-menu collapse <#if lvl2selected>openthis</#if>">
												<ul class="menu-level-2">
													<#list selectableVoceMenuView1lvl.selectableVoceMenuViews as selectableVoceMenuView2lvl>
														<li <#if selectableVoceMenuView2lvl.selected??><#if selectableVoceMenuView2lvl.selected><#if !(selectableVoceMenuView2lvl.selectableVoceMenuViews??)>class="active"><span class="vline"></span</#if></#if></#if>>
															<a 
																<#if selectableVoceMenuView2lvl.url??>
																	href="${selectableVoceMenuView2lvl.url}">${selectableVoceMenuView2lvl.nome} <span class="sidebar-icon miuricon miur-freccia-avanti"></span>
																<#else>
																	href="javascript:void(0);" data-toggle="collapse" data-target="#${selectableVoceMenuView2lvl.id?replace(".", "-")}">${selectableVoceMenuView2lvl.nome} <span class="switchicon sidebar-icon miuricon miur-freccia-giu" data-switchicon-odd="miur-freccia-giu" data-switchicon-even="miur-freccia-su"></span>
																</#if>
															</a>
															<#if selectableVoceMenuView2lvl.selectableVoceMenuViews?? && selectableVoceMenuView2lvl.selectableVoceMenuViews?has_content>
																<!-- terzo livello -->
																<#assign lvl3selected = false>
																<#list selectableVoceMenuView2lvl.selectableVoceMenuViews as selectableVoceMenuView3lvl>
																	<#if selectableVoceMenuView3lvl.selected??>
																		<#if selectableVoceMenuView3lvl.selected>
																			<#assign lvl3selected = true>
																		</#if>
																	</#if>
																</#list>
																<div id="${selectableVoceMenuView2lvl.id?replace(".", "-")}" class="multilevel-menu collapse <#if lvl3selected>openthis</#if>">
																	<ul class="menu-level-3">
																		<#list selectableVoceMenuView2lvl.selectableVoceMenuViews as selectableVoceMenuView3lvl>
																			<li <#if selectableVoceMenuView3lvl.selected??><#if selectableVoceMenuView3lvl.selected><#if !(selectableVoceMenuView3lvl.selectableVoceMenuViews??)>class="active"><span class="vline"></span</#if></#if></#if>>
																				<a 
																					<#if selectableVoceMenuView3lvl.url??>
																						href="${selectableVoceMenuView3lvl.url}">${selectableVoceMenuView3lvl.nome} <span class="sidebar-icon miuricon miur-freccia-avanti"></span>
																					<#else>
																						href="javascript:void(0);" data-toggle="collapse" data-target="#${selectableVoceMenuView3lvl.id?replace(".", "-")}">${selectableVoceMenuView3lvl.nome} <span class="switchicon sidebar-icon miuricon miur-freccia-giu" data-switchicon-odd="miur-freccia-giu" data-switchicon-even="miur-freccia-su"></span>
																					</#if>
																				</a>
																				<#if selectableVoceMenuView3lvl.selectableVoceMenuViews?? &&  selectableVoceMenuView3lvl.selectableVoceMenuViews?has_content>
																					<!-- quarto livello -->
																					<#assign lvl4selected = false>
																					<#list selectableVoceMenuView3lvl.selectableVoceMenuViews as selectableVoceMenuView4lvl>
																						<#if selectableVoceMenuView4lvl.selected??>
																							<#if selectableVoceMenuView4lvl.selected>
																								<#assign lvl4selected = true>
																							</#if>
																						</#if>
																					</#list>
																					<div id="${selectableVoceMenuView3lvl.id?replace(".", "-")}" class="multilevel-menu collapse <#if lvl4selected>openthis</#if>">
																						<ul class="menu-level-4">
																							<#list selectableVoceMenuView3lvl.selectableVoceMenuViews as selectableVoceMenuView4lvl>
																								<li <#if selectableVoceMenuView4lvl.selected??><#if selectableVoceMenuView4lvl.selected>class="active"><span class="vline"></span</#if></#if>>
																									<a 
																										<#if selectableVoceMenuView4lvl.url??>
																											href="${selectableVoceMenuView4lvl.url}">${selectableVoceMenuView4lvl.nome} <span class="sidebar-icon miuricon miur-freccia-avanti"></span>
																										<#else>
																											href="javascript:void(0);" data-toggle="collapse" data-target="#${selectableVoceMenuView4lvl.id?replace(".", "-")}">${selectableVoceMenuView4lvl.nome} <span class="switchicon sidebar-icon miuricon miur-freccia-giu" data-switchicon-odd="miur-freccia-giu" data-switchicon-even="miur-freccia-su"></span>
																										</#if>
																									</a>
																								</li>
																							</#list>
																						</ul>
																					</div>
																					<!-- /quarto livello -->
																				</#if>
																			</li>
																		</#list>
																	</ul>
																</div>
																<!-- /terzo livello -->
															</#if>
														</li>
													</#list>
												</ul>
											</div>
											<!-- /secondo livello -->
										</#if>
									</li>
								</#list>
							</ul>
							<!-- primo livello -->
							<hr>
						</#list>
					<#else>
						<!-- Nessun menu trovato -->
					</#if>
				</div>
				<!-- inizio sidebar -->
			
			</div>
			<!-- sidebar container -->