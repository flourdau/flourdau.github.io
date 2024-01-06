import Accordion from 'react-bootstrap/Accordion'

import CollapseStyle from './Collapse.module.css'

export default function Collapse({ index=false, title, content, className }) {

	return (

	<Accordion className={ CollapseStyle.accordion } as="section" defaultActiveKey={ false } flush>

		<Accordion.Item eventKey={ index }>

			<Accordion.Header as={'h3'}>{ title }</Accordion.Header>

		{ !Array.isArray(content)
			?( <Accordion.Body className={ className }>{ content }</Accordion.Body> )
			:( <Accordion.Body>{ content.map((item, i) => (<p key={ i }>{ item }</p>))}</Accordion.Body> )}

		</Accordion.Item>

	</Accordion>)}