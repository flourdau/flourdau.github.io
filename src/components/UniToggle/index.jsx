import { useState } from 'react'
import confetti from 'canvas-confetti'

import './UniToggle.css'

export default function UniToggle({Location}) {
	const currentPath = Location.pathname.replace(/\/+$/, '') || '/'

	const [checked, setChecked] = useState(false)

	const handleToggle = () => {
		
		const scalar = 3
		const heart = confetti.shapeFromText({ text: '💗', scalar })
		
		setChecked(!checked)
		
		let carteID = document.querySelector('header>address')
		let QRCode = document.querySelector('header>address>img')
		let video = document.querySelector('video')
		
		if (!checked) {

			if (video) video.style.display = 'none'
			if (QRCode) QRCode.style.display = 'none'
			if (carteID) {
				carteID.style.filter = 'grayscale(0)'
				carteID.style.background = "url('/img/velociraptor.webp')"
				carteID.style.background += "right 0 top 0 no-repeat"
				carteID.style.backgroundColor = "white"
			}

			document.body.style.transition = "2s"
			document.body.style.background = "url('/img/arcenciel.webp')"
			document.body.style.background += "fixed left 0 top 0 no-repeat"
			document.body.style.backgroundSize = "cover"

			const myCanvas = document.createElement('canvas')
			myCanvas.style.width = '100%'
			myCanvas.style.height = '100%'

			if (carteID) carteID.prepend(myCanvas)
			
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

			if (video) video.style.display = 'block'
			if (QRCode) QRCode.style.display = 'block'
			document.body.style.background = "none"

			if (carteID) {
				carteID.style.background = "url('/IMG/flourdau.webp')"
				carteID.style.filter = 'grayscale(.995)'
			}

			document.querySelector('header>address>canvas')?.remove()

		}
			
		if (currentPath === '/portfolio') {

			document.querySelector("h1")?.classList.toggle("rainbow_text_animated")
			document.querySelector("#collapse_0")?.classList.toggle("rainbow_text_animated")
			document.querySelector("#collapse_1")?.classList.toggle("rainbow_text_animated")
			document.querySelector("#collapse_2")?.classList.toggle("rainbow_text_animated")
			document.querySelector("#collapse_3")?.classList.toggle("rainbow_text_animated")

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