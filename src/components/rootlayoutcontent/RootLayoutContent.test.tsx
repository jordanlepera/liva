import { render, screen } from '@testing-library/react';

import RootLayoutContent from './RootLayoutContent';

describe('RoootLayout', () => {
  describe('Render method', () => {
    it('should have 10 menu items', () => {
      render(<RootLayoutContent>test</RootLayoutContent>);

      const menuItemList = screen.getAllByRole('listitem');

      expect(menuItemList).toHaveLength(10);
    });
  });
});
