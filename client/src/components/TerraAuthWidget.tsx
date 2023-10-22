import Terra from "terra-api";
import axios from "axios";
import { useState } from "react";
import { ConnectToTerraButton } from "@tryterra/terra-ui";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "native-base";

// export default function TerraAuthWidget() {
//     return (
//         <SafeAreaView>
//             <View>
//                 <Text>hello</Text>
//             </View>
//         </SafeAreaView>
//     )
// }

export default function TerraAuthWidget() {
  const [terraURL, setTerraURL] = useState("");

  const authenticateWearable = async () => {
    const authPost = async () => {
      const terra = new Terra(
        process.env.TERRA_DEV_ID ?? "",
        process.env.TERRA_API_KEY ?? "",
        process.env.TERRA_WEBHOOK_SECRET ?? ""
      );
      // this is the info retrieved from terra.ts
      const resp = await terra.generateWidgetSession({
        referenceID: "HelloHarvard",
        language: "en",
        authSuccessRedirectUrl: "http://localhost:3000",
        authFailureRedirectUrl: "http://localhost:3000",
      });
      return resp;
    };
    authPost()
      .then((resp) => {
        console.log(JSON.stringify(resp.url));
        setTerraURL(resp.url);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ConnectToTerraButton
      onClick={async () => {
        await authenticateWearable();
        console.log(terraURL);
        window.location = terraURL as unknown as Location;
      }}
    />
  );
}

// import { NextRequest, NextResponse } from "next/server";
// import Terra from "terra-api";

// const terra = new Terra(process.env.TERRA_DEV_ID ?? "", process.env.TERRA_API_KEY ?? "", process.env.TERRA_WEBHOOK_SECRET ?? "");

// export async function GET(request: NextRequest) {
//     const resp = await terra.generateWidgetSession({
//         referenceID: "HelloHarvard",
//         language: "en",
//         authSuccessRedirectUrl: "http://localhost:3000",
//         authFailureRedirectUrl: "http://localhost:3000"
//     })
//     return NextResponse.json({ url: resp.url }, { status: 200});
// }
