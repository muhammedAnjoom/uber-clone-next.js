import React from 'react'
import {useEffect,useState} from 'react'
import tw from "tailwind-styled-components";
import Map from "./components/Map";

const Confirm = () => {
    const [pickupCoordinates, setPickupCoordinates] = useState();
    const [dropoffCoordinates, setDropoffCoordinates] = useState();


        const getPickupCoordinates = () =>{
            const pickup = "kozhikode";
            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
                new URLSearchParams({
                    access_token: "pk.eyJ1IjoiYW5qb29tIiwiYSI6ImNrd29mMWJ0MDAyYTEyb25xa29oYnR2ZmsifQ.tm1anv_LpJgnkQf72ndf4A",
                    limit: 1
                })
            )
            .then(response => response.json())
            .then(data => {
                
                setPickupCoordinates(data.features[0].center)
            })
        }

        const getDropoffCooradinates = () =>{
            const dropoff = "Kollam";
            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
                new URLSearchParams({
                    access_token: "pk.eyJ1IjoiYW5qb29tIiwiYSI6ImNrd29mMWJ0MDAyYTEyb25xa29oYnR2ZmsifQ.tm1anv_LpJgnkQf72ndf4A",
                    limit: 1
                })
            )
            .then(response => response.json())
            .then(data => {
                setDropoffCoordinates(data.features[0].center)
            })
        }

        useEffect(()=>{
            getPickupCoordinates();
            getDropoffCooradinates();
        },[])

    return (
       <Wrapper>
           {/* Map Container */}
           <Map 
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
           {/* Bottom Container */}
           <RideContainer>
                {/* Ride selector  */}
                {/* confirm Button  */}
           </RideContainer>
       </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`
const RideContainer = tw.div`
flex-1
`