import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import router from './router';
import { ContainerQuery } from '@/__tests__/setupTests';

describe('Router Test', () => {
  test('Home Page', () => {
    const route = createMemoryRouter(router, {
      initialEntries: ['/'],
    });

    render(
      <ContainerQuery>
        <RouterProvider router={route} />
      </ContainerQuery>
    );

    expect(screen.getByTestId('main')).toBeInTheDocument();
  });

  test('AboutUs Page', () => {
    const route = createMemoryRouter(router, {
      initialEntries: ['/about'],
    });

    render(
      <ContainerQuery>
        <RouterProvider router={route} />
      </ContainerQuery>
    );

    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('Home Page and Detail Page', () => {
    const route = createMemoryRouter(router, {
      initialEntries: ['/details/1'],
    });

    render(
      <ContainerQuery>
        <RouterProvider router={route} />
      </ContainerQuery>
    );

    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.getByTestId('details-page')).toBeInTheDocument();
  });
});
