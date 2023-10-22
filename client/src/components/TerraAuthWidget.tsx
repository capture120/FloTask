import axios from "axios";
import { ConnectToTerraButton } from "@tryterra/terra-ui";

export default function TerraAuthWidget() {
  return (
    <ConnectToTerraButton
      onClick={async () => {
        const url = (
          await axios.get("http://localhost:3000/api/generateWidgetSession")
        ).data.url;
        window.location = url;
      }}
    />
  );
}
