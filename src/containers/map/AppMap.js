import React from "react"
import Destination from "../destination/Destination"
import routeAction from '../../actions/calcRoute'
import { compose, withProps, lifecycle } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'
import styles from './map.css'

import { connect } from "react-redux"

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAUEyNoJ4_Qd5D7LvPL1vkog8FdraVqBao&v=3.exp",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentWillReceiveProps() {
            const DirectionsService = new google.maps.DirectionsService();

            DirectionsService.route({
                origin: this.props.origin,
                destination: this.props.destination,
                travelMode: this.props.travelMode,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result,
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });
        }
    })
)((props) =>
    <GoogleMap defaultZoom={8} defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}>{props.directions && <DirectionsRenderer directions={props.directions} />}</GoogleMap>
);

class AppMap extends React.PureComponent {

    render() {
        return (
            <div className={styles.root}>
                <h1>Google Map</h1>
                <Destination calcRoute={this.props.routeAction}/>
                <div className={styles.map}>
                    <MyMapComponent/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        origin: state.calcRoute.origin,
        destination: state.calcRoute.destination,
        travelMode: state.calcRoute.travelMode
    }
}

function mapDispatchToProps(dispatch) {
    return {
        routeAction: (origin, destination, travelMode) => {
            dispatch(routeAction(origin, destination, travelMode))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMap);