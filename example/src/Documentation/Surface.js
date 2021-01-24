import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

export const Surface = (props) => {

    const markdown = `
## Surfaces

| Class      | Description |
| ----------- | ----------- |
| **background** | the background color/surface |
| **element** | a div that is tangible (i.e. visually shows on screen), this will be like a card holding text or anything that needs styling  inherited |
| **contrast** | a deep contrasting color, by default true black and true white |
`;
const code = `
~~~xml
<div class="background outline spaced" style={{ width: '120px', height: '120px' }}> background</div>
<div class="element outline spaced" style={{ width: '120px', height: '120px' }}>element</div>
<div class="contrast outline spaced" style={{ width: '120px', height: '120px' }}>contrast</div>
~~~
`;

    return (
        <div className="text-left" style={{ marginBottom: '4rem' }}>
            <div className="table">
                <ReactMarkdown source={markdown} plugins={[gfm]} />
            </div>
            <h3>Examples</h3>
            <div className="background outline padding-double flex row flex-wrap">

                <div className="background outline spaced" style={{ width: '120px', height: '120px' }}> background</div>

                <div className="element outline spaced" style={{ width: '120px', height: '120px' }}>element</div>

                <div className="contrast outline spaced" style={{ width: '120px', height: '120px' }}>contrast</div>
            </div>
            <div>
            <h3>Code</h3>
            <ReactMarkdown renderers={props.renderers} children={code} />
            </div>
        </div>
    );
}
