import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

import '../../depotsGIT/fonts/font-awesome-5.15.1/css/all.css'
import '../../depotsGIT/fonts/OpenSans/OpenSans.css'
import '../../depotsGIT/fonts/Icons/material-icons.css'
import 'animate.css'

import './Layout.css'

import '@popperjs/core/dist/cjs/popper-lite.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Layout({ Data, Location }) {

	return (<>

		{ Location.pathname !== '/curriculum' &&
		<video loop autoPlay muted>
			<source src="vid/fond/00.webm" type="video/webm"/>
			<source src="vid/fond/00.mp4" type="video/mp4"/>
			<source src="vid/fond/00.ogv" type="video/ogv"/>
			Votre navigateur ne permet pas de lire les vidéos HTML5.
		</video>
		}

		<Nav Data={ Data } Location={ Location }/>
	{ Location.pathname === '/curriculum' | Location.pathname === '/portfolio' | Location.pathname === '/' &&
		<Header Data={ Data } Location={ Location }/>
	}
		<main><Outlet/></main>
		<Footer Data={ Data }/>

	</>)}