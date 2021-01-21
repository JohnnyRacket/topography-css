import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';


export const Spacing = (props) => {

    const markdown = `
## Spacing Helpers

| Class      | Description |
| ----------- | ----------- |
| **coming soon** | coming soon |

`;

    const code = `
~~~js
// coming soon...
~~~
`

    return (
        <div className="text-left" style={{ marginBottom: '4rem' }}>
            <div className="table">
                <ReactMarkdown source={markdown} plugins={[gfm]} />
            </div>
            <h3>Examples</h3>
            <div className="background outline padding-double">
                <div>coming soon...</div>
            </div>
            <div>
                <h3>Code</h3>
                <ReactMarkdown renderers={props.renderers} children={code} />
            </div>
        </div>


    );
}
