import { Link } from "react-router-dom";

const GalleryItem = ({ id, url, setImageId, projectUrl }) => {

    return (
        <Link to={`/brawlers-boxing/${id}`} onClick={() => setImageId(id, projectUrl)}>
            <div className="gallery-image">
                <img className="gallery-image-item" src={url} alt="" />
            </div>
        </Link>
    )
}

export default GalleryItem;