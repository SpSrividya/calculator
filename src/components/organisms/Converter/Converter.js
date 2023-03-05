import { useState } from "react";

const Converter = () => {
    const [px, setPx] = useState(16);
    const [rem, setRem] = useState(px/16);

    const updatePx = (val) => {
        setPx(val.target.value)
        setRem(val.target.value/16)
    }
    const updateRem = (val) => {
        setRem(val.target.value)
        setPx(val.target.value * 16)
    }
  return <div>
    <input type="number" value={px} onChange={updatePx}/>
    <input type="number" value={rem} onChange={updateRem}/>
  </div>;
};

export default Converter;
