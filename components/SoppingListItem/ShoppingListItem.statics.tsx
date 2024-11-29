import { AlertButtonStyle } from "../../utility/types/natives";
export const deleteAlertButtons = [
  {
    text: "OK",
    onPress: () => console.log("Annnnd it's gone !"),
    style: AlertButtonStyle.destructive,
  },
  {
    text: "Hell no!",
    onPress: () => console.log("Pheeuuu... It was close!"),
    style: AlertButtonStyle.cancel,
  },
];
