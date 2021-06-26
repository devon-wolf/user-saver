import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserSaver from '../pages/UserSaver';

describe('UserSaver page', () => {
  beforeEach(() => {
    render(<UserSaver />);
  });

  it('renders the user saver page', () => {
    screen.getByLabelText('search form');
    screen.getByRole('textbox');
    screen.getByRole('table');
  });

  it.skip('takes in a search term and correctly updates with results on submit', () => {
    const searchForm = screen.getByLabelText('search form');
    const searchInput = screen.getByRole('textbox');
    
    fireEvent.change(searchInput, {
      target: { value: 'devon-wolf' } 
    });

    fireEvent.submit(searchForm);

    const userTable = screen.getByRole('table');
    
  });
});



