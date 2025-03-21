import { Fragment } from 'react';
import GalleryItem from './GalleryItem';

const Gallery = ({ data, setImageId, projectUrl, onImageClick }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {data.images.map((image, i) => (
                <Fragment key={i}>
                    <GalleryItem
                        key={i}
                        id={image.id}
                        url={image.url}
                        setImageId={setImageId}
                        projectUrl={projectUrl}
                        onClick={() => onImageClick(image.id)} // Pass the onClick handler
                    />
                </Fragment>
            ))}
        </div>
    );
};

export default Gallery;