import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';


export const Layout = (props) => {

    const markdown = `
## Layout

| Class      | Description |
| ----------- | ----------- |
| **container** | a standard with centering container i.e. like these docs |
| **line-length** | a set reasonable size for inputs you dont want max width |

`;

const code = `
~~~xml
<input class="input semi-rounded line-length" placeholder="line-length input"></input>
<input class="input semi-rounded fill-width" placeholder="fill-width input"></input>
~~~
`

    return (
        <div className="text-left" style={{ marginBottom: '4rem' }}>
            <div className="table">
                <ReactMarkdown source={markdown} plugins={[gfm]} />
            </div>
            <h3>Examples</h3>
            <div className="background outline padding-double">
                <input className="input semi-rounded line-length" placeholder="line-length input"></input>
                <input className="input semi-rounded fill-width" placeholder="fill-width input"></input>

                <div className="note spaced">container examples cant be appreciably displayed here, it is what centers these docs, and keeps them from exceeding a comfortable reading width.</div>
            </div>
            <div>
            <h3>Code</h3>
            <ReactMarkdown renderers={props.renderers} children={code} />
            </div>
        </div>
    );
}
