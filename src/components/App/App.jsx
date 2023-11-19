import { SearchForm } from '../searchbar/searchbar';
import { fetchImages } from '../api';
import { ImageGallery } from '../image-gallery/image-gallery';
import { Button } from '../load-more-button/button';
import { LineWave } from 'react-loader-spinner';
import { GlobalStyle } from '../global-styles';
import { AppContainer, Loader } from './App.styled';
import { useEffect, useState } from 'react';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState(``);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    async function getImages() {
      if (!query) {
        return;
      }

      if (query.split('/')[1].trim().length > 0) {
        try {
          setIsLoading(true);
          const fetchedImages = await fetchImages(query.split('/')[1], page);
          const { hits, totalHits } = fetchedImages;
          setImages(prevImages => [...prevImages, ...hits]);
          setLoadMore(page < Math.ceil(totalHits / 12));
        } catch (error) {
        } finally {
          setIsLoading(false);
        }
        return;
      }
      setLoadMore(false);
    }
    getImages();
  }, [query, page]);

  const handleSubmit = searchQuery => {
    setImages([]);
    setQuery(`${Date.now()}/${searchQuery}`);
    setPage(1);
  };

  const changePage = () => {
    setPage(prevPage => prevPage + 1);
    setLoadMore(false);
  };

  return (
    <AppContainer>
      <SearchForm onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {isLoading && (
        <Loader>
          <LineWave width="250" height="250" />
        </Loader>
      )}
      {loadMore && <Button loadMore={changePage} />}
      <GlobalStyle />
    </AppContainer>
  );
};
