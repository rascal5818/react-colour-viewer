import React from 'react';

function colourFrame(props) {
    return (
        <div className="frame">
            <div className={props.className}></div>
        </div>
    )
}

export default colourFrame;