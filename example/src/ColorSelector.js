import {GithubPicker} from 'react-color';
import {useState} from 'react';

export const ColorSelector = ({initialColor, name, colors}) => {

    const [color, setColor] = useState(initialColor);
    const [open,setOpen] = useState(false);

    document.documentElement.style.setProperty(`--${name}`,color);
    return (
        <div className="margin-half">
        <div className="flex flex-row flex-align-center" onClick={() => setOpen(prevState => !prevState)}>
            <div className="semi-rounded padding" style={{ backgroundColor: color}} ></div>
            <div className="margin-half">{name}</div>
        </div>
        {open ? <GithubPicker
            color={color}
            onChangeComplete={ (c,e) => {setColor(c.hex);setOpen(prevState => !prevState);} }
            colors={colors ? colors : [
                '#05a3f0', '#581908', '#E2AEDD', '#0C8346',  '#E0C879',  '#9D8DF1',  '#686963',  
                '#0fbcf9', '#983628','#EBCBF4','#329F5B','#D5D887','#B8CDF8','#8AA29E',
            ]}
            width={187}
            /> : ""}
        </div>
    );
  }
