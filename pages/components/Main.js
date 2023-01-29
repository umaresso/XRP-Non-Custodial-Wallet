import { Box, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AccountManager from "./AccountManager";
import SeedPhraseManager from "./SeedPhraseGenerator";
import Unlock from "./Unlock";

function Main() {
  const [unlocked, setUnlocked] = useState(false);
  const [mnemonic, setMnemonic] = useState(null);
  //   mnemonic = localStorage.getItem("mnemonic");
  useEffect(() => {
    let cachedPassword = localStorage.getItem("password");
    let _mnemonic = localStorage.getItem("mnemonic");
    console.log("mnemoninc is ", _mnemonic);

    console.log({ cachedPassword, _mnemonic });
    if (cachedPassword && cachedPassword !== "null") setUnlocked(true);
    if (_mnemonic && _mnemonic !== "null") {
      console.log("mnemonic", _mnemonic);
      setMnemonic(_mnemonic);
    }
  }, []);

  return (
    <Center background={"rgba(0,0,0,0.25)"} width={"100vw"} height={"100vh"}>
      <Box
        color={"white"}
        bg={"black"}
        width={"50vw"}
        height={"90vh"}
        padding={"20px"}
        borderRadius={"20px"}
        overflowY={"scroll"}
      >
        {!mnemonic ? (
          <SeedPhraseManager />
        ) : !unlocked ? (
          <Unlock unlocker={setUnlocked} />
        ) : (
          <Box>
            <AccountManager mnemonic={mnemonic} />
          </Box>
        )}
      </Box>
    </Center>
  );
}

export default Main;
