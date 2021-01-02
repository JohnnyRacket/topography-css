import {Stat} from './Stat';
import {Author} from './Author';
import './Card.css';

export const Card = (props) => {
    return (
        <div className="element float-2 highlight semi-rounded spaced margin flex row flex-center flex-wrap" >
            <div className="stats flex row">
                <Stat name="Views" value="113"/>
                <Stat name="Likes" value="36"/>
            </div>
            <div className="text-left spaced flex-fill" >This is an example title of a card</div>
            <Author name="Dude McDude" date="2/2/1969"/>
        </div>
    );
  }
