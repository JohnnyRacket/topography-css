import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

export const Modifiers = (props) => {

    const markdown = `
## Modifiers
#### Within a given theme there are a few base style modifiers:

| Class      | Description |
| ----------- | ----------- |
| **outline**| adds an outline to denote it |
| **link**| no surface, but bold text that will brighten/contrast when hovered |
`;

    return (
        <div className="text-left" style={{ marginBottom: '4rem' }}>
            <ReactMarkdown source={markdown} plugins={[gfm]} />
            <h2>Examples</h2>
            <div className="background outline padding-double flex row flex-wrap">
                <div className="element margin spaced" style={{ width: '100px', height: '100px' }}>basic element</div>
                <div className="element outline margin spaced" style={{ width: '100px', height: '100px' }}> outline element</div>
                <div className="element link margin spaced" style={{ width: '100px', height: '100px' }}>link element</div>
            </div>
        </div>

    );
}
