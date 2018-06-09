import React from "react"
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps'
import styles from './map.css'

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAUEyNoJ4_Qd5D7LvPL1vkog8FdraVqBao&v=3.exp",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} />
)

export default class AppMap extends React.PureComponent {

    render() {
        return (
            <div className={styles.root}>
                <h1>Google Map</h1>
                <div className={styles.map}>
                    <MyMapComponent/>
                </div>
            </div>
        )
    }
}