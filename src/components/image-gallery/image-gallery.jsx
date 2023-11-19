import { ImageGalleryItem } from 'components/image-gallery-item/image-gallery-item';
import { GalleryList } from './image-gallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            smallImageUrl={webformatURL}
            largeImageUrl={largeImageURL}
            description={tags}
          />
        );
      })}
    </GalleryList>
  );
};
