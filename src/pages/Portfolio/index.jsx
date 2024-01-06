import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import SocialNetwork from '../../components/SocialNetwork'
import MyCard from '../../components/MyCard'

import PortfolioStyle from './Portfolio.module.css'

export default function Portfolio({ Data }) {
	return (
	<section className={ PortfolioStyle.homeContainer }>

		<SocialNetwork Data={ Data.Resume } />

		<section className={ PortfolioStyle.blocCol }>

			<div className={ PortfolioStyle.blocMain } >

				<div id="Presentation">
					{ Data.arrayReadME.map((githubReadMeSection, i) => (
					<div key={ new Date().getTime() + i + "presentation"} id={ "collapse_" + i }>
						<h3>{ githubReadMeSection[0].trim().substr(3) }</h3>
						<div><ReactMarkdown children={ githubReadMeSection[1] }/></div>
					</div>
					))}
				</div>

				<div id="Projets">
					<h3>📌 Projects</h3>
					<ul className={ PortfolioStyle.projectsList }>
					{ Data.Resume.projects.map(({ id, name, cover }, i) => (
						<li key={`${ id }`}>
							<MyCard
								id={ i }
								Data={ Data }
							/>
						</li>
					))}
					</ul>
				</div>

			</div>

		</section>

	</section>)}