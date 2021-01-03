import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

export const Theme = (props) => {

    const markdown = `
#### There are 3 main theme concepts in this library:

| Class      | Description |
| ----------- | ----------- |
| **light** | a light theme |
| **dark** | a dark mode theme |
| **accent** | a chosen accent color to make certain things pop, honestly more a modifier than a theme, but it is changable via css vars like a theme |
`;

    return (
        <div className="text-left" style={{marginBottom: '4rem'}}>
            <ReactMarkdown source={markdown} plugins={[gfm]} />
        </div>
    );
  }
