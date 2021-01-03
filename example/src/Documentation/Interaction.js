import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

export const Interaction = (props) => {

    const markdown = `
#### Interaction modifiers:

| Class      | Description |
| ----------- | ----------- |
| **highlight** | highlights the element on hover and makes cursor a pointer ot show it is interactable |

`;

    return (
        <div className="text-left" style={{marginBottom: '4rem'}}>
            <ReactMarkdown source={markdown} plugins={[gfm]} />
        </div>
    );
  }
