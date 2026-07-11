import React, { Suspense } from "react";

export const Lazy3DIcon = React.memo(({ name, ...props }: { name: string; [key: string]: any }) => {
  const Component = React.useMemo(() => {
    return React.lazy(() =>
      import("r3d-icons").then((m) => {
        const Comp = (m as any)[name];
        if (!Comp) {
          console.warn(`Dynamic icon ${name} not found, falling back to ShieldIcon`);
          return { default: m.ShieldIcon };
        }
        return { default: Comp };
      })
    );
  }, [name]);

  return (
    <Suspense
      fallback={
        <div className="w-full h-full animate-pulse bg-zinc-250/20 dark:bg-zinc-800/10 rounded-2xl" />
      }
    >
      <Component {...props} />
    </Suspense>
  );
});
