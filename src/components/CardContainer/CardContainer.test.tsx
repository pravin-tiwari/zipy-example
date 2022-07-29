import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardContainer from './CardContainer';

describe('<CardContainer />', () => {
  test('it should mount', () => {
    render(<CardContainer />);
    
    const cardContainer = screen.getByTestId('CardContainer');

    expect(cardContainer).toBeInTheDocument();
  });
});