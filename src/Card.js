import React from "react";
import { Card } from "react-bootstrap";
const Cardd=(prop)=>{
  console.log(prop);
	return(
<div class="ui card">
  <div class="content">
    <i class="right floated like icon"></i>
    <i class="right floated star icon"></i>
    <div class="header">{prop.name}</div>
    <div class="description">
      <p></p>
    </div>
  </div>
  <div class="extra content">
    <span class="left floated like">
      <i class="like icon"></i>
      {prop.work}
    </span>
    <span class="right floated star">
      <i class="star icon"></i>
      Favorite
    </span>
  </div>
</div>)}
export default Cardd;