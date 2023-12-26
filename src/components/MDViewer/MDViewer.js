import { marked } from 'marked';
import katex from 'katex';
import 'katex/dist/katex.min.css'; // import styles

// Create a custom renderer
const renderer = new marked.Renderer();
const originalTextRenderer = renderer.text;
renderer.text = (text) => {
  const parts = text.split(/(\$.*?\$)/);
  return parts.map(part => {
    if (part.startsWith('$') && part.endsWith('$')) {
      const math = part.slice(1, -1);
      return katex.renderToString(math, { throwOnError: false });
    }
    return originalTextRenderer(part);
  }).join('');
};

// Set the options for marked
marked.setOptions({
  renderer,
});

const MDViewer = ({ content }) => {
  if (typeof content !== 'string') {
    console.error('Invalid content:', content);
    return null;
  }

  return (
    <div className="prose prose-invert prose-slate prose-sm md:prose-base  h-fit w-full">
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  );
};

export default MDViewer;