import { useState } from 'react';
import { GalleryImage, GalleryItem } from './image-gallery-item.styled';
import { Modal } from 'components/modal/modal';

export const ImageGalleryItem = ({
  smallImageUrl,
  largeImageUrl,
  description,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <GalleryItem onClick={openModal}>
        <GalleryImage src={smallImageUrl} alt={description} />
      </GalleryItem>
      <Modal
        isModalOpen={isModalOpen}
        imageUrl={largeImageUrl}
        description={description}
        closeModal={closeModal}
      ></Modal>
    </>
  );
};
