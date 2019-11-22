import { connect } from "frontity";
import CodeHighlighter from "./CodeHighlighter";

const FrontitySyntaxHighlighter = {
  libraries: {
    html2react: {
      processors: [CodeHighlighter]
    }
  }
};

export default connect(FrontitySyntaxHighlighter);
