import { Component } from 'react';
import { SearchForm } from '../searchbar/searchbar';
import { fetchImages } from '../api';
import { ImageGallery } from '../image-gallery/image-gallery';
import { Button } from '../load-more-button/button';
import { LineWave } from 'react-loader-spinner';
import { GlobalStyle } from '../global-styles';
import { AppContainer, Loader } from './App.styled';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    loadMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { images, query, page } = this.state;
    if (
      (prevState.query !== query || prevState.page !== page) &&
      query.split('/')[1].trim().length > 0
    ) {
      try {
        this.setState({ isLoading: true });
        const fetchedImages = await fetchImages(query.split('/')[1], page);
        const { hits, totalHits } = fetchedImages;
        this.setState({
          images: [...images, ...hits],
          loadMore: page < Math.ceil(totalHits / 12),
        });
      } catch (error) {
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    }
  }

  handleSubmit = searchQuery => {
    this.setState({
      images: [],
      query: `${Date.now()}/${searchQuery}`,
      page: 1,
    });
  };

  changePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      loadMore: false,
    }));
  };

  render() {
    const { images, loadMore, isLoading } = this.state;

    return (
      <AppContainer>
        <SearchForm onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {isLoading && (
          <Loader>
            <LineWave width="250" height="250" />
          </Loader>
        )}
        {loadMore && <Button loadMore={this.changePage} />}
        <GlobalStyle />
      </AppContainer>
    );
  }
}
