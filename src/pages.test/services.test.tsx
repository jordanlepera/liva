import { render, screen } from '@testing-library/react';

import Services from '@/app/services/page';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Services page', () => {
  describe('Render method', () => {
    it('should have two paragraphs containing `pour`', () => {
      render(<Services />);

      const paragraph = screen.getAllByText(/pour/);

      expect(paragraph).toHaveLength(2);
    });
  });
});
