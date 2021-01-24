import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

export const Shape = (props) => {

    const markdown = `
## Shape

| Class      | Description |
| ----------- | ----------- |
| **square** | default, but included class for resetting, or changing via js |
| **semi-rounded** | rounded corners |
| **rounded** | pill-like shape |
| **round** | round, as in a circle, as long as your height and width are set the same |

`;
const code = `
~~~js
<button class="input accent">square</button>
<button class="input accent semi-rounded">semi-rounded</button>
<button class="input accent rounded">rounded</button>
<button class="input accent round" style={{ width: '5rem', height: '5rem' }}>round</button>
~~~
`;
    return (
        <div className="text-left" style={{ marginBottom: '4rem' }}>
            <div className="table">
                <ReactMarkdown source={markdown} plugins={[gfm]} />
            </div>
            <h3>Examples</h3>
            <div className="background outline padding-double">
                <button className="input accent">square</button>
                <button className="input accent semi-rounded">semi-rounded</button>
                <button className="input accent rounded">rounded</button>
                <button className="input accent round" style={{ width: '5rem', height: '5rem' }}>round</button>
            </div>
            <div>
            <h3>Code</h3>
            <ReactMarkdown renderers={props.renderers} children={code} />
            </div>
        </div>
    );
}
