import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('renders the Lesotho home page and eight destinations with images', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /find your own high ground/i })).toBeInTheDocument();
  expect(screen.getAllByRole('article')).toHaveLength(8);
  expect(screen.getAllByRole('img')).toHaveLength(8);
  expect(screen.getAllByRole('img', { name: /lesotho/i })).toHaveLength(8);
});

test('searches and filters destinations', () => {
  render(<App />);
  fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'Katse' } });
  expect(screen.getByRole('heading', { name: 'Katse Dam' })).toBeInTheDocument();
  expect(screen.getAllByRole('article')).toHaveLength(1);

  fireEvent.change(screen.getByRole('searchbox'), { target: { value: '' } });
  fireEvent.change(screen.getByLabelText('Filter by category'), { target: { value: 'Culture' } });
  expect(screen.getAllByRole('article')).toHaveLength(1);
});

test('shows featured activities and filters destinations when one is selected', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /explore pony trekking destinations/i }));

  expect(screen.getByRole('heading', { name: 'Maletsunyane Waterfalls' })).toBeInTheDocument();
  expect(screen.getAllByRole('article')).toHaveLength(1);
});

test('opens and closes attraction details', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'View Maletsunyane Waterfalls details' }));
  expect(screen.getByRole('dialog')).toHaveTextContent('Semonkong, Maseru District');
  fireEvent.click(within(screen.getByRole('dialog')).getByRole('button', { name: 'Close details' }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('validates and confirms an enquiry', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /send your enquiry/i }));
  expect(screen.getByText('Please enter your full name.')).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText('Full name'), { target: { value: 'A visitor' } });
  fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'visitor@example.com' } });
  fireEvent.change(screen.getByLabelText('Phone number'), { target: { value: '+266 5012 3456' } });
  fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'Katse Dam' } });
  fireEvent.change(screen.getByLabelText('Number of visitors'), { target: { value: '2' } });
  const visitDate = new Date();
  visitDate.setDate(visitDate.getDate() + 2);
  fireEvent.change(screen.getByLabelText('Preferred visit date'), { target: { value: visitDate.toISOString().slice(0, 10) } });
  fireEvent.change(screen.getByLabelText('Your message'), { target: { value: 'Please share more information.' } });
  fireEvent.click(screen.getByRole('button', { name: /send your enquiry/i }));

  expect(screen.getByRole('status')).toHaveTextContent('Your enquiry has been received');
});
