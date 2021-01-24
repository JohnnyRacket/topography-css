import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';


export const Size = (props) => {

    const markdown = `
## Size

| Class      | Description |
| ----------- | ----------- |
| **small** | small font size |
| **medium** | medium font size |
| **large** | large font size |

`;
const code = `
~~~xml
<button class="input accent small semi-rounded">small</button>
<button class="input accent medium semi-rounded">medium</button>
<button class="input accent large semi-rounded">large</button>
~~~
`;
    return (
        <div className="text-left" style={{ marginBottom: '4rem' }}>
            <div className="table">
                <ReactMarkdown source={markdown} plugins={[gfm]} />
            </div>
            <h3>Examples</h3>
            <div className="background outline padding-double">
                <button className="input accent small semi-rounded">small</button>
                <button className="input accent medium semi-rounded">medium</button>
                <button className="input accent large semi-rounded">large</button>
            </div>
            <div>
            <h3>Code</h3>
            <ReactMarkdown renderers={props.renderers} children={code} />
            </div>
        </div>
    );
}
