export const Author = (props) => {
    return (
        <div className="padding-helf flex row flex-center author" >
            <div className="author-image contrast round" style={{width: '4rem', height: '4rem'}}></div>
            <div className="flex column center margin-half">
            <div className="note ">{props.name}</div>
            <div className="note ">{props.date}</div>
            </div>
        </div>
    );
  }
