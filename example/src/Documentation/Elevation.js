import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

export const Elevation = (props) => {

    const markdown = `
#### Elevation modifiers (drop shadow):

| Class      | Description |
| ----------- | ----------- |
| **elevation-0** | no drop shadow |
| **elevation-1** | smallest drop shadow, gives the illusion of being right on top of the surface its on |
| **elevation-2** | medium drop shadow, more elevated looking |
| **elevation-3** | medium drop shadow, even more elevated looking |
| **elevation-4** | largest, but also lightest, gives illusion of being far off the surface its on |

#### Elevation modifier on hover (hence the verb float):

| Class      | Description |
| ----------- | ----------- |
| **float-0** | no drop shadow when hoveered |
| **float-1** | smallest drop shadow, gives the illusion of being right on top of the surface its on when hovered |
| **float-2** | medium drop shadow, more elevated looking when hovered |
| **float-3** | medium drop shadow, even more elevated looking when hovered |
| **float-4** | largest, but also lightest, gives illusion of being far off the surface its on when hovered |

A common way to combine the above is to have an element have a low/no elevation and a higher float
`;

    return (
        <div className="text-left" style={{marginBottom: '4rem'}}>
            <ReactMarkdown source={markdown} plugins={[gfm]} />
        </div>
    );
  }
