"use client";

import type { ReactNode } from "react";

import { QueryProvider } from "./query";

export function IntegrationsProvider({ children }: { children: ReactNode }) {
  return <QueryProvider>{children}</QueryProvider>;
}
