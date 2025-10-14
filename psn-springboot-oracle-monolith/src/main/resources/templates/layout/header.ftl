<#import "/spring.ftl" as spring />
<#setting locale="it_IT">
<!DOCTYPE html>
<!--[if IE 8]><html class="no-js is-ie8 is-ieold"><![endif]-->
<!--[if IE 9]><html class="no-js is-ie9 is-ieold"><![endif]-->
<html lang="it" class="no-js not-ie wf-loading">
    <head>
		<title>${pageData.titolo}</title>
		<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="noindex,nofollow">

		<link rel="stylesheet" href="${pageData.cdnUrl!""}/master/assets/css/webfont.min.css?v=${pageData.versione!"1.0.0"}">
		<link rel="stylesheet" href="${pageData.cdnUrl!""}/master/assets/css/bootstrap.joined.min.css?v=${pageData.versione!"1.0.0"}">
		<link rel="stylesheet" href="${pageData.cdnUrl!""}/master/assets/plugins/jq-tablesaw/tablesaw.min.css?v=${pageData.versione!"1.0.0"}">
		<link rel="stylesheet" href="${pageData.cdnUrl!""}/master/assets/plugins/bs-datepicker/css/bootstrap-datepicker3.min.css?v=${pageData.versione!"1.0.0"}">
		<link rel="stylesheet" href="<@spring.url '/assets/css/custom.min.css?v=${pageData.versione!"1.0.0"}' />">
		
		<link rel="icon" href="${pageData.cdnUrl!""}/master/assets/img/favicon.ico?v=${pageData.versione!"1.0.0"}" type="image/x-icon" />

		<script>
			WebFontConfig = {
				custom: {
					families: ["titilliumweb-r", "titilliumweb-sb", "titilliumweb-i", "miur-icons"],
					events: false
				}
			};

			!function(){var e=document.createElement("script");e.async="true",e.src="${pageData.cdnUrl!""}/master/assets/js/webfontloader.min.js?v=${pageData.versione!"1.0.0"}";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();

		</script>

		<script src="${pageData.cdnUrl!""}/master/assets/js/head.joined.min.js?v=${pageData.versione!"1.0.0"}"></script>
		<script src="<@spring.url '/assets/js/custom.lib.min.js?v=${pageData.versione!"1.0.0"}' />"></script>
		
		<!--[if lt IE 9]>
		<script src="${pageData.cdnUrl!""}/master/assets/js/respond.min.js?v=${pageData.versione!"1.0.0"}"></script>
		<![endif]-->

		<#if pageData.googleAnalyticsEnable>
			<script async src="https://www.googletagmanager.com/gtag/js?id=${pageData.googleAnalyticsId!"XX-00000000-00"}"></script>
			<script>
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
			
				gtag('config', '${pageData.googleAnalyticsId!"XX-00000000-00"}');
			</script>
		</#if>
    </head>

    <body>

		<div id="main-container">

			<div id="header" class="container-fluid page-header <#if pageData.mostraMenu><#if pageData.posizioneMenu=='LATERALE'>issidebar</#if></#if>">
			
				<div id="header-wrapper">
			
					<div id="top-nav">
						
						<div id="top-nav-wrapper">
			
							<p id="top-nav-title">
								<a href="http://www.miur.gov.it">Ministero dell'Istruzione</a>
							</p>
			
							<#if pageData.utenteView??>
							
								<#if pageData.utenteView.username??>
								
									<div class="desktop-usermenu-wrapper dropdown" data-clone-source="desktop-usermenu">
					
										<a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">
											${pageData.utenteView.nome} ${pageData.utenteView.cognome} <span class="miuricon miur-utente"></span>
										</a>
					
										<div class="dropdown-menu dropdown-menu-right dropdown-arrow" role="menu">
											<ul>
												<#if pageData.nomeProfilo??>
													<li>
														<p class="row-1"><span class="miuricon miur-single-user"></span> Profilo:</p>
														<p class="row-2">${pageData.nomeProfilo}</p>
													</li>
												</#if>
												<#if pageData.nomeContesto??>
													<li>
														<p class="row-1"><span class="miuricon miur-contesti"></span> Contesto:</p>
														<p class="row-2">${pageData.nomeContesto}</p>
													</li>
												</#if>
												<li>
													<a href="<@spring.url '/accesso/visualizza' />"><span class="miuricon miur-profili icon-xtop-02"></span> Cambia profilo</a>
												</li>
												<li>
													<a href="${pageData.urlAreaRiservata}"><span class="miuricon miur-single-user"></span> Area riservata</a>
												</li>
												<li>
													<a href="<@spring.url '/app/informativa' />"><span class="miuricon miur-switch icon-xtop-02"></span> Termini e condizioni</a>
												</li>
												<li>
													<a href="<@spring.url '/${pageData.urlEsci}' />"><span class="miuricon miur-logo-sidi icon-xtop-02"></span> Esci</a>
												</li>
											</ul>
										</div>
									</div>
										
								</#if>
							</#if>
							</div>
			
						</div>
			
						<div id="head-lead" >
				
							<div id="nav-mobile">
								<a href="javascript:void(0)">
									<span class="nav-wrapper">
										<span class="nav-bar"></span>
										<span class="nav-bar"></span>
										<span class="nav-bar"></span>
									</span>
									<span class="nav-text">Menu</span>
								</a>
							</div>
				
							<div class="main-title-wrapper">
								<div class="logo">
									<a href="<@spring.url '' />">
										<img src="<@spring.url '/master/assets/img/logo_white.png' />" alt="Homepage del MIUR">
									</a>
								</div>
								<h1>
									<a href="<@spring.url '/app' />">${pageData.titoloApplicazione!"WebApp"}</a>
									<#if pageData.sottotitoloApplicazione??><span class="">${pageData.sottotitoloApplicazione!"demo"}</span></#if>
								</h1>
							</div>
				
						</div>
						
					</div>
				
					<#if pageData.mostraMenu>
						<#if pageData.posizioneMenu=='ORIZZONTALE'>
							<#include "horizontalMenu.ftl">
						</#if>
					</#if>
	
					<div id="fixed-bar" data-offset="160">
				
						<div id="fixed-bar-wrapper" data-clone-target="fixed-bar-wrapper">
				
							<div class="logo">
								<a href="<@spring.url '/app' />">
									<img src="<@spring.url '/master/assets/img/logo_white.svg' />" alt="Homepage del MIUR">
								</a>
							</div>
							<h1>
								<a href="<@spring.url '/app' />">${pageData.titoloApplicazione!"WebApp"}</a>
							</h1>
				
						</div>
						
						<#if pageData.mostraMenu>
							<#if pageData.posizioneMenu=='ORIZZONTALE'>
								<div class="fixed-menu-h-wrapper" data-clone-target="fixed-menu-h"></div>
							</#if>
						</#if>
				
					</div>
					
				</div>
				<#if pageData.mostraMenu> 
					<#if pageData.posizioneMenu=='LATERALE'>
						<#include "sideMenu.ftl">
					</#if>
				</#if>