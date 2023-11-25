
import Images from '../data/imageData'
import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';

const Items = ({ bodyParts, handleItemClick, handlePaintClick, paletteVisible, handleColorClick }) => {

    const location = useLocation();

    const currentPath = location.pathname.substring(1);
    const currentBodyPart = bodyParts.find((bodyPart) => bodyPart.name === currentPath);

    if (!currentBodyPart) {
        return <p>Body part not found</p>;
    }
    
    return (
        <>
            <p>{`${currentBodyPart.name}`}</p>
            <div className="container-items" >
                {currentBodyPart.items.map((item, itemIndex) => (
                    <div key={item.itemId} onClick={() => handleItemClick(currentBodyPart.idNo, itemIndex, item.itemName)}>

                        <figure className={`item ${item.bool ? 'selected' : ''}`}>
                            <img src={Images[item.itemName]} alt={item.itemName} />
                            <span className={`paintBtn ${item.bool && item.itemName !== 'nothing' ? '' : 'hidden'}`}
                                onClick={(event) => handlePaintClick(event)}>
                            </span>
                        </figure>

                        <div className={`paletteContainer ${paletteVisible && item.bool ? '' : 'semiHidden'}`}>
                            <h4>{`Colors ${item.itemName}`}</h4>
                            <div className="colorPalette">
                                {item.colors.map((color, colorIndex) => (
                                    <span 
                                        key={colorIndex} 
                                        className="color" 
                                        style={{ backgroundColor: color, cursor: color === undefined ? 'auto' : 'pointer' }}
                                        onClick={() => handleColorClick(color, item.itemName)}
                                    >   
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}

Items.propTypes = {
    bodyParts: PropTypes.array.isRequired,
    handleItemClick: PropTypes.func.isRequired,
    handlePaintClick: PropTypes.func.isRequired,
    paletteVisible: PropTypes.bool.isRequired,
    handleColorClick: PropTypes.func.isRequired,
};

export default Items