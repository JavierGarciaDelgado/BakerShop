import {
    withScriptjs,
    GoogleMap,
    withGoogleMap,
    Marker
  } from "react-google-maps";
  
  const ApiGoogle = (props) =>{
      return (
        <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 40.155642,  lng: -3.627987 }}
      >
          <Marker
        position={{ lat: 40.155642,  lng: -3.627987 }}
      />
      </GoogleMap>
      )
      };
  export default withScriptjs(
      withGoogleMap(
          ApiGoogle
      )
  )
  