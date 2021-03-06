import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Markdown = styled(ReactMarkdown)`
  height: 100%;
  padding: 10px 20px;
  overflow: auto;
  line-height: 1.5;
  font-size: 16px;

  ul,
  ol {
    margin: 0 0 20px 18px;
  }

  p {
    line-height: 1.6;
  }

  code:not(.hljs) {
    padding: 2px 4px;
    background-color: #ffe9ae;
  }

  pre {
    margin-bottom: 20px;

    code {
      padding: 15px;
    }
  }

  blockquote {
    margin: 0 0 20px;
    padding: 4px 10px 4px 20px;
    background: #fdf6e3;
    border-left: 6px solid #ffe9ae;
  }

  a {
    text-decoration: underline;
  }
`;

export default Markdown;
