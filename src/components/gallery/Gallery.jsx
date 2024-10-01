import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import GalleryItem from './GalleryItem';
import { useLocation } from 'react-router-dom';

const Gallery = ({data, setImageId, projectUrl}) => {

    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`${projectUrl}/${id}`);
    }

    const location = useLocation();

    return (
        <div>
            {data.images.map((image, i) => {
                console.log(data);

                return (
                    <Fragment key={i}>
                            {
                                location.pathName === `${projectUrl}/${image.id}` ?
                                
                                handleNavigate(image.id)

                                :
                                
                                <GalleryItem key={i} id={image.id} url={image.url} setImageId={setImageId} projectUrl={projectUrl} />
                            }
                    </Fragment>
                )
            })}
        </div>
    )

}

export default Gallery;