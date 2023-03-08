/* eslint-disable no-console */
import { useCallback, useEffect } from 'react';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import { useNavigation } from '@react-navigation/native';

const sender = '1080823891565';

const RemotePushController = () => {
  const { navigate } = useNavigation();

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    console.log('Authorization status:', authStatus);
    return enabled;
  };
  const pushNotificationConfig = () => {
    PushNotification.configure({
      onRegister(token) {
        console.log('TOKEN:', token);
      },
      onNotification(notification) {
        console.log('NOTIFICATION:', notification);
        // process the notification here
        // required on iOS only
      },
      // Android only
      senderID: sender,
      // iOS only
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  };
  const getToken = async () => {
    const tokenn = await messaging().getToken();
    console.log('token', tokenn);
  };
  const notificationListener = useCallback(async () => {
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      console.log('backgrund state11', remoteMessage);
      if (remoteMessage?.data) {
        navigate('Gym');
      }
    });
    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          if (remoteMessage?.data) {
            navigate('Gym');
          }
          console.log('remote message', remoteMessage.notification);
        }
      });
  }, [navigate]);

  useEffect(() => {
    const enabled = requestUserPermission();
    if (enabled) {
      pushNotificationConfig();
      // getToken();
      notificationListener();
    }
  }, [notificationListener]);
  return null;
};

export default RemotePushController;

// export const notificationListener = async () => {
//   messaging().onNotificationOpenedApp((remoteMessage) => {
//     console.log(
//       'Notification caused app to open from background state:',
//       remoteMessage.notification,
//     );
//     console.log('backgrund state', remoteMessage.notification);
//   });
//   // Check whether an initial notification is available
//   messaging()
//     .getInitialNotification()
//     .then((remoteMessage) => {
//       if (remoteMessage) {
//         console.log(
//           'Notification caused app to open from quit state:',
//           remoteMessage.notification,
//         );
//         console.log('remote message', remoteMessage.notification);
//       }
//     });
// };

export const firebasePushSetup = async () => {
  await messaging().registerForRemoteNotifications();

  const token = await messaging().getToken();
  console.log('TOKEN =', token);

  const granted = await messaging().requestPermission();
  console.log('GRANTED =', granted);

  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log('Message handled in the background!', remoteMessage);
  });

  const unsubscribe = messaging().onMessage(async (remoteMessage) => {
    console.log('FCM Message Data:', remoteMessage.data);
  });

  return unsubscribe;
};

// Bess@2o2oPr0.*@
