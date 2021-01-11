import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

export const Size = (props) => {

    const markdown = `
## Size
#### Size modifiers (this affects text size, so it will change the size of inputs/buttons/things that contain text):

| Class      | Description |
| ----------- | ----------- |
| **small** | small font size |
| **medium** | medium font size |
| **large** | large font size |

`;

    return (
        <div className="text-left" style={{marginBottom: '4rem'}}>
            <ReactMarkdown source={markdown} plugins={[gfm]} />
            <h2>Examples</h2>
            <div className="background outline padding-double">
                <button className="input accent small semi-rounded">small</button>
                <button className="input accent medium semi-rounded">medium</button>
                <button className="input accent large semi-rounded">large</button>
            </div>
        </div>
    );
  }
