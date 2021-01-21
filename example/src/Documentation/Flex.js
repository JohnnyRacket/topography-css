import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';


export const Flex = (props) => {

    const markdown = `
## Flex Helpers
these are classes that are just shorhand utiliy classes for styling

#### Flex helpers (allowing you to build flex layouts faster using classes):

| Class      | Description |
| ----------- | ----------- |
| **flex** |    display: flex; |
| **flex-column** | flex-direction: column; |
| **flex-row** | flex-direction: row; |
| **flex-align-center** | align-Items: center; |
| **flex-justify-center** | justify-content: center; |
| **flex-center** | align-items: center;justify-content: center; |
| **flex-wrap** | flex-wrap: wrap; |
| **flex-fill** | flex: 1; |
`;

const code = `
~~~js
// coming soon...
~~~
`



    return (
        <div className="text-left" style={{marginBottom: '4rem'}}>
            <div className="table">
                <ReactMarkdown source={markdown} plugins={[gfm]} />
            </div>
            <div>
                <h3>Code</h3>
                <ReactMarkdown renderers={props.renderers} children={code} />
            </div>
        </div>
    );
  }
