import React from 'react';
import Blueprint from './Blueprint.js';


const List = () => {

  return (
    <div class="blueprints-container">
      <div class="row">
        <div class="col-4">
          <Blueprint num={1}/>
        </div>
        <div class="col-4">
          <Blueprint num={2}/>
        </div>
        <div class="col-4">
          <Blueprint num={3}/>
        </div>
      </div>
    </div>
  )
}

export default List;
