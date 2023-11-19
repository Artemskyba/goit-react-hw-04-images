import { Component } from 'react';
import { GalleryImage, GalleryItem } from './image-gallery-item.styled';
import { Modal } from 'components/modal/modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { smallImageUrl, largeImageUrl, description } = this.props;
    return (
      <>
        <GalleryItem onClick={this.openModal}>
          <GalleryImage src={smallImageUrl} alt={description} />
        </GalleryItem>
        <Modal
          isModalOpen={isModalOpen}
          imageUrl={largeImageUrl}
          description={description}
          closeModal={this.closeModal}
        ></Modal>
      </>
    );
  }
}
