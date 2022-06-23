import React from "react";
import  ReactDOM from "react-dom";
import Cardd from "./Card";
import Usercard from "./Usercard"
const App=()=>{
	return(
		<>
		<Usercard>
<Cardd name="rakhi" work="like"/></Usercard
><Usercard>
<Cardd name="saathk" work="dislike"/></Usercard>

<Usercard><Cardd name="mehak" work="subscribe"/></Usercard>
</>
)
}
ReactDOM.render(
	<App/>,document.querySelector('#root')
)