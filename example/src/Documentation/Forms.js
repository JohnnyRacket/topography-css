import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';


export const Forms = (props) => {

    const markdown = `
## Form Inputs

Examples of buttons, inputs, text areas, selects, and check boxes

| Class      | Description |
| ----------- | ----------- |
| **input** | applies a default stylying to inputs |


`;
const code = `
~~~xml
<button class="input semi-rounded">button</button>
<input class="input semi-rounded" placeholder="text input..."></input>
<textarea class="input outline semi-rounded" placeholder="text area..."></textarea>
<select class="input semi-rounded">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option> 
</select>
<input id="test" type="checkbox" class="input"/>
<label for="test" >Checkbox</label>

<input class="input semi-rounded " disabled value="disabled"></input>
<input class="input semi-rounded error-outline" value="erroneous input"></input>
<input class="input semi-rounded outline" value="outline input"></input>
<input class="input semi-rounded outline contrast" value="outline + contrast"></input>
<button class="input semi-rounded accent" >accent button</button>
~~~
`;
    return (
        <div className="text-left" style={{ marginBottom: '4rem' }}>
            <div className="table">
                <ReactMarkdown source={markdown} plugins={[gfm]} />
            </div>
            <h3>Examples</h3>
            <div className="background outline padding-double">
                <button className="input semi-rounded">button</button>
                <input className="input semi-rounded" placeholder="text input..."></input>
                <textarea className="input outline semi-rounded" placeholder="text area..."></textarea>
                <select className="input semi-rounded">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option> 
                </select>
                <input id="test" type="checkbox" className="input"/>
                <label for="test" >Checkbox</label>
                <br/>
                <input className="input semi-rounded " disabled value="disabled"></input>
                <input className="input semi-rounded error-outline" value="erroneous input"></input>
                <input className="input semi-rounded outline" value="outline input"></input>
                <input className="input semi-rounded outline contrast" value="outline + contrast"></input>
                <button className="input semi-rounded accent" >accent button</button>
            </div>
            <div>
            <h3>Code</h3>
            <ReactMarkdown renderers={props.renderers} children={code} />
            </div>
        </div>
    );
}
