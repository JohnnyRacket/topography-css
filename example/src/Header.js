export const Header = (props) => {
    return (
      <div className="element ">
        <div className="container flex row flex-center" style={{justifyContent: "space-between", paddingRight: '1.5rem', paddingLeft: '1.5rem'}}>
          <div className="link margin-none padding-half large title">Example Page</div>
          <div className="flex row flex-center">
            <div className="input highlight margin-none padding">Home</div>
            <div className="input highlight margin-none padding">FAQ</div>
            <button className="input accent semi-rounded " onClick={() => props.toggleTheme()}>Switch Theme</button>
          </div>
        </div>
      </div>
    );
  }