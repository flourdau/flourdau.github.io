import SocialNetwork from '../../components/SocialNetwork'

import FooterStyle from './Footer.module.css'

export default function Footer({ Data }) {

	const myDate = new Date()
	const year = myDate.getFullYear()
	let created	= 2019

	if (year === created) {
		created = false
	}
	else {
		created = created + " - "
	}

	return (

	<footer className={ FooterStyle.myFooter}>

		<p className='portfolio-footer-elem'>{ created } { year } | 📧 
			<a href={ "mailto:" + Data.Resume.basics.email }>{ Data.Resume.basics.name }</a>
		</p>

		<SocialNetwork Data={ Data.Resume } />

	</footer>)}