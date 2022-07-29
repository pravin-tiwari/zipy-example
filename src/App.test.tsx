import { render, waitFor } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('it should mount', async () => {
    const { getByTestId } = render(<App />);
    const app = await waitFor(() => getByTestId('App'));
    expect(app).toBeInTheDocument();
  });
});