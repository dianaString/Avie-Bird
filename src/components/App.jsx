
import React, { useState } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Items from "./Items";
import ItemDetail from "./ItemDetail";
// images/data:
import lovebirdsData from '../data/LovebirdsData.json';
import lovebird from '../images/lovebird.svg'


function App() {

	const [bodyParts, setBodyParts] = useState(lovebirdsData);
	const [paletteVisible, setPaletteVisible] = useState(false);

	const unsorted = [8,7,4,6,5,0,1,2,3];
	const unsortedBodyParts = unsorted.map((i) => bodyParts[i]);

	const handleItemClick = (bodyIndex, indexClicked, itemName) => {

		const newBichitoData = bodyParts.map((bodyPart, index) => {
			if (bodyIndex === index) {

				const items = bodyPart.items.map((item, itemIndex) => {
					if (indexClicked === itemIndex) {
						return item.bool ? item : { ...item, bool: true };
					} else {
						return item.bool ? { ...item, bool: false } : item;
					}
				});

				return { ...bodyPart, items, };

			} else {
				return bodyPart;
			}
		});

		setBodyParts(newBichitoData);
		console.log("This is the item selected:");
		console.log(indexClicked, itemName);
	};


	const handlePaintClick = (event) => {
		event.stopPropagation();
		setPaletteVisible(!paletteVisible);
	};

	const handleColorClick = (newColor, itemName) => {

		const newColorBichitoData = bodyParts.map((bodyPart) => {
			const items = bodyPart.items.map((item) => {
				if (item.itemName === itemName) {
					console.log("Este es el itemName");
					console.log(item.itemName);
					item.selectedColor = newColor;

				} else {
					return item;
				}
			});
			return { ...bodyPart, items, };
		});

		setBodyParts(newColorBichitoData);

		console.log('newColor:');
		console.log(newColor);
	}

	return (
		<>
			<div className="body">
				<div>
					<h1>Avie Bird</h1>
					<h3>Make your lovebird!</h3>
					<nav> {/* --- MENÚ / NAV --- */}
						<ul className="container_HeadBody" >
							<li><Link to="/head">Head</Link></li>
							<li><Link to="/body">Body</Link></li>
							<li><Link to="/ready">Ready!</Link></li>
						</ul>
					</nav>

					<Routes> {/* --- RUTAS --- */}
						{bodyParts.map((bodyPart) => (
							<React.Fragment key={bodyPart.idNo}>

								<Route path="/" element={ 
										<Navigate 
											to={`/${bodyParts[0].category}/${bodyParts[0].name}`} 
											replace />
										} 
									index 
								/>
								<Route path={`${bodyPart.category}`} 
									element={
										<Items 
											bodyParts={bodyParts}
										/>
									}
								> 
								<Route index element={<Navigate to={`${bodyPart.name}`} replace />} />
									{bodyPart.items.map((item) => (
										<Route 
											key={item.itemId}
											path={`:${item.name}`}
											element={
												<ItemDetail 
													bodyParts={bodyParts}
													handleItemClick={handleItemClick}
													handlePaintClick={handlePaintClick}
													paletteVisible={paletteVisible}
													handleColorClick={handleColorClick} 
												/>
											} 
										/>
									))}
								</Route>
							</React.Fragment>
						))}
						<Route key={'Ready'} path={'/Ready'} element={ <h3>Take a photo!</h3>}/>
					</Routes>
				</div>

				{/* <JenaroSVG /> */}
				<div className="container-bichito">

					{unsortedBodyParts.map((bodyPart) => (
						bodyPart.items.map((item) => (
							<React.Fragment key={item.itemId}>
								<svg className={`svg ${item.bool ? '' : 'hidden'} ${item.itemName}`} style={{ color: item.selectedColor }} width={item.width} height={item.height}>
									<use xlinkHref={`${lovebird}#${item.itemName}`}></use>
								</svg>
							</React.Fragment>
						))
					))}

					<svg className="svg nose" width="45" height="30">
						<use xlinkHref={`${lovebird}#nose`}></use>
					</svg>
					<svg className="svg eyeBorder" width="38" height="46">
						<use xlinkHref={`${lovebird}#eyeBorder`}></use>
					</svg>

				</div>
			</div>
		</>
	)
}

export default App