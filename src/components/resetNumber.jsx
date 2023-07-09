/* eslint-disable react-hooks/rules-of-hooks */
import useDefaultNumber from "./setNumber";

export default function resetNumber() {
  const { setNumber } = useDefaultNumber();
  setNumber(0);
}
