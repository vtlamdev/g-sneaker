"use client";
import { Provider } from "react-redux";
import { store } from "@/app/GlobalRedux/store";
interface ProvidersProps {
  children: React.ReactNode;
}
export function Providers({ children }: ProvidersProps): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}
