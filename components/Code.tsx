import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
export const Code = ({ children, className }) => {
  const language = className.replace(/language-/, "");
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} text-left my-1 p-1 overflow-scroll`}
          style={style}
        >
          {tokens
            .filter((_, i) => tokens.length != i + 1)
            .map((line, i) => (
              <div
                className="table-row"
                key={i}
                {...getLineProps({ line, key: i })}
              >
                <div className="table-cell text-right pr-2 select-none opacity-50">
                  {i + 1}
                </div>
                <div className="table-cell ">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              </div>
            ))}
        </pre>
      )}
    </Highlight>
  );
};
