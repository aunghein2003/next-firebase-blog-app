"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

function Provider({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme baseColor="#e5e7eb" highlightColor="#fff">
        {children}
      </SkeletonTheme>
    </QueryClientProvider>
  );
}

export default Provider;
