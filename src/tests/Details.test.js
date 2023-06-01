import React from 'react';
import renderer from 'react-test-renderer';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Details from '../components/Details';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),

}));

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
}));

describe('Details', () => {
  const mockData = [
    {
      name: { common: 'country one' }, population: 1234, flags: { png: 'image-link.png' }, coatOfArms: { png: 'image-link.png' }, id: '1',
    },
    {
      name: { common: 'country two' }, population: 1200, flags: { png: 'image-link.png' }, coatOfArms: { png: 'image-link.png' }, id: '2',
    },
    {
      name: { common: 'country three' }, population: 1534, flags: { png: 'image-link.png' }, coatOfArms: { png: 'image-link.png' }, id: '3',
    },
  ];

  beforeEach(() => {
    useSelector.mockReturnValue({ countries: mockData });
    useLocation.mockReturnValue({ state: '1' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render correctly', () => {
    const tree = renderer.create(
      <Details />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should filter the selected country', () => {
    const location = useLocation();
    const filtered = mockData.filter((country) => country.id === location.state);
    expect(filtered.length).toBe(1);
  });
});
