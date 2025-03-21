import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectedImage from './SelectedImage';

const Image = ({ id, data, projectUrl }) => {
    const [current, setCurrent] = useState(id);
    const [slideDirection, setSlideDirection] = useState(''); // 'left' or 'right'
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`${projectUrl}/${current}`);
    }, [current]);

    const length = data.images.length;

    const prev = () => {
        setSlideDirection('left');
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const next = () => {
        setSlideDirection('right');
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    return (
        <div>
            {data.images
                .filter((image) => image.id === current)
                .map((image, index) => (
                    <SelectedImage
                        key={index}
                        imageUrl={image.url}
                        previous={prev}
                        next={next}
                        projectUrl={projectUrl}
                    />
                ))}
        </div>
    );
};

export default Image;