
export const SortBar = (props) => {
    return (
        <div className="element contrast semi-rounded margin flex row flex-center padding-half" style={{justifyContent: 'space-between'}}>
          <div className="bold" style={{marginLeft: '1rem'}}>Top Trending Stories</div>
            <div>Sort by:
            <select className="input semi-rounded">
              <option>Most Popular</option>
              <option>Most Dank</option>
              <option>Most Cringe</option>
              <option>Most Extra</option>
            </select>
            </div>
          </div>
    );
  }
