import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import UniToggle from '../../components/UniToggle'

import NavStyle from './Nav.module.css'

export default function MyNav({ Data, Location }) {

	return (

	<Navbar className={ NavStyle.navbar } expand="xxl" sticky="top" bg="light" data-bs-theme="light">

		<Navbar.Toggle aria-controls="basic-navbar-nav"/>

		<Navbar.Collapse id="basic-navbar-nav">
			<Nav activeKey={Location.pathname} variant="underline">
				<section>
					<Nav.Item>
						<Nav.Link eventKey="/" href={ "/" }><span>Home</span></Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link eventKey="/curriculum" href={ "/curriculum" }><span>Curriculum Vitae</span></Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link eventKey="/portfolio" href={ "/portfolio" }><span>Portfolio</span></Nav.Link>
					</Nav.Item>

					{ (Location.pathname === '/' || Location.pathname === '/portfolio') && 
					<Nav.Item>
						<UniToggle Location={ Location }/>
					</Nav.Item>}
				</section>
				{ Location.pathname === '/portfolio' && 
				<section>
					<Nav.Item>
						<Nav.Link className={ NavStyle.infoSocial } href={ "mailto:" + Data.Resume.basics.email }>
							<span className={ NavStyle.icone }>📧 </span> - { Data.Resume.basics.email }
						</Nav.Link>
					</Nav.Item>

					<Nav.Item>
						<Nav.Link className={ NavStyle.infoSocial } href={ "tel:" + Data.Resume.basics.phone }>
							<span className={ NavStyle.icone }>📱 </span> - { Data.Resume.basics.phone }
						</Nav.Link>
					</Nav.Item>
				</section>}
			</Nav>
		</Navbar.Collapse>

	</Navbar>)}