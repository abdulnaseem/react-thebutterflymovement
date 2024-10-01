import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectedImage from './SelectedImage';

const Image = ({id, data, projectUrl}) => {
    console.log(data.url);

    const [current, setCurrent] = useState(id);

    useEffect(() => {
        navigate(`${projectUrl}/${current}`)
    }, [current]);

    const navigate = useNavigate();

    const length = data.images.length;

    const prev = () => {
        console.log('Previous');
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    const next = () => {
        console.log('Next');
        setCurrent(current === length - 1 ? 0 : current + 1);
    }


    return (
        <div>
            {
                data.images
                .filter((image) => image.id === current)
                .map((image, index) => {
                    return <SelectedImage key={index} imageUrl={image.url} previous={prev} next={next} projectUrl={projectUrl} />
                })
            }
        </div>
    )
}

export default Image;