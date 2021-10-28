import React from 'react'

function App() {

    const [theme, switchTheme] = React.useState('black')

    const handleClick = (switchTo) => {
        switchTheme(switchTo)
    }

    return (
        <div className={`container ${theme}`}>

            <h1>The theme is <SayTheme themeName={theme} /></h1>
            
            <div>
                <input type="button" className="btn black" onClick={() => handleClick('black')}/>
            <input type="button" className="btn blue"  onClick={() => handleClick('blue')}/>
            <input type="button" className="btn yellow" onClick={() => handleClick('yellow')}/>
            </div>
        </div>
    )
}

export default App

function SayTheme (props) {
    return <span>{props.themeName}</span>
}