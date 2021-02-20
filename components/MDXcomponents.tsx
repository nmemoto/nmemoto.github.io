import { Code } from "./Code";

const MDXComponents = {
  h1: (props) => <h2 className="font-bold text-3xl py-2" {...props} />,
  h2: (props) => <h3 className="font-bold text-2xl py-2" {...props} />,
  h3: (props) => <h4 className="font-bold text-xl py-2" {...props} />,
  h4: (props) => <h5 className="font-bold text-lg py-2" {...props} />,
  h5: (props) => <h6 className="font-bold text-base py-2" {...props} />,
  a: (props) => (
    <a
      className="text-blue-600 hover:text-blue-400"
      target="_blank"
      rel="noopener"
      {...props}
    />
  ),
  img: (props) => <img className="block h-52 mx-auto my-5" {...props} />,
  ul: (props) => <ul className="list-disc pl-5 text-gray-800" {...props} />,
  li: (props) => <li className="py-1" {...props} />,
  ol: (props) => <ol className="list-decimal pl-5 text-gray-800" {...props} />,
  table: (props) => (
    <div className="shadow overflow-hidden border-b border-gray-300 sm:rounded-lg my-5">
      <table className="min-w-full divide-y divide-gray-200" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-gray-100" {...props} />,
  th: (props) => (
    <th
      className="px-6 py-3 text-xs font-medium text-gray-500 bg-gray-100"
      {...props}
    />
  ),
  td: (props) => <td className="px-6 text-sm py-1 bg-white" {...props} />,
  code: (props) => <Code className="py-1" {...props} />,
  inlineCode: (props) => (
    <pre className="bg-gray-200 inline rounded px-1 mx-1" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="p-4 italic border-l-4 border-gray-300 bg-gray-100"
      {...props}
    />
  ),
};

export default MDXComponents;
