// __tests__/utils.ts
import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import pick from 'lodash/pick';
import messages from '../../messages/en.json';
import React, { ReactElement, ReactNode } from 'react';
import { type RenderOptions, type RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';

type TestProviderOptions = {
  theme?: string;
};

type CustomOptions = RenderOptions & TestProviderOptions;

// locale provider mock

export const renderWithProvider = (
  ui: React.ReactElement,
  messageKey: string
) => {
  return render(
    <NextIntlClientProvider locale="en" messages={pick(messages, [messageKey])}>
      {ui}
    </NextIntlClientProvider>
  );
};

// theme provider mock

const createTestProviders = ({
  theme = 'dark',
}: TestProviderOptions): React.FC<{ children: ReactNode }> =>
  function ProvideThemes({ children }) {
    return (
      <ThemeProvider
        defaultTheme={theme}
        enableSystem={false}
        attribute="class"
      >
        {children}
      </ThemeProvider>
    );
  };

export const renderWithThemeContext = (
  ui: ReactElement,
  { theme, ...options }: CustomOptions = {}
): RenderResult =>
  render(ui, { wrapper: createTestProviders({ theme }), ...options });
