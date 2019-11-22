import SyntaxHighlighter from "react-syntax-highlighter";
import { Prism } from "react-syntax-highlighter";
import * as hljsStyles from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as prismStyles from "react-syntax-highlighter/dist/esm/styles/prism";
const CodeHighlighter = {
  name: "codehg",
  priority: 1,
  test: node => node.component === "pre",
  process: node => {
    if (node.children.length > 0 && node.children[0].component === "code") {
      node.props.code = node.children[0].children[0].content;
      if (node.props.codeHighlighter === "hljs") {
        const hljsStyle = hljsStyles[node.props.chStyle];

        node.component = props => {
          return (
            <SyntaxHighlighter
              language={props.language}
              style={hljsStyle}
              showLineNumbers={props.showLineNumbers}
              language={props.language}
            >
              {props.code}
            </SyntaxHighlighter>
          );
        };
      } else {
        node.component = props => {
          const pstyle = prismStyles[node.props.chStyle];
          return (
            <Prism
              language={props.language}
              style={pstyle}
              showLineNumbers={props.showLineNumbers}
              language={props.language}
            >
              {props.code}
            </Prism>
          );
        };
      }
    }
    return node;
  }
};

export default CodeHighlighter;
