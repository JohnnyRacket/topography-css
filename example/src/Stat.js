export const Stat = (props) => {
    return (
        <div className="padding" style={{display:'flex', flexDirection: 'column'}}>
            <div style={{fontWeight: 'bold'}}>{props.value}</div>
            <div className="note">{props.name}</div>
        </div>
    );
  }
