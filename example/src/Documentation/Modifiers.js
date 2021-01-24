import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

export const Modifiers = (props) => {

    const markdown = `
## Modifiers

| Class      | Description |
| ----------- | ----------- |
| **outline**| adds an outline to denote it |
| **link**| no surface, but bold text that will brighten/contrast when hovered |
`;
const code = `
~~~js
<div class="element margin spaced" style={{ width: '100px', height: '100px' }}>basic element</div>
<div class="element outline margin spaced" style={{ width: '100px', height: '100px' }}> outline element</div>
<div class="element link margin spaced" style={{ width: '100px', height: '100px' }}>link element</div>
~~~
`;

    return (
        <div className="text-left" style={{ marginBottom: '4rem' }}>
            <div className="table">
                <ReactMarkdown source={markdown} plugins={[gfm]} />
            </div>
            <h3>Examples</h3>
            <div className="background outline padding-double flex row flex-wrap">
                <div className="element margin spaced" style={{ width: '100px', height: '100px' }}>basic element</div>
                <div className="element outline margin spaced" style={{ width: '100px', height: '100px' }}> outline element</div>
                <div className="element link margin spaced" style={{ width: '100px', height: '100px' }}>link element</div>
            </div>
            <div>
            <h3>Code</h3>
            <ReactMarkdown renderers={props.renderers} children={code} />
            </div>
        </div>

    );
}
