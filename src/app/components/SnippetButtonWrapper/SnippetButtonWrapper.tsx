'use client';

import dynamic from 'next/dynamic';

const SnippetButton = dynamic(() => import('../SnippetButton/SnippetButton'), {
  ssr: false,
});

const SnippetButtonWrapper = () => {
  return <SnippetButton />;
};

export default SnippetButtonWrapper;
