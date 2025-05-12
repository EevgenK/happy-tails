'use client';
import dynamic from 'next/dynamic';

const InitialLoader = dynamic(() => import('../InitialLoader/InitialLoader'), {
  ssr: false,
});

const InitialLoaderWrapper = () => {
  return <InitialLoader />;
};

export default InitialLoaderWrapper;
