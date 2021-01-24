import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';


export const Interaction = (props) => {

    const markdown = `
## Interaction

| Class      | Description |
| ----------- | ----------- |
| **highlight** | highlights the element on hover and makes cursor a pointer ot show it is interactable |

`;
const code = `
~~~xml
<div class="element semi-rounded spaced">normal</div>
<div class="element semi-rounded spaced highlight">highlight</div>
~~~
`

    return (
        <div className="text-left" style={{ marginBottom: '4rem' }}>
            <div className="table">
                <ReactMarkdown source={markdown} plugins={[gfm]} />
            </div>
            <h3>Examples</h3>
            <div className="background outline padding-double">
                <div className="element semi-rounded spaced">normal</div>
                <div className="element semi-rounded spaced highlight">highlight</div>
            </div>
            <div>
            <h3>Code</h3>
            <ReactMarkdown renderers={props.renderers} children={code} />
            </div>
        </div>
    );
}
