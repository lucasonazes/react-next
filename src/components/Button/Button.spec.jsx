import { render, screen } from '@testing-library/react';
import { Button } from '.';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  it('should call function on button click', () => {
    // jest.fn generates a mock function
    const fn = jest.fn();

    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    // userEvent.click simulates a button click
    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
