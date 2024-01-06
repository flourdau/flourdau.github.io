import React from 'react'
import ReactMarkdown from 'react-markdown'

import SocialNetwork from '../SocialNetwork'
import Skills from '../Skills'

import HeaderStyle from './Header.module.css'
import ButtonStyle from '../Layout/Button.module.css'

export default function Header({ Data, Location }) {


	let title = Data.Resume.basics.name
	let message = Data.GitHubProfile.bio
	// let message = '💻 Développeur Web FullStack, #OPENTOWORK, passionné par le numérique... 🎮📱🎧🌍🪐🦄🌈💗'

	if (Location.pathname === "/curriculum") {
		title = Data.Resume.basics.label
		message = Data.Resume.basics.summary
	}
	else if (Location.pathname === "/portfolio") {
		title = Data.Resume.basics.name
	}

	return (

	<header className={ HeaderStyle.myHeader }>

		{   /* INFORMATIONS PERSONNELLES */ }
		<address>

		{ Location.pathname === '/curriculum' &&
		<>

			<h3>
				<span className={ HeaderStyle.icone }>👩‍💻&nbsp;</span>
				<a href={ "mailto:" + Data.Resume.basics.email }>{ Data.Resume.basics.name }</a>
			</h3>
			
			<h3 className={ HeaderStyle.myEmail }>
				<span className={ HeaderStyle.icone }>📧&nbsp;</span>
				<a href={ "mailto:" + Data.Resume.basics.email }>{ Data.Resume.basics.email }</a>
			</h3>

			<h3 className={ HeaderStyle.myEmail }>
				<span className={ HeaderStyle.icone }>&nbsp;📱&nbsp;&nbsp;</span>
				<a href={ "tel:" + Data.Resume.basics.phone }>{ Data.Resume.basics.phone }</a>
			</h3>

			<h3>
				<span className={ HeaderStyle.icone }>🏠&nbsp;</span>
				<a href={ "https://www.google.fr/maps/place/" + Data.Resume.basics.location.city } target="_blank" rel="noreferrer">{ Data.Resume.basics.location.city } - { Data.Resume.basics.location.postalCode }</a>
			</h3>

		</>}

		{ Location.pathname === '/curriculum' &&
		<>
			<SocialNetwork className={ HeaderStyle.social } Data={ Data.Resume }/>
		</>}

			<img src={"https://github.com/flourdau/flourdau/raw/main/IMG/QRCodeCV.webp" } alt="QR-Code vers mon Curriculum"/>

		</address>

		{/* TITRE & BOUTTONS */}
		<strong>

			<h1>{ title }</h1>

			{ Location.pathname === '/curriculum' ?
			<ReactMarkdown children={ message }/> :
			<h2>{ message }</h2>
			}
			{ Location.pathname === '/curriculum' &&
			<div className={ HeaderStyle.blocBtnHeader }>

				<Skills Data={ Data }/>

				<a className={ ButtonStyle.button } href="https://raw.githubusercontent.com/flourdau/flourdau/main/flourdau.pdf">

					<span className={ ButtonStyle.button__text }>Version-PDF</span>
					<span className={ ButtonStyle.button__icon }>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="svg">
							<path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
							<path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
							<path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
						</svg>
					</span>

				</a>

			</div>}

			{ Location.pathname === '/portfolio' &&
			<div className={ HeaderStyle.blocBtnHeader }>

				<Skills Data={ Data }/>
				<a className={ ButtonStyle.button } href="#Projets">
					<span className={ ButtonStyle.button__only }>Mes Projets</span>
				</a>
			</div>}

		</strong>

	</header>)}