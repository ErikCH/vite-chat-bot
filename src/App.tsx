import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { generateClient } from "aws-amplify/api";
import {
  createAIConversation,
  AIConversation,
  createAIHooks,
} from "@aws-amplify/ui-react-ai";
import { Schema } from "../amplify/data/resource";

const client = generateClient<Schema>({ authMode: "userPool" });

function App() {
  const { useAIConversation } = createAIHooks(client);

  const [
    {
      data: { messages },
    },
    sendMessage,
  ] = useAIConversation("chat");

  return (
    <>
      <AIConversation messages={messages} handleSendMessage={sendMessage} />
    </>
  );
}

export default App;
