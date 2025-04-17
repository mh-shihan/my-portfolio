import { useEffect, useState } from "react";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime"; // Required for MDX runtime
import { MDXProvider } from "@mdx-js/react";

const MdxRenderer = ({ content }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const compileMdx = async () => {
      try {
        const { default: MdxComponent } = await evaluate(content, {
          ...runtime,
          useDynamicImport: false,
        });
        setComponent(() => MdxComponent);
      } catch (error) {
        console.error("MDX evaluation error:", error);
      }
    };

    compileMdx();
  }, [content]);

  if (!Component) return <div>Loading MDX...</div>;

  return (
    <MDXProvider>
      <Component />
    </MDXProvider>
  );
};

export default MdxRenderer;
