import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

const ForegroundHandler = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      const { messageId, notification } = remoteMessage;
      console.log('notification received in foreground', remoteMessage);
      PushNotification.localNotification({
        messageId,
        title: notification.title,
        body: notification.body,
      });
    });
    return unsubscribe;
  }, []);
  return null;
};

export default ForegroundHandler;
