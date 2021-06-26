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

  it('displays a list of users and their data', async () => {
    const tableRows = await screen.findAllByLabelText('user row');
    expect(tableRows.length).toBeGreaterThan(0);
    
    tableRows.forEach(row => {
      expect(row).toMatchSnapshot();
    });
  });

  // TODO this test needs to actually do something, but I need to work on the execution
  it.skip('takes in a search term and correctly updates with results on submit', () => {
    const searchForm = screen.getByLabelText('search form');
    const searchInput = screen.getByRole('textbox');
    
    fireEvent.change(searchInput, {
      target: { value: 'devon-wolf' } 
    });

    fireEvent.submit(searchForm);
  });
});



