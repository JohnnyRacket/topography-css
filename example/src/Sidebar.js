import './Sidebar.css';

export const Sidebar = (props) => {
    return (
        <div className="element semi-rounded spaced margin contrast text-left" style={{width: '300px', position: 'fixed'}}>
        <h3>Search</h3>
        <div className="flex row flex-center">
            <input className="input rounded fill-width margin-none" Placeholder="Search..."></input>
            <button style={{marginRight: 0}} className="input rounded accent text-center">Go</button>  
        </div>
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ultrices augue. Suspendisse sit amet eros justo. Praesent pharetra, augue ac vehicula accumsan, ante sem rutrum magna, sed faucibus nibh ipsum ac sem. Mauris purus arcu, congue vel imperdiet at, consequat sit amet justo. Suspendisse a lacus lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc nec lacus ut neque lacinia cursus et at eros. Cras sollicitudin ante auctor velit rhoncus, nec porttitor libero aliquam. Cras id dui vitae lorem lobortis euismod non id lorem. Proin ultricies est fringilla diam suscipit ullamcorper.</p>
        <h3>Rules</h3>
        <ul>
            <li>No yes</li>
            <li>But please do not</li>
            <li>For the children's sake</li>
        </ul>
        </div>
    );
  }
