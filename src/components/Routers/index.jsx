import { Route, Routes, useLocation } from 'react-router-dom'

import GetData from '../../components/GetData'
import Layout from '../Layout'

/*
PAGES: */
import Home from '../../pages/Home'
import Portfolio from '../../pages/Portfolio'
import Curriculum from '../../pages/Curriculum'
import Error from '../../pages/Error'

let Data = await GetData()


export default function Routers() {
	/*
	DEBUG */
    // console.log(Data)

	let location = useLocation()

	return (

		<Routes>

			<Route path="/" element={ <Layout Data={ Data } Location={ location }/> }>

				<Route index element={ <Home Data={ Data } /> } />
				<Route path="/portfolio/" element={ <Portfolio Data={ Data } /> } />
				<Route path="/curriculum/" element={ <Curriculum Data={ Data } /> } />
				<Route path="*" element={ <Error /> } />

			</Route>

		</Routes>)}