import { MDXProvider } from "@mdx-js/react";
import "../styles/globals.css";

const components = {
  h1: (props) => <h1 className="font-bold text-4xl" {...props} />,
  h2: (props) => <h2 className="font-bold text-3xl" {...props} />,
  h3: (props) => <h3 className="font-bold text-2xl" {...props} />,
  h4: (props) => <h4 className="font-bold text-xl" {...props} />,
};

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />;
    </MDXProvider>
  );
}

export default MyApp;
