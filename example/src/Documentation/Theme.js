import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';


export const Theme = (props) => {

    const markdown = `
## Themes

| Class      | Description |
| ----------- | ----------- |
| **light** | a light theme |
| **dark** | a dark mode theme |
| **accent** | a chosen accent color to make certain things pop, honestly more a modifier than a theme, but it is changable via css vars like a theme |
`;

    const code = `
~~~xml
<button class="input light">light</button>
<button class="input dark">dark</button>
<button class="input accent">accent</button>
~~~
`

    return (
        <div className="text-left" style={{ marginBottom: '4rem' }}>
            <div className="table">
                <ReactMarkdown source={markdown} plugins={[gfm]} />
            </div>
            <h3>Examples</h3>
            <div className="background outline padding-double">
                <button className="input light">light</button>
                <button className="input dark">dark</button>
                <button className="input accent">accent</button>
            </div>
            <div>
                <h3>Code</h3>
                <ReactMarkdown renderers={props.renderers} children={code} />
            </div>
        </div>


    );
}
