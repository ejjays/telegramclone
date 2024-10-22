import "expo-router/entry";
import messaging from "@react-native-firebase/messaging";
import { tokenProvider } from "./src/utils/tokenProvider";
import { supabase } from "./src/lib/supabase";
import { StreamChat } from "stream-chat";
import notifee from "@notifee/react-native";
import { setPushConfig } from "./src/utils/setPushConfig";
import React from 'react';
import { View, Text } from 'react-native';

// Ensure push configuration is set
setPushConfig();

// Root component for your application
const App: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Telegram Clone!</Text>
    </View>
  );
};

export default App;
