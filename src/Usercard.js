import React from "react";
const Usercard=(prop)=>{
	console.log(prop);

	return(
		<div class="ui cards">

		 <div class="card">
    <div class="content">
      <div class="header">{prop.children}</div>
      <div class="description">
        Elliot Fu is a film-maker from New York.
      </div>
    </div>
    <div class="ui bottom attached button">
      <i class="add icon"></i>
      Add friend
    </div>
	</div>
	</div>
	)
}
export  default Usercard;