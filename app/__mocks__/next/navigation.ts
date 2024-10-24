module.exports = {
  usePathname: jest.fn(() => '/'),
  useRouter: jest.fn(() => ({
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    push: jest.fn(),
    prefetch: jest.fn(),
    replace: jest.fn(),
  })),
  useParams: jest.fn(() => ({ locale: 'en' })),
  useSelectedLayoutSegment: jest.fn(() => ({ locale: 'en' })),
};
