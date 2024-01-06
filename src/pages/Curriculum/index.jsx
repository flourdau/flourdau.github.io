import ReactMarkdown from 'react-markdown'

import Collapse from '../../components/Collapse'
import Tag from '../../components/Tag'

import CurriculumStyle from './Curriculum.module.css'

export default function Curriculum({ Data }) {

    return (

        <>
			<main className={ CurriculumStyle.myMain }>

				{/* FORMATION */}
				<Collapse
					className={ CurriculumStyle.educations }
					key='blocCollapseSoftEducations'
					title={
					<h2>
						<i className="material-icons">&#xe80c;</i>
						<span>&nbsp;FORMATION</span>
					</h2>
					}
					index={ false }
					content={
					<div>

						{ Data.Resume.education.map((elem, i) => (
						<div key={ new Date().getTime() + i + "line"}>

							<div className='education'>

								<a href={ elem.url }>
									<h3>{ elem.area && elem.area + "," }&nbsp;</h3>
									<h4>{ elem.institution }</h4>
								</a>
								<h5>{ elem.startDate } - { elem.endDate }</h5>
								<hr></hr>
								<ul>
								{ elem.courses && elem.courses.map((element, j) => (
									<li key={ new Date().getTime() + j + "courses"}>{element}</li>
								))}
								</ul>

							</div>

						</div>
						))}

					</div>
					}/>

				<section>
					{/* EXPÉRIENCE PROFESSIONNELLE */}
					<Collapse
						className={ CurriculumStyle.xp }
						key='blocCollapseSoftXp'
						title={
						<h2>
							<i className="material-icons">&#xeb3f;</i>
							<span>&nbsp;EXPÉRIENCE PROFESSIONNELLE</span>
						</h2>
						}
						index={ false }
						content={
						<div>

							{ Data.Resume.work.map((elem, i) => (
							<div key={ new Date().getTime() + i + "line"}>

								<div className='work'>

									<a href={ elem.url }>
										<h3>{ elem.position + "," }&nbsp; </h3>
										<h4>{ elem.name }</h4>
									</a>
									<h5>{ elem.startDate } - { elem.endDate }</h5>
									<hr></hr>
									<ul>
									{ elem.highlights.map((element, j) => (
										<li key={ new Date().getTime() + j + "work"}>{element}</li>
									))}
									</ul>

								</div>

							</div>
							))}

						</div>
						}/>

					{/* PROJETS */}
					<Collapse

						className={ CurriculumStyle.proProjects }
						key='blocCollapseSoftProjects'
						title={
						<h2>
							<i className="material-icons">&#xeb3f;</i>
							<span>&nbsp;PROJETS</span>
						</h2>
						}
						index={ false }
						content={
						<div>
							
						{ Data.Resume.projects.map((elem, i) => (
							<Collapse
								className="test"
								key={ 'blocCollapse' + i } 
								index={ 0 } 
								title={ elem.name }
								content={
							<div key={ new Date().getTime() + i + "line" }>
								<p><ReactMarkdown children={ elem.description } /></p>
								{ elem.url && <a target='_blank' rel="noreferrer" title='Démonstrastion' href={ elem.url }>Démo</a>}
								<hr></hr>
							{ elem.keywords.map((e) => (
								<img title={ e } key={ new Date().getTime() + e + "skill" } className={ CurriculumStyle.skillProject } alt="skill" src={"/img/Body/SVG/" + e + ".svg"}/>
							))}

							</div> }
							/>
						))}

						</div>
						}/>

					{/* PROJETS PERSO */}
					<Collapse
						className='perso-projects'
						key='blocCollapseSoftPersojects'
						title={
						<h2>
							<i className="material-icons">&#xe14f;</i>
							<span>&nbsp;PROJETS PERSONNELS</span>
						</h2>
						}
						index={ false }
						content={
						<div>

							{ Data.Resume.personal.map((elem, i) => (
							<div key={ new Date().getTime() + i + "personal"}>

								<div className='personal'>

									<h5>{ elem.name }</h5>
									<ul>
									{ elem.description.map((element, j) => (
										<li key={ new Date().getTime() + j + "personal"}>{element}</li>
									))}
									</ul>
									
								</div>

								<hr></hr>

							</div>
							))}

						</div>
						}/>

					{/* CENTRES D'INTÉRÊTS */}
					<Collapse
						className={ CurriculumStyle.interests }
						key='blocCollapseSoftInterests'
						title={
						<h2>
							<i className="material-icons">&#xe338;</i>
							<span>&nbsp;CENTRES D'INTÉRÊTS</span>
						</h2>
						}
						index={ false }
						content={
						<div>

							{ Data.Resume.interests.map((elem, i = 0) => (
							<div key={ new Date().getTime() + i + "line"}>

								<div className={ CurriculumStyle.interest }>

									<h6>{ elem.name }:&nbsp;</h6> 
									{i > 0 &&
									<ul>
									{ elem.keywords.map((element, j = 0) => (
										<li key={ new Date().getTime() + j + "interests" }>
											<Tag tag={ <span>{ element }{ elem.keywords.length > j + 1 ? "," : "." }&nbsp; </span> }/>
										</li>
									))}
									</ul>
									}
								</div>

							</div>
							))}

						</div>
						}/>
				</section>

			</main></>)}