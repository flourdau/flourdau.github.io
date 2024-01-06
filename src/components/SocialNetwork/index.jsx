import SocialNetworkStyle from './SocialNetwork.module.css'

export default function SocialNetwork({ Data }) {

	return (

	<ul className={ SocialNetworkStyle.social }>

	{ Data.basics.profiles.map(({network, url }) => (

		<li key={ new Date().getTime() + url }>
			<a target="_blank" rel="noreferrer" title={ network } href={ url }>
				<img src={ "/img/Body/SVG/" + network + ".svg"} alt={ network } />
			</a>
		</li>

	))}

	</ul>)}