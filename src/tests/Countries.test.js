import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import Countries from '../components/Countries';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Countries', () => {
  const mockData = [
    {
      name: { common: 'country 1' }, population: 1234, flags: { png: 'image-link.png' }, coatOfArms: { png: 'image-link.png' }, id: '1',
    },
    {
      name: { common: 'country 2' }, population: 1200, flags: { png: 'image-link.png' }, coatOfArms: { png: 'image-link.png' }, id: '2',
    },
    {
      name: { common: 'country 3' }, population: 1534, flags: { png: 'image-link.png' }, coatOfArms: { png: 'image-link.png' }, id: '3',
    },
  ];

  beforeEach(() => {
    useSelector.mockReturnValue({ countries: mockData });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly', () => {
    const tree = renderer.create(
      <Router>
        <Countries />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should display all countries on load', () => {
    render(
      <Router>
        <Countries />
      </Router>,
    );
    const countryDisplayed = screen.getAllByRole('link', { name: /^country/i });
    expect(countryDisplayed).toHaveLength(3);
  });

  it('Should display searched country', () => {
    render(
      <Router>
        <Countries />
      </Router>,
    );
    const searchInput = screen.getByPlaceholderText('enter country name to search');
    fireEvent.change(searchInput, { target: { value: 'country 3' } });

    const countryDisplayed = screen.getAllByRole('link', { name: /^country/i });
    expect(countryDisplayed).toHaveLength(1);
  });
});
