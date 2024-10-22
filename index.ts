import "expo-router/entry";
import messaging from "@react-native-firebase/messaging";
import { tokenProvider } from "./src/utils/tokenProvider";
import { supabase } from "./src/lib/supabase";
import { StreamChat } from "stream-chat";
import notifee from "@notifee/react-native";
import { setPushConfig } from "./src/utils/setPushConfig";
import React from 'react';
import { View, Text } from 'react-native';
import { registerRootComponent } from 'expo';

// Ensure push configuration is set
setPushConfig();

// Add any necessary background message handling logic here
// messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//   const { data: { session } } = await supabase.auth.getSession();
//   if (!session?.user) {
//     console.log("ERROR: no active auth session");
//     return;
//   }
//   const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_API_KEY);
//   client._setToken(
//     {
//       id: session.user.id,
//     },
//     tokenProvider,
//   );
//   // handle the message
//   const message = await client.getMessage(remoteMessage.data.id);
//   // create the android channel to send the notification to
//   const channelId = await notifee.createChannel({
//     id: "chat-messages",
//     name: "Chat Messages",
//   });
//   // display the notification
//   const { stream, ...rest } = remoteMessage.data ?? {};
//   const data = {
//     ...rest,
//     ...((stream as unknown as Record<string, string> | undefined) ?? {}), // extract and merge stream object if present
//   };
//   await notifee.displayNotification({
//     title: "New message from " + message.message.user.name,
//     body: message.message.text,
//     data,
//     android: {
//       channelId,
//       // add a press action to open the app on press
//       pressAction: {
//         id: "default",
//       },
//     },
//   });
// });

// Root component for your application
const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Telegram Clone!</Text>
    </View>
  );
};

// Register the root component
registerRootComponent(App);
