import ReactMarkdown from 'react-markdown'
import SocialNetwork from '../../components/SocialNetwork'
import MyCard from '../../components/MyCard'

import PortfolioStyle from './Portfolio.module.css'

export default function Portfolio({ Data }) {
	return (
	<section className={ PortfolioStyle.homeContainer }>

		<section className={ PortfolioStyle.blocCol }>

			<SocialNetwork Data={ Data.Resume } />

			<div className={ PortfolioStyle.blocMain } >

				<div id="Presentation">
					{ Data.arrayReadME.map((githubReadMeSection, i) => (
					<div key={ new Date().getTime() + i + "presentation"} id={ "collapse_" + i }>
						<h3>{ githubReadMeSection[0].trim().substr(3) }</h3>
						<div><ReactMarkdown>{ githubReadMeSection[1] }</ReactMarkdown></div>
					</div>
					))}
				</div>

				<div id="Projets">
					<h3>📌 Projects</h3>
					<ul className={ PortfolioStyle.projectsList }>
					{ Data.Resume.projects.map(({ id }, i) => (
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