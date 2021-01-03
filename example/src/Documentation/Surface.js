import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

export const Surface = (props) => {

    const markdown = `
#### There are 3 key surface concepts in this library:

| Class      | Description |
| ----------- | ----------- |
| **background** | the background color/surface |
| **input** | something the user will input into, i.e. a text input or a button |
| **element** | a div that is tangible (i.e. visually shows on screen), this will be like a card holding text or anything that needs styling  inherited |
`;

    return (
        <div className="text-left" style={{marginBottom: '4rem'}}>
            <ReactMarkdown source={markdown} plugins={[gfm]} />
        </div>
    );
  }
