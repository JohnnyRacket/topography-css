import {Stat} from './Stat';
import {Author} from './Author';
export const Card = (props) => {
    return (
        <div className="element float-2 highlight semi-rounded spaced margin flex row flex-center flex-wrap" >
            <Stat name="Views" value="113"/>
            <Stat name="Likes" value="36"/>
            <div className="text-left spaced" style={{flex: 1}}>This is an example title of a card</div>
            <Author name="Dude McDude" date="2/2/1969"/>
        </div>
    );
  }
