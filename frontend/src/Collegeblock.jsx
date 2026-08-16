import { useState, useEffect } from 'react';


function CollegeBlock({collegeName, onDelete}) {
    return (
      <div className="college-block">
        <p className="name">{collegeName}</p>
        <p>Hello</p>
        <p>Hello</p>
        <p className="delete" onClick={() => onDelete(collegeName)}>&times;</p>
      </div>  
    );
}

export default CollegeBlock;