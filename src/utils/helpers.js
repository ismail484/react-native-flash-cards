import { Dimensions, AsyncStorage } from 'react-native';
import { Notifications, Permissions, Constants } from 'expo';
import { CONSTANTS } from './notification';

export function getDailyReminderValue() {
  return {
    today: CONSTANTS.NOTIFICATION_BODY
  };
}

export function DateToString(...args) {
  const date = new Date(...args);
  const todayUTC = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  return todayUTC.toISOString().split('T')[0];
}

export function getWidth() {
  return Dimensions.get('window').width;
}

export function getHeight() {
  return Dimensions.get('window').height;
}

export function score(correctAnswer, wrongAnswer) {
  const ratio = correctAnswer / (correctAnswer + wrongAnswer);
  return ratio * 100;
}


function getNotificationTime(date) {
  date.setHours(CONSTANTS.NOTIFICATION_HOUR);
  date.setMinutes(CONSTANTS.NOTIFICATION_MINUTE);
  return date;
}

function tomorrowNotificationTime() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return getNotificationTime(tomorrow);
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(CONSTANTS.NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function createNotification() {
  return {
    title: 'Hey!..your challenge is waiting now for you ,let/s start!',
    body: CONSTANTS.NOTIFICATION_BODY,
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  };
}

export async function setLocalNotification(
  reject = (...args) => console.log(...args)
) {
  try {
    let data = await AsyncStorage.getItem(CONSTANTS.NOTIFICATION_KEY);
    data = JSON.parse(data);

    if (data === null) {
      try {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );

        if (status === 'granted') {
          Notifications.cancelAllScheduledNotificationsAsync();
          Notifications.scheduleLocalNotificationAsync(createNotification(), {
            time: tomorrowNotificationTime(),
            repeat: 'day'
          });

          AsyncStorage.setItem(
            CONSTANTS.NOTIFICATION_KEY,
            JSON.stringify(true)
          );
        } else {
          reject('Sorry!..We dont have the right to run push notifications');
          reject(
            !Constants.isDevice &&
              'Please run this app on real devices instead of simulators'
          );
        }
      } catch (errorPermissionNotification) {
        reject('Notification Permssion issue : ', errorPermissionNotification);
      }
    }
  } catch (e) {
    reject('AsyncStorage issue: ', e);
  }
}
