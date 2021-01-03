import {Surface} from './Surface'
import {Theme} from './Theme';
import {Basic} from './Basic';
import {Elevation} from './Elevation';
import {Interaction} from './Interaction';
import {Shape} from './Shape';
import {Size} from './Size';
import {Flex} from './Flex';

export const Documentation = (props) => {

    return (
        <div>
            <a id="surface" >
                <Surface/>
            </a>
            <a id="theme">
                <Theme/>
            </a>
            <a id="basic">
                <Basic/>
            </a>
            <a id="elevation">
                <Elevation/>
            </a>
            <a id="interaction">
                <Interaction/>
            </a>
            <a id="shape">
                <Shape/>
            </a>
            <a id="size">
                <Size/>
            </a>
            <a id="flex">
                <Flex/>
            </a>
            
        </div>
    );
  }
