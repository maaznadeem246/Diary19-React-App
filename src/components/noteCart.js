import React, { Component } from 'react';


const NoteCard = (props) =>
    (
        <div className="jumbotron">
            <div>{props.children}</div>
        </div>
    );



export default NoteCard;