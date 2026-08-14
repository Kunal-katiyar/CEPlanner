import { useState, useEffect } from 'react';


function CollegeBlock(details) {
    return (
      <div className="college-block">
        <p className="name">{details.name}</p>
        <p>Hello</p>
        <p>Hello</p>
        <p className="delete">&times;</p>
      </div>  
    );
}

export default CollegeBlock;