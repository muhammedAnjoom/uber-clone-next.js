import React from 'react'
import {useEffect,useState} from 'react'
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from './components/RideSelector';
import router, {useRouter} from 'next/router'
import Link from 'next/link'

const Confirm = () => {
    const router = useRouter();
    const [pickupCoordinates, setPickupCoordinates] = useState();
    const [dropoffCoordinates, setDropoffCoordinates] = useState();
    
    const {pickup, dropoff} = router.query
    // console.log("pickup" ,pickup);
    // console.log("dropoff", dropoff);

        const getPickupCoordinates = (pickup) =>{
            
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

        const getDropoffCooradinates = (dropoff) =>{
           
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
            getPickupCoordinates(pickup);
            getDropoffCooradinates(dropoff);
        },[pickup, dropoff])

    return (
       <Wrapper>
           {/* Map Container */}
           <ButtonContainer>
               <Link href="/search">
                   <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
               </Link>
            </ButtonContainer>
           <Map 
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
           {/* Bottom Container */}
           <RideContainer>
                {/* Ride selector  */}
                <RideSelector />
                {/* confirm Button  */}
                <ConfirmContainer>
                    <ConfirmButton>
                        confirm UberX
                    </ConfirmButton>
                </ConfirmContainer>
           </RideContainer>
       </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

const ConfirmContainer = tw.div`
border-t-2
`
const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl 
`
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white
`
const BackButton = tw.img`
h-full object-contain
`