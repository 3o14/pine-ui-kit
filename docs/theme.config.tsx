import React from 'react';
import { useRouter } from 'next/router';
import type { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>🍍 Pine Design System</span>,
  project: {
    link: 'https://github.com/3o14/pine-design-system',
  },
  docsRepositoryBase: 'https://github.com/3o14/pine-design-system/tree/main/docs',
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/3o14" target="_blank">
          3o14
        </a>
        .
      </span>
    ),
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Pine Design System',
      };
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Pine Design System" />
      <meta property="og:description" content="A comprehensive design system with token-driven theming" />
    </>
  ),
};

export default config;
