import { scan } from "react-scan";

if (process.env.NODE_ENV === "development") {
  scan({ enabled: true });
}
