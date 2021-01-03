import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

export const Basic = (props) => {

    const markdown = `
#### Within a given theme there are a few base style modifiers:

| Class      | Description |
| ----------- | ----------- |
| **accent**| modifier to make something pop by using color |
| **contrast**| a high sontrast surface |
| **outline**| a surface that has the same color as the background but with an outline to denote it |
| **link**| no surface, but bold text that will brighten/contrast when hovered |
`;

    return (
        <div className="text-left" style={{marginBottom: '4rem'}}>
            <ReactMarkdown source={markdown} plugins={[gfm]} />
        </div>
    );
  }
