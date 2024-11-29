import { AlertButton } from "react-native";

type AlertButtonStyles = NonNullable<AlertButton["style"]>;
export const AlertButtonStyle: Record<AlertButtonStyles, AlertButtonStyles> = {
  default: "default",
  cancel: "cancel",
  destructive: "destructive",
};
