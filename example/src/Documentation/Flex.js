import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

export const Flex = (props) => {

    const markdown = `
### Helpers
these are classes that are just shorhand utiliy classes for styling

#### Flex helpers (allowing you to build flex layouts faster using classes):

| Class      | Description |
| ----------- | ----------- |
| **flex** |    display: flex; |
| **column** | flex-direction: column; |
| **row** | flex-direction: row; |
| **align-center** | align-Items: center; |
| **justify-center** | justify-content: center; |
| **flex-center** | align-items: center;justify-content: center; |
| **flex-wrap** | flex-wrap: wrap; |
| **flex-fill** | flex: 1; |
`;

    return (
        <div className="text-left" style={{marginBottom: '4rem'}}>
            <ReactMarkdown source={markdown} plugins={[gfm]} />
        </div>
    );
  }
