import { isActive } from './Header.helpers';

describe('Header helper functions tests', () => {
  it('should return true when path and href same', () => {
    const mockPath = 'contact';
    const mockHref = 'contact';

    const result = isActive(mockPath, mockHref);

    expect(result).toBeTruthy();
  });

  it('should return false when path and href are different', () => {
    const mockPath = 'contact';
    const mockHref = 'about-me';

    const result = isActive(mockPath, mockHref);

    expect(result).toBeFalsy();
  });

  it('should remove hash correctly and return true', () => {
    const mockPath = 'contact';
    const mockHref = '#contact';

    const result = isActive(mockPath, mockHref);

    expect(result).toBeTruthy();
  });
});
