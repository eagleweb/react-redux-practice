import React from "react";

export default class Destination extends React.Component {
    constructor(props) {
        super(props);
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onBtnClick() {
        return this.props.calcRoute(
                 new google.maps.LatLng(41.8507300, -87.6512600),
                 new google.maps.LatLng(41.8525800, -87.6514100),
                 google.maps.TravelMode.DRIVING)
    }

    render() {
        return (
            <div>
                {/*<label htmlFor="origin">Origin</label>*/}
                {/*<input type="text" name="origin" />*/}
                {/*<label htmlFor="distination">Distination</label>*/}
                {/*<input type="text" name="distination" />*/}
                <button onClick={this.onBtnClick}>Route</button>
            </div>
        );
    }
}