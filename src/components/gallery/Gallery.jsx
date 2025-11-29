import { Fragment } from 'react';
import GalleryItem from './GalleryItem';

const Gallery = ({ data, setImageId, projectUrl, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.images.map((image) => (
        <Fragment key={image.id}>
          <GalleryItem
            id={image.id}
            url={image.url}
            setImageId={setImageId}
            projectUrl={projectUrl}
            onClick={() => onImageClick(image.id)}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default Gallery;
