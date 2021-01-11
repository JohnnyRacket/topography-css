import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

export const Elevation = (props) => {

    const markdown = `
## Elevation
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
            <h2>Examples</h2>
            <div className="background outline padding-double">
                <div className="flex row">
                    <div className="element margin spaced semi-rounded elevation-0" style={{ width: '100px', height: '100px' }}>elevation 0</div>
                    <div className="element margin spaced semi-rounded elevation-1" style={{ width: '100px', height: '100px' }}>elevation 1</div>
                    <div className="element margin spaced semi-rounded elevation-2" style={{ width: '100px', height: '100px' }}>elevation 2</div>
                    <div className="element margin spaced semi-rounded elevation-3" style={{ width: '100px', height: '100px' }}>elevation 3</div>
                    <div className="element margin spaced semi-rounded elevation-4" style={{ width: '100px', height: '100px' }}>elevation 4</div>
                </div>
                <div className="flex row">
                    <div className="element margin spaced semi-rounded float-0" style={{ width: '100px', height: '100px' }}>float 0</div>
                    <div className="element margin spaced semi-rounded float-1" style={{ width: '100px', height: '100px' }}>float 1</div>
                    <div className="element margin spaced semi-rounded float-2" style={{ width: '100px', height: '100px' }}>float 2</div>
                    <div className="element margin spaced semi-rounded float-3" style={{ width: '100px', height: '100px' }}>float 3</div>
                    <div className="element margin spaced semi-rounded float-4" style={{ width: '100px', height: '100px' }}>float 4</div>
                </div>
            </div>
        </div>
    );
  }
