import { Providers } from "app/providers";
import { Layout } from "pages/layout";

export const App = () => {
  return (
    <Providers>
      <Layout />
    </Providers>
  );
};
