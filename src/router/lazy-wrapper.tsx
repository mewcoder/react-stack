import { lazy, Suspense } from "react";
import { Spin } from "antd";

function LazyWrapper(path: string) {
  const LazyComponent = lazy(() => import(`/src/views/${path}/index.tsx`));

  return (
    <Suspense
      fallback={
        <div id="loading">
          <Spin size="large" />
        </div>
      }
    >
      <LazyComponent />
    </Suspense>
  );
}

export default LazyWrapper;
