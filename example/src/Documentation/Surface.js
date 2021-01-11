import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

export const Surface = (props) => {

    const markdown = `
## Surfaces
#### There are 3 key surface concepts in this library:

| Class      | Description |
| ----------- | ----------- |
| **background** | the background color/surface |
| **element** | a div that is tangible (i.e. visually shows on screen), this will be like a card holding text or anything that needs styling  inherited |
| **contrast** | a deep contrasting color, by default true black and true white |
`;

    return (
        <div className="text-left" style={{marginBottom: '4rem'}}>
            <ReactMarkdown source={markdown} plugins={[gfm]} />
            <h2>Examples</h2>
            <div className="background outline padding-double">
                background
                <div className="background outline margin" style={{width: '100px', height: '100px'}}></div>
                element
                <div className="element outline margin" style={{width: '100px', height: '100px'}}></div>
                contrast
                <div className="contrast outline margin" style={{width: '100px', height: '100px'}}></div>
            </div>
        </div>
    );
  }
