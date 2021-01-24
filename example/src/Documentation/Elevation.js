import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';


export const Elevation = (props) => {

const markdown = `
## Elevation

| Class      | Description |
| ----------- | ----------- |
| **elevation-0** | no drop shadow |
| **elevation-1** | smallest drop shadow, gives the illusion of being right on top of the surface its on |
| **elevation-2** | medium drop shadow, more elevated looking |
| **elevation-3** | medium drop shadow, even more elevated looking |
| **elevation-4** | largest, but also lightest, gives illusion of being far off the surface its on |

#### Elevation modifier on hover (hence the verb hover-elevation):

| Class      | Description |
| ----------- | ----------- |
| **hover-elevation-0** | no drop shadow when hoveered |
| **hover-elevation-1** | smallest drop shadow, gives the illusion of being right on top of the surface its on when hovered |
| **hover-elevation-2** | medium drop shadow, more elevated looking when hovered |
| **hover-elevation-3** | medium drop shadow, even more elevated looking when hovered |
| **hover-elevation-4** | largest, but also lightest, gives illusion of being far off the surface its on when hovered |

A common way to combine the above is to have an element have a low/no elevation and a higher hover-elevation
`;

const code = `
~~~xml
<div class="element margin spaced semi-rounded elevation-0" style={{ width: '100px', height: '100px' }}>elevation 0</div>
<div class="element margin spaced semi-rounded elevation-1" style={{ width: '100px', height: '100px' }}>elevation 1</div>
<div class="element margin spaced semi-rounded elevation-2" style={{ width: '100px', height: '100px' }}>elevation 2</div>
<div class="element margin spaced semi-rounded elevation-3" style={{ width: '100px', height: '100px' }}>elevation 3</div>
<div class="element margin spaced semi-rounded elevation-4" style={{ width: '100px', height: '100px' }}>elevation 4</div>

<div class="element margin spaced semi-rounded hover-elevation-0" style={{ width: '100px', height: '100px' }}>hover-elevation 0</div>
<div class="element margin spaced semi-rounded hover-elevation-1" style={{ width: '100px', height: '100px' }}>hover-elevation 1</div>
<div class="element margin spaced semi-rounded hover-elevation-2" style={{ width: '100px', height: '100px' }}>hover-elevation 2</div>
<div class="element margin spaced semi-rounded hover-elevation-3" style={{ width: '100px', height: '100px' }}>hover-elevation 3</div>
<div class="element margin spaced semi-rounded hover-elevation-4" style={{ width: '100px', height: '100px' }}>hover-elevation 4</div>
~~~
`

    return (
        <div className="text-left" style={{marginBottom: '4rem'}}>
            <div className="table">
                <ReactMarkdown source={markdown} plugins={[gfm]} wrapLongLines={true} />
            </div>
            <h3>Examples</h3>
            <div className="background outline padding-double">
                <div className="flex row flex-wrap">
                    <div className="element margin spaced semi-rounded elevation-0" style={{ width: '100px', height: '100px' }}>elevation 0</div>
                    <div className="element margin spaced semi-rounded elevation-1" style={{ width: '100px', height: '100px' }}>elevation 1</div>
                    <div className="element margin spaced semi-rounded elevation-2" style={{ width: '100px', height: '100px' }}>elevation 2</div>
                    <div className="element margin spaced semi-rounded elevation-3" style={{ width: '100px', height: '100px' }}>elevation 3</div>
                    <div className="element margin spaced semi-rounded elevation-4" style={{ width: '100px', height: '100px' }}>elevation 4</div>
                </div>
                <div className="flex row flex-wrap">
                    <div className="element margin spaced semi-rounded hover-elevation-0" style={{ width: '100px', height: '100px' }}>hover-elevation 0</div>
                    <div className="element margin spaced semi-rounded hover-elevation-1" style={{ width: '100px', height: '100px' }}>hover-elevation 1</div>
                    <div className="element margin spaced semi-rounded hover-elevation-2" style={{ width: '100px', height: '100px' }}>hover-elevation 2</div>
                    <div className="element margin spaced semi-rounded hover-elevation-3" style={{ width: '100px', height: '100px' }}>hover-elevation 3</div>
                    <div className="element margin spaced semi-rounded hover-elevation-4" style={{ width: '100px', height: '100px' }}>hover-elevation 4</div>
                </div>
            </div>
            <div>
            <h3>Code</h3>
            <div style={{overflowX: 'hidden', minHeight: 0, minWidth: 0}}>
            <ReactMarkdown renderers={props.renderers} children={code} />
            </div>
            </div>
        </div>
    );
  }
