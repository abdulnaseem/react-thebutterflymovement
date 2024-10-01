import { createContext, useState } from "react";

export const GalleryStateContext = createContext({
    images: [],
    image: {},
    open: false,
    selectedImageId: undefined,
    currentImage: undefined,
    imagesData: () => {},
    clickOpenImage: () => {},
    clickOpenedImage: () => {},
    clickCloseImage: () => {},
    clickPreviousImage: () => {},
    clickNextImage: () => {}
})

const GalleryStateContextProvider = ({children}) => {
    const [galleryState, setGalleryState] = useState({
        images: [],
        image: {},
        open: false,
        selectedImageId: undefined,
        currentImage: undefined,
    });

    const handleImagesData = (data) => {
        setGalleryState(prevState => {
            return {
                ...prevState,
                images: [...prevState.images, data]
            }
        });
    }

    const handleClickOpenImage = (id) => {
        setGalleryState(prevState => {
            return {
                ...prevState,
                open: true,
                selectedImageId: id,
                currentImage: id,
            } 
        });
    }

    const handleClickOpenedImage = (id, imageURL) => {
        setGalleryState(prevState => {
            return {
                ...prevState,
                currentImage: id,
                image: {
                    id,
                    url: imageURL
                }
            } 
        });
    }

    const handleClickCloseImage = () => {
        setGalleryState(prevState => {
            return {
                ...prevState,
                open: false
            }
        });
    }

    const length = galleryState.images.length;

    const handleClickPreviousImage = (currentId) => {
        setGalleryState(prevState => {
            return {
                ...prevState,
                currentImage: currentId === 0 ? length - 1 : currentId - 1,
            }
        });
    }

    const handleClickNextImage = (currentId) => {
        setGalleryState(prevState => {
            return {
                ...prevState,
                currentImage: currentId === length - 1 ? 0 : currentId + 1
            }
        });
    }

    const galleryStateCtx = {
        images: galleryState.images,
        image: galleryState.image,
        open: galleryState.open,
        selectedImageId: galleryState.selectedImageId,
        currentImage: galleryState.currentImage,
        imagesData: handleImagesData,
        clickOpenImage: handleClickOpenImage,
        clickOpenedImage: handleClickOpenedImage,
        clickCloseImage: handleClickCloseImage,
        clickPreviousImage: handleClickPreviousImage,
        clickNextImage: handleClickNextImage
    }

    return <GalleryStateContext.Provider value={galleryStateCtx}>
        {children}
    </GalleryStateContext.Provider>
}

export default GalleryStateContextProvider;