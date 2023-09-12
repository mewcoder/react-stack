import { lazy, Suspense } from "react";
import { Spin } from "antd";

function LazyWrapper(path: string) {
  // const LazyComponent = lazy(() => import(`/src/views/${path}/index.tsx`));

  // 模拟加载慢
  const LazyComponent = lazy(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(import(`/src/views/${path}/index.tsx`));
        }, 3000);
      })
  );

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
