/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const useDefaultNumber = () => {
  const [number, setNumber] = useState(0);

  return { number, setNumber };
};

export default useDefaultNumber;
