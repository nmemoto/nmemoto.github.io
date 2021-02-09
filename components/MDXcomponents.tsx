const MDXComponents = {
  h1: (props) => <h1 className="font-bold text-4xl my-3" {...props} />,
  h2: (props) => <h2 className="font-bold text-3xl my-2" {...props} />,
  h3: (props) => <h3 className="font-bold text-2xl my-1" {...props} />,
  h4: (props) => <h4 className="font-bold text-xl my-1" {...props} />,
  a: (props) => (
    <a
      className="text-blue-600 hover:text-blue-400"
      target="_blank"
      rel="noopener"
      {...props}
    />
  ),
  img: (props) => <img className="h-44" {...props} />,
  ul: (props) => <ul className="list-disc pl-5" {...props} />,
  li: (props) => <li className="py-1" {...props} />,
};

export default MDXComponents;
