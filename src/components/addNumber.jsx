/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import useDefaultNumber from "./setNumber";

export default function addNumber() {
  const { number, setNumber } = useDefaultNumber();

  setNumber(number + 1);
}
