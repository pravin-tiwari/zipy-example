import React, { lazy, Suspense } from 'react';

const LazyCardContainer = lazy(() => import('./CardContainer'));

const CardContainer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCardContainer {...props} />
  </Suspense>
);

export default CardContainer;
