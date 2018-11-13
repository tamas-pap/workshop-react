import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Markdown = styled(ReactMarkdown)`
  height: 100%;
  padding: 10px 20px;
  overflow: auto;
  line-height: 1.5;

  p {
    line-height: 1.6;
  }

  pre {
    margin-bottom: 20px;

    code {
      padding: 15px;
    }
  }
`;

export default Markdown;
