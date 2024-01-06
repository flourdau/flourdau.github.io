import { useState } from 'react'
import confetti from 'canvas-confetti'

import './UniToggle.css'

export default function UniToggle({Location}) {

	const [checked, setChecked] = useState(false)

	const handleToggle = () => {
		
		const scalar = 3
		const heart = confetti.shapeFromText({ text: '💗', scalar })
		
		setChecked(!checked)
		
		let carteID = document.querySelector('header>address')
		let QRCode = document.querySelector('header>address>img')
		let video = document.querySelector('video')
		
		if (!checked) {

			video.style.display = 'none'
			QRCode.style.display = 'none'
			carteID.style.filter = 'grayscale(0)'
			carteID.style.background = "url('https://github.com/flourdau/flourdau/raw/main/public/img/velociraptor.webp')"
			carteID.style.background += "right 0 top 0 no-repeat"
			carteID.style.backgroundColor = "white"

			document.body.style.transition = "2s"
			document.body.style.background = "url('https://github.com/flourdau/flourdau/raw/main/public/img/arcenciel.webp')"
			document.body.style.background += "fixed left 0 top 0 no-repeat"
			document.body.style.backgroundSize = "cover"

			const myCanvas = document.createElement('canvas')
			myCanvas.style.width = '100%'
			myCanvas.style.height = '100%'

			carteID.prepend(myCanvas)
			
			let myConfetti = confetti.create(myCanvas, {
				zIndex:1000,
				resize:true,
				useWorker:true
			})
			
			myConfetti({
				shapes:[heart],
				scalar
			})

		}
		else {

			video.style.display = 'block'
			QRCode.style.display = 'block'
			document.body.style.background = "none"

			carteID.style.background = "url('https://github.com/flourdau/flourdau/raw/main/IMG/flourdau.webp')"
			carteID.style.filter = 'grayscale(.995)'

			document.querySelector('header>address>canvas').remove()

		}
			
		if (Location.pathname === '/portfolio') {

			const h1 = document.querySelector("h1")
			h1.classList.toggle("rainbow_text_animated")

			const collapse0 = document.querySelector("#collapse_0 p")
			collapse0.classList.toggle("rainbow_text_animated")

			const collapse1 = document.querySelector("#collapse_1 p")
			collapse1.classList.toggle("rainbow_text_animated")

		}
		
	}

	return (

	<div>
		<span>
			<label htmlFor="myCheckBox" className="switch">
				<input aria-label="Switch" id="myCheckBox" type="checkbox" checked={checked} onChange={ handleToggle } />
				<span className="slider round"></span>
			</label>
		</span>
	</div>)}