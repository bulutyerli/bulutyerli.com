import { useRouter } from 'next/navigation';
import { handleRoute, isActive } from './Header.helpers';

describe('Header helper functions tests', () => {
  describe('isActive helper function tests', () => {
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

  describe('handleRoute helper function tests', () => {
    const scrollIntoViewMock = jest.fn();
    Element.prototype.scrollIntoView = scrollIntoViewMock;

    const mockRouter = useRouter();

    beforeEach(() => {
      jest.clearAllMocks();
      document.body.innerHTML = '<div id="about"></div>';
    });

    it('should ', () => {
      const mockPathName = '/';
      const mockHref = '#about';

      console.log('Calling handleRoute');

      handleRoute(mockPathName, mockHref, mockRouter);
      expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });
      expect(mockRouter.push).not.toHaveBeenCalled();
    });

    it('should push user to correct url if not at homepage', () => {
      const mockPathName = '/projects/workwise';
      const mockHref = '#about';

      handleRoute(mockPathName, mockHref, mockRouter);

      expect(scrollIntoViewMock).not.toHaveBeenCalledWith({
        behavior: 'smooth',
      });

      expect(scrollIntoViewMock).not.toHaveBeenCalled();
      expect(mockRouter.push).toHaveBeenCalledWith(`/${mockHref}`);
    });
  });
});
