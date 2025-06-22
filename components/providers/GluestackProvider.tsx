import { GluestackUIProvider } from "@gluestack-ui/themed";
import config from "../theme/gluestack-theme";
import { ReactNode } from "react";

interface GluestackProviderProps {
  children: ReactNode;
}

export function GluestackProvider({ children }: GluestackProviderProps) {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;
}
