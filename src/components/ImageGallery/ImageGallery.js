import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    const { images, onToggleModal } = this.props;
    return (
      <ImageGalleryList>
        {images.map(({ id, tags, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              imgURL={webformatURL}
              largeImage={largeImageURL}
              alt={tags}
              onToggle={onToggleModal}
            />
          );
        })}
      </ImageGalleryList>
    );
  }
}

ImageGallery.defaultProp = {
  images: [],
};

ImageGallery.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
