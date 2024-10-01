import { useNavigate } from "react-router-dom";

const SelectedImage = ({ imageUrl, previous, next, projectUrl }) => {

    const navigate = useNavigate();

    let sectionStyle = {
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor:"black"
    };
    
    let arrowStyle = {
        fontSize: "2.5rem",
        color: "white",
    };

    return (
        <div className="selected-image" style={sectionStyle}>
            {/* <img src={Background} /> */}
            <div className="close">
                <button className='close-button' onClick={() => navigate(`${projectUrl}`)}>
                    <i class="bi bi-x"
                    style={arrowStyle}></i>
                </button>
            </div>
            <div className="gallery-button">
                
                <div className="prev-next">
                    <button className="previous" onClick={previous}>
                        <i class="bi bi-chevron-left" style={arrowStyle}></i>
                    </button>
                    <button className="next" onClick={next}>
                        <i class="bi bi-chevron-right" style={arrowStyle}></i>
                    </button>
                </div>
            </div>
            
            <p className="image-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    )
}

export default SelectedImage;