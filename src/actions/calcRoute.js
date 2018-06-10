export default function routeAction(origin, destination, travelMode) {
    return {
        type: "CALC_ROUTE",
        origin: origin,
        destination: destination,
        travelMode: travelMode
    }
}