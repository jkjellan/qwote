import React from "react";

export default class Layout extends React.Component{
  render(){
    return(
      <div>
        <div class="container-fluid text-center">
    			<div class = "row">
      			<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
      			</div>
      			<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
      				<input class = "form-control"></input>
      			</div>
      			<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
      			</div>
    			</div>
    		</div>
      </div>
    );
  }
}
