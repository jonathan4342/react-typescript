// / ?--->opcional
// la interface es el como va a lucir mi objeto
// estado:informacion que se guarda en memoria 

import { useEffect, useReducer } from "react"
import { PlacesContext } from "./PlacesContext"
import { placesReducer } from "./placesReducer"
import { getUserLocation } from '../../helpers/index';

// contexto: es lo que se va a mostar a los componentes 
export interface PlacesState{
    isLoading:boolean;
    userLocation?:[number,number],
}
interface Props {
    children: JSX.Element | JSX.Element[]
}
const INITIAL_STATE:PlacesState={
    isLoading:true,
    userLocation:undefined
}
export const PlacesProvider = ({children}:Props) => {

    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE, )

    useEffect(()=>{
        getUserLocation()
        .then(lngLat=> dispatch({type:'setUserLocation', payload:lngLat}))
    },[])
    return (
        <PlacesContext.Provider value={{
            ...state,
        }}>
            {children}
        </PlacesContext.Provider>
    )
}
