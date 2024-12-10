import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  experimental: {
    taint: true,
  },
};

export default withNextIntl(nextConfig);
