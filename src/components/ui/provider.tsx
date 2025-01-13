"use client";

import {
  ChakraProvider,
  createSystem,
  defaultSystem,
  defineConfig,
} from "@chakra-ui/react";

import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        gray: {
          50: { value: "#ffe5f0" },
          100: { value: "#f9bbd1" },
          200: { value: "#ef91b0" },
          300: { value: "#e66591" },
          400: { value: "#de3a71" },
          500: { value: "#c52157" },
          600: { value: "#9a1844" },
          700: { value: "#6f0f31" },
          800: { value: "#45061d" },
          900: { value: "#1d000b" },
        },
      },
    },
  },
});

const system = createSystem(config);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
