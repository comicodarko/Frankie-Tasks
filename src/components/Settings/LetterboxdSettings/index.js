import { useContext } from "react";

import { GlobalContext } from "../../../Context";
import { LetterboxdRow } from "./styles";

export default function LetterboxdSettings() {
  const { letterboxd, setLetterboxd } = useContext(GlobalContext);
  
  return (
    <div>
      <h3 className="animationLeft">Letterboxd</h3>
      <LetterboxdRow className="animationUp">

        <input 
          value={letterboxd.user} 
          onChange={e => setLetterboxd(old => ({...old, user: e.target.value}))}
          onBlur={() => localStorage.setItem('letterboxd', JSON.stringify(letterboxd))}
        />

        <div className="pretty p-default p-curve p-smooth">

          <input type="checkbox" 
            readOnly 
            checked={letterboxd.enabled} 
            onClick={() => {
              setLetterboxd(old => {
                const obj = {...old, enabled: !old.enabled};
                localStorage.setItem('letterboxd', JSON.stringify(obj));
                return obj
              });
            }} 
          />

          <div className="state p-info">
            <i className="icon mdi mdi-check"></i>
            <label></label>
          </div>
        </div>

      </LetterboxdRow>
    </div>
  )
}