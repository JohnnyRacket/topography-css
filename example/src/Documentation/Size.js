import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

export const Size = (props) => {

    const markdown = `
#### Size modifiers (this affects text size, so it will change the size of inputs/buttons/things that contain text):

| Class      | Description |
| ----------- | ----------- |
| **small** |
| **medium** |
| **large** |

`;

    return (
        <div className="text-left" style={{marginBottom: '4rem'}}>
            <ReactMarkdown source={markdown} plugins={[gfm]} />
        </div>
    );
  }
