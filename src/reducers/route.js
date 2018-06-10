const initialState = {
    origin: new google.maps.LatLng(41.8507300, -87.6512600),
    destination: new google.maps.LatLng(41.8525800, -87.6514100),
    travelMode: google.maps.TravelMode.DRIVING
};

export default function calcRoute(state = initialState, action) {
    switch (action.type){
        case "CALC_ROUTE":
            return {...state, origin: action.origin, destination: action.destination, travelMode: action.travelMode};
        default:
            return state;
    }
}
