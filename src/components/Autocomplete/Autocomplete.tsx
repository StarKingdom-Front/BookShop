import React from 'react'
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  import useOnclickOutside from "react-cool-onclickoutside";

export default function Autocomplete() {

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
      } = usePlacesAutocomplete({
        initOnMount: false,
        debounce: 300,
      });
      const ref = useOnclickOutside(() => {
        clearSuggestions();
      });
    
      const handleInput = (e) => {
        setValue(e.target.value);
      };
    
      const handleSelect =
        ({ description }) =>
        () => {
          setValue(description, false);
          clearSuggestions();
    
        //   // Get latitude and longitude via utility functions
        //   getGeocode({ address: description }).then((results) => {
        //     const { lat, lng } = getLatLng(results[0]);
        //     console.log("📍 Coordinates: ", { lat, lng });
        //   });
        };
    
      const renderSuggestions = () =>
        data.map((suggestion) => {
          const {
            place_id,
            structured_formatting: { main_text, secondary_text },
          } = suggestion;
    
          return (
            <li key={place_id} onClick={handleSelect(suggestion)}>
              <strong>{main_text}</strong> <small>{secondary_text}</small>
            </li>
          );
        });

  return (
    <div>
        <input type="text" ref={ref}
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Where are you going?"
        />
        {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  )
}
