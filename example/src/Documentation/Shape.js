import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

export const Shape = (props) => {

    const markdown = `
## Shape
#### Shape modifiers (by default everything is square):

| Class      | Description |
| ----------- | ----------- |
| **square** | default, but included class for resetting, or changing via js |
| **semi-rounded** | rounded corners |
| **rounded** | pill-like shape |
| **round** | round, as in a circle, as long as your height and width are set the same |

`;

    return (
        <div className="text-left" style={{marginBottom: '4rem'}}>
            <ReactMarkdown source={markdown} plugins={[gfm]} />
            <h2>Examples</h2>
            <div className="background outline padding-double">
                <button className="input accent">square</button>
                <button className="input accent semi-rounded">semi-rounded</button>
                <button className="input accent rounded">rounded</button>
                <button className="input accent round" style={{width: '5rem', height: '5rem'}}>round</button>
            </div>
        </div>
    );
  }
