import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import router from './router';

describe('Router Test', () => {
  test('Home Page', () => {
    const route = createMemoryRouter(router, {
      initialEntries: ['/'],
    });

    render(<RouterProvider router={route} />);

    expect(screen.getByTestId('main')).toBeInTheDocument();
  });

  test('AboutUs Page', () => {
    const route = createMemoryRouter(router, {
      initialEntries: ['/about'],
    });

    render(<RouterProvider router={route} />);

    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('Home Page and Detail Page', () => {
    const route = createMemoryRouter(router, {
      initialEntries: ['/details/1'],
    });

    render(<RouterProvider router={route} />);

    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.getByTestId('details-page')).toBeInTheDocument();
  });
});
