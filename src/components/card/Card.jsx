import './card.css';
import CardItem from './CardItem';


const Card = ({ 
    cardData, 
    style,
    itemDivStyle,
    itemIconStyle,
    itemHeaderStyle,
    itemTextStyle 
}) => {

    return (
        <>
            <div className={`grid-container-card ${style}`}>
                {
                    cardData.map((data) => {
                        return (
                            <CardItem key={data.id} 
                                icon={data.iconLetter} 
                                header={data.header} 
                                text={data.text}
                                itemDivStyle={itemDivStyle}
                                itemIconStyle={itemIconStyle}
                                itemHeaderStyle={itemHeaderStyle}
                                itemTextStyle={itemTextStyle} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Card;