import logo from './topography-logo.png';

export const Header = (props) => {
    return (
      <div className="element ">
        <div className="container flex row flex-center" style={{justifyContent: "space-between", paddingRight: '1.5rem', paddingLeft: '1.5rem'}}>
          <div className="link margin-none padding-half large title flex row flex-center"><img src={logo} style={{height: '2rem', margin: '.5rem'}}/> <div>topography css</div></div>
          <div className="flex row flex-center">
            <a href="https://github.com/JohnnyRacket/topography-css"><div className="input highlight margin-none padding">Github</div></a>
            <a href="https://www.npmjs.com/package/topography-css"><div className="input highlight margin-none padding">NPM</div></a>
            <button className="input accent semi-rounded " onClick={() => props.toggleTheme()}>Switch Theme</button>
          </div>
        </div>
      </div>
    );
  }
