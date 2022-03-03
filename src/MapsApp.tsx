import {MapProvider, PlacesProvider} from './context/index';
import { RoutesApp } from './routes/RoutesApp';
import './index.css'

export const MapsApp=()=>{
    return (
        <PlacesProvider>
            <MapProvider>
            <RoutesApp/>
            </MapProvider>
        </PlacesProvider>
    )
}