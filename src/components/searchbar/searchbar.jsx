import { Formik } from 'formik';
import {
  Button,
  Form,
  Field,
  SearchbarWrapper,
  SearchIcon,
} from './searchbar.styled';

export const SearchForm = ({ onSubmit }) => (
  <SearchbarWrapper>
    <Formik
      initialValues={{
        searchQuery: '',
      }}
      onSubmit={values => {
        onSubmit(values.searchQuery);
      }}
    >
      <Form>
        <Button type="submit">
          <SearchIcon />
        </Button>
        <Field
          id="searchQuery"
          name="searchQuery"
          placeholder="Search images and photos"
        />
      </Form>
    </Formik>
  </SearchbarWrapper>
);
