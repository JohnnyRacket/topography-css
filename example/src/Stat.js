export const Stat = (props) => {
    return (
        <div className="padding flex column">
            <div className="bold">{props.value}</div>
            <div className="note">{props.name}</div>
        </div>
    );
  }
