import React from 'react'
import { useEffect} from 'react'
import tw from "tailwind-styled-components";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 
'pk.eyJ1IjoiYW5qb29tIiwiYSI6ImNrd29mMWJ0MDAyYTEyb25xa29oYnR2ZmsifQ.tm1anv_LpJgnkQf72ndf4A';


const Map = (props) => {
    
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [76.271080, 10.850516],
        zoom: 3,
        });
        if(props.pickupCoordinates){
            addToMap(map, props.pickupCoordinates)
        }
       
        if(props.dropoffCoordinates){
            addToMap(map, props.dropoffCoordinates)
        }

        if(props.pickupCoordinates && props.dropoffCoordinates){
            map.fitBounds([
                props.dropoffCoordinates,
                props.pickupCoordinates
            ],{
                padding: 60
            })
        }

        },[props.pickupCoordinates, props.dropoffCoordinates]);

        const addToMap = (map, coordinates) => {
            const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
        }

       

    return (
     <Wrapper id="map">

     </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
    flex-1
`