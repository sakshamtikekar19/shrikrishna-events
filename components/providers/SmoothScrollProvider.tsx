"use client";

import { ReactNode } from "react";

/** Native scrolling — Lenis was causing noticeable lag with this page’s layout. */
export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
