// import { setupIntersectionObserverMock } from '__mocks__/intersectionObserverMock';
import { render, screen } from '@testing-library/react';

import IndexPage from '@/app/page';

import { setupIntersectionObserverMock } from './intersectionObserverMock';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Index page', () => {
  describe('Render method', () => {
    it('should render the Hero component', () => {
      setupIntersectionObserverMock();
      render(<IndexPage />);

      const hero = screen.getAllByRole('img', { name: 'hero liva maçonnerie' });

      expect(hero).toHaveLength(2);
    });
  });
});
