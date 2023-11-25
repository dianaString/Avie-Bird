// import reactLogo from '../images/react.svg'
// import ls from "../services/localStorage";
// import { useState } from "react";
import '../styles/style.css'
import lovebird from '../svg/lovebird.svg'
//import images from '../images/imageData/imageData'

import Parts from './Parts';

function App() {
	/* const [part, setPart] = useState("Head"); */

	//html
	return (
		<>
			<div className="body">
				<div>
					<h1>Avie Bird</h1>
					<h3>Make your lovebird!</h3>
					<ul className="container_HeadBody">
						<Parts title="Head" />
						<Parts title="Body" />
						<Parts title="Ready!" />
					</ul>
					<div>
						{/* MIRA EL EJEMPLO DEL AHORCADO!! */}
						<div className="item-container">
							{/* Aquí van los items */}
						</div>
					</div>
				</div>

				<div className="jenaroSVG">
					<span className="ancla"></span>
					{/* feet */}
					<div className="feet">
						<svg className="svg" data-id="feet" id="feet" width="146" height="65">
							<use xlinkHref={`${lovebird}#feet`}></use>
						</svg>
					</div>
					{/* tail */}
					<div className="tail">
						<svg className="svg" data-id="tail" id="tail" width="56" height="59">
							<use xlinkHref={`${lovebird}#tail`}></use>
						</svg>
					</div>
					{/*  bodyBase */}
					<div className="bodyBase">
						<svg className="svg" data-id="bodyBase" id="bodyBase" width="188" height="269">
							<use xlinkHref={`${lovebird}#bodyBase`}></use>
						</svg>
					</div>
					{/* wings */}
					<div className="wings">
						<svg className="svg" data-id="wings" id="wings" width="205" height="126">
							<use xlinkHref={`${lovebird}#wings`}></use>
						</svg>
					</div>
					{/* tummy */}
					<div className="tummy">
						<svg className="svg " data-id="tummy" id="tummy" width="165" height="226">
							<use xlinkHref={`${lovebird}#tummy`}></use>
						</svg>
					</div>
					{/* none */}
					<div className="none">
						<svg className="svg " data-id="none" id="none">
							<use xlinkHref="#none"></use>
						</svg>
					</div>
					{/* headShape */}
					<div className="headShape">
						<svg className="svg" data-id="headShapeA" id="headShapeA" width="129" height="155">
							<use xlinkHref={`${lovebird}#headShapeA`}></use>
						</svg>
						<svg className="svg hidden" data-id="headShapeB" id="headShapeB" width="153" height="155">
							<use xlinkHref={`${lovebird}#headShapeB`}></use>
						</svg>
					</div>
					{/* fringe */}
					<div className="fringe">
						<svg className="svg" data-id="fringeA" id="fringeA" width="122" height="61">
							<use xlinkHref={`${lovebird}#fringeA`}></use>
						</svg>
						<svg className="svg hidden" data-id="fringeB" id="fringeB" width="153" height="78">
							<use xlinkHref={`${lovebird}#fringeB`}></use>
						</svg>
					</div>
					{/* eye  */}
					<div className="eye">
						<svg className="svg" data-id="eyeA" id="eyeA" width="26" height="32">
							<use xlinkHref={`${lovebird}#eyeA`}></use>
						</svg>
						<svg className="svg hidden" data-id="eyeB" id="eyeB" width="25" height="24">
							<use xlinkHref={`${lovebird}#eyeB`}></use>
						</svg>
					</div>
					{/* beak  */}
					<div className="beak">
						<svg className="svg" data-id="beak" id="beak" width="47" height="53">
							<use xlinkHref={`${lovebird}#beak`}></use>
						</svg>
					</div>
					{/* do not touch */}
					<div className="doNotTouch">
						<svg className="svg" data-id="eyeBorder" id="eyeBorder" width="38" height="46">
							<use xlinkHref={`${lovebird}#eyeBorder`}></use>
						</svg>
						<svg className="svg" data-id="nose" id="nose" width="45" height="30">
							<use xlinkHref={`${lovebird}#nose`}></use>
						</svg>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
