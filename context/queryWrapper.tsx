import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
type Props = {
  children?: React.ReactNode;
};
const client = new QueryClient();
export default function QueryWrapper({ children }: Props) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
