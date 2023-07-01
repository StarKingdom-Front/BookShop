import React, { useState } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';

import {defaultTheme} from './Theme'


const API_KEY_MAP = process.env.REACT_APP_API_KEY_MAP
console.log(API_KEY_MAP)

const containerStyle = {
  width: '100%',
  height: '400px'
};



const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: true,
  fullscreenControl: false,
  styles: defaultTheme,
}

export default function Map({center} : any) {

  const mapRef = React.useRef(undefined)

  const locations = [
    { lat: 52.425039638689526, lng: 30.96122102539123 },
    { lat: 52.43462255921098, lng: 30.977666741641563 },
    { lat: 52.426818070043204, lng: 30.986335173359727 },
  ];

  const onLoad = React.useCallback(function callback(map: any) {

    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach(n => bounds.extend(n));
    map.fitBounds(bounds);
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    mapRef.current = undefined
  }, [])


  return (
    <div className='_container'>
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        {center.map((i: any) => (<Marker position={i}/>))}
      </GoogleMap>
    </div>
  )
}
