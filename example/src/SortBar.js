
export const SortBar = (props) => {
    return (
        <div className="element semi-rounded margin flex row flex-center padding-half" style={{justifyContent: 'space-between'}}>
          <div className="bold" style={{marginLeft: '1rem'}}>Documentation</div>
            <div>Jump to:
            <select className="input semi-rounded contrast">
            <option>Theme</option>
              <option>Basics</option>
              <option>Modifiers</option>
              <option>Helpers</option>
            </select>
            </div>
          </div>
    );
  }
