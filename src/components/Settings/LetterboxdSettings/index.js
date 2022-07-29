import { useContext } from "react";

import { GlobalContext } from "../../../Context";
import Checkbox from "../../Checkbox";
import { LetterboxdRow } from "./styles";

export default function LetterboxdSettings() {
  const { letterboxd, setLetterboxd } = useContext(GlobalContext);
  function toggle() {
    setLetterboxd(old => {
      const obj = {...old, enabled: !old.enabled};
      localStorage.setItem('letterboxd', JSON.stringify(obj));
      return obj
    });
  }

  return (
    <div>
      <h3 className="animationLeft">Letterboxd</h3>
      <LetterboxdRow className="animationUp">

        <input 
          value={letterboxd.user} 
          onChange={e => setLetterboxd(old => ({...old, user: e.target.value}))}
          onBlur={() => localStorage.setItem('letterboxd', JSON.stringify(letterboxd))}
        />
        <Checkbox checked={letterboxd.enabled} onClick={toggle} />
      </LetterboxdRow>
    </div>
  )
}