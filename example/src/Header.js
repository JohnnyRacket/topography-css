import logo from './topography-logo.png';
import './Header.css';
export const Header = (props) => {
    return (
      <div className="element ">
        <div className="container flex row flex-center" style={{justifyContent: "space-between", paddingRight: '1.5rem', paddingLeft: '1.5rem'}}>
          <div className="link margin-none padding-half large title flex row flex-center"><img src={logo} style={{height: '2rem', marginRight: '.5rem'}}/> <div>topography css</div></div>
          <div className="flex row flex-center">
            <a className="link-out" href="https://github.com/JohnnyRacket/topography-css"><div className="input highlight margin-none padding">Github</div></a>
            <a className="link-out" href="https://www.npmjs.com/package/topography-css"><div className="input highlight margin-none padding">NPM</div></a>
            <button className="input accent semi-rounded " onClick={() => props.toggleTheme()}>Switch Theme</button>
          </div>
        </div>
      </div>
    );
  }
