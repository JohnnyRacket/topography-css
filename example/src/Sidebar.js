import {useState} from 'react';
import './Sidebar.css';

export const Sidebar = (props) => {

    const [results, setResults] = useState([]);
    const [search, setSearch] = useState("");

    const sections =  [
        {
            "name": "Surfaces",
            "href": "surface",
            "text": `#### There are 3 key surface concepts in this library:
            | Class      | Description |
            | ----------- | ----------- |
            | **background** | the background color/surface |
            | **input** | something the user will input into, i.e. a text input or a button |
            | **element** | a div that is tangible (i.e. visually shows on screen), this will be like a card holding text or anything that needs styling  inherited |`
        },
        {
            "name": "Themes",
            "href": "theme",
            "text": `
            #### There are 3 main theme concepts in this library:
            
            | Class      | Description |
            | ----------- | ----------- |
            | **light** | a light theme |
            | **dark** | a dark mode theme |
            | **accent** | a chosen accent color to make certain things pop, honestly more a modifier than a theme, but it is changable via css vars like a theme |
            `
        },
        {
            "name": "Basic Modifiers",
            "href": "basic",
            "text":`
            #### Within a given theme there are a few base style modifiers:
            
            | Class      | Description |
            | ----------- | ----------- |
            | **accent**| modifier to make something pop by using color |
            | **contrast**| a high sontrast surface |
            | **outline**| a surface that has the same color as the background but with an outline to denote it |
            | **link**| no surface, but bold text that will brighten/contrast when hovered |
            `
        },
        {
            "name": "Interaction Modifiers",
            "href": "interaction",
            "text":`
            #### Interaction modifiers:
            
            | Class      | Description |
            | ----------- | ----------- |
            | **highlight** | highlights the element on hover and makes cursor a pointer ot show it is interactable |
            
            `
        },
        {
            "name": "Elevation Modifiers",
            "href": "elevation",
            "text":`
            #### Elevation modifiers (drop shadow):
            
            | Class      | Description |
            | ----------- | ----------- |
            | **elevation-0** | no drop shadow |
            | **elevation-1** | smallest drop shadow, gives the illusion of being right on top of the surface its on |
            | **elevation-2** | medium drop shadow, more elevated looking |
            | **elevation-3** | medium drop shadow, even more elevated looking |
            | **elevation-4** | largest, but also lightest, gives illusion of being far off the surface its on |
            
            #### Elevation modifier on hover (hence the verb float):
            
            | Class      | Description |
            | ----------- | ----------- |
            | **float-0** | no drop shadow when hoveered |
            | **float-1** | smallest drop shadow, gives the illusion of being right on top of the surface its on when hovered |
            | **float-2** | medium drop shadow, more elevated looking when hovered |
            | **float-3** | medium drop shadow, even more elevated looking when hovered |
            | **float-4** | largest, but also lightest, gives illusion of being far off the surface its on when hovered |
            
            A common way to combine the above is to have an element have a low/no elevation and a higher float
            `
        },
        {
            "name": "Shape Modifiers",
            "href": "shape",
            "text":`
            #### Shape modifiers (by default everything is square):
            
            | Class      | Description |
            | ----------- | ----------- |
            | **square** | default, but included class for resetting, or changing via js |
            | **semi-rounded** | rounded corners |
            | **rounded** | pill-like shape |
            | **round** | round, as in a circle, as long as your height and width are set the same |
            
            `
        },
        {
            "name": "Size Modifiers",
            "href": "size",
            "text":`
            #### Size modifiers (this affects text size, so it will change the size of inputs/buttons/things that contain text):
            
            | Class      | Description |
            | ----------- | ----------- |
            | **small** |
            | **medium** |
            | **large** |
            
            `
        },
        {"name": "Layout",
        "href": "layout",
        "text": `## Layout
        #### Layout modifiers help to lay out pages:
        
        | Class      | Description |
        | ----------- | ----------- |
        | **container** | a standard with centering container i.e. like these docs |
        | **line-length** | a set reasonable size for inputs you dont want max width |
        `
        },
        {
            "name": "Flex Helpers",
            "href": "flex",
            "text":`
            ### Helpers
            these are classes that are just shorhand utiliy classes for styling
            
            #### Flex helpers (allowing you to build flex layouts faster using classes):
            
            | Class      | Description |
            | ----------- | ----------- |
            | **flex** |    display: flex; |
            | **column** | flex-direction: column; |
            | **row** | flex-direction: row; |
            | **align-center** | align-Items: center; |
            | **justify-center** | justify-content: center; |
            | **flex-center** | align-items: center;justify-content: center; |
            | **flex-wrap** | flex-wrap: wrap; |
            | **flex-fill** | flex: 1; |
            `
        },
        {
            "name": "Spacing Helpers",
            "href": "spacing",
            "text":`coming soon...
            `
        },
        
        
    ]

    function filterByValue(array, string) {
        return array.filter(o =>
            Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
    }
    
    return (
        <div className="element semi-rounded spaced margin text-left" style={{width: '300px', position: 'fixed'}}>
        <h3>Search</h3>
        <div className="flex row flex-center">
            <input value={search} className="input rounded fill-width margin-none contrast" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} onKeyDown={e => e.key === 'Enter' ? setResults(filterByValue(sections, search)) : null}></input>
            <button style={{marginRight: 0}} className="input rounded accent text-center" onClick={() => {setResults(filterByValue(sections, search)); console.log(filterByValue(sections, search))}}>Go</button>  
        </div>
        <h3>Results</h3>
        {
        results.length === 0 
        ?
        <div className="note margin-half">Search to find results...</div>
        :
        results.map(section => <a href={`#${section.href}`}><div className="link padding-half" >{section.name}</div></a>)
        }
        <h3>Sections</h3>
        {sections.map(section => <a href={`#${section.href}`}><div className="link padding-half" >{section.name}</div></a>)}

        </div>
    );
  }
