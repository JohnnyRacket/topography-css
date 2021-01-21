import SyntaxHighlighter from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {a11yLight} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Surface} from './Surface'
import {Theme} from './Theme';
import {Modifiers} from './Modifiers';
import {Elevation} from './Elevation';
import {Interaction} from './Interaction';
import {Shape} from './Shape';
import {Size} from './Size';
import {Layout} from './Layout';
import {Flex} from './Flex';
import {Spacing} from './Spacing';

export const Documentation = (props) => {
    const renderers = {
        code: ({language, value}) => {
            return <SyntaxHighlighter style={props.theme === "dark" ? a11yDark : a11yLight} language={language} children={value} />
        }
    }
    

    return (
        <div>
            <a id="theme">
                <Theme renderers={renderers}/>
            </a>
            <a id="surface" >
                <Surface renderers={renderers}/>
            </a>
            <a id="modifier">
                <Modifiers renderers={renderers}/>
            </a>
            <a id="elevation" >
                <Elevation renderers={renderers}/>
            </a>
            <a id="interaction">
                <Interaction renderers={renderers}/>
            </a>
            <a id="shape">
                <Shape renderers={renderers}/>
            </a>
            <a id="size">
                <Size renderers={renderers}/>
            </a>
            <a id="layout">
                <Layout renderers={renderers}/>
            </a>
            <a id="flex">
                <Flex renderers={renderers}/>
            </a>
            <a id="spacing">
                <Spacing renderers={renderers}/>
            </a>
            
        </div>
    );
  }
