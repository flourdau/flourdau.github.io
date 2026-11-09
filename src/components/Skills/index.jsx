import { useState } from 'react'

import Modal from 'react-bootstrap/Modal'

import ButtonStyle from '../Layout/Button.module.css'
import SkillsStyle from './Skills.module.css'

export default function Skills({ Data }) {

	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
	<>
		<span className={ ButtonStyle.button } role="button" tabIndex={0} onClick={ handleShow }>
			<span className={ ButtonStyle.button__only}>Compétences</span>
		</span>

		<Modal show={show} onHide={handleClose} backdrop="static" fullscreen={true} keyboard={true}>

			<Modal.Header closeButton>
				<Modal.Title>🔧 Compétences</Modal.Title>
			</Modal.Header>

			<Modal.Body>

				{/* SOFTS SKILLS */}
				<ul className={ SkillsStyle.softSkills }>

					{ Data.Resume.skills[0].keywords.map((e) => (
					<li key={ e + "skill" }>
						<img alt="soft-skill" src={"/img/Body/SVG/" + e + ".svg"}/>
						<p>{ e }</p>
					</li>
					))}

				</ul>

				<div className={ SkillsStyle.skills }>

					{ Data.Resume.skills.map((elem, i) => (
					<ul key={ i + "line" }>

					{ i > 0 && <h3>{ elem.name }</h3> }
					{ i > 0 && <hr></hr> }
					{ i > 0 && elem.keywords.map((e) => (
						<li key={ e + "skill" }>
							{ i < Data.Resume.skills.length- 2 &&
							<img className={ SkillsStyle.skill } alt={ e + " skill"} src={"/img/Body/SVG/" + e + ".svg"}/> }
							<p>{ e }</p>
						</li>
					))}

					</ul>

					))}

				</div>

			</Modal.Body>

		</Modal>
	</>)}