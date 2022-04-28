/* export default function progressNotification(
  message: string,
  notificationType: string,
): void {
  switch (notificationType) {
    case 'Email':
      console.log('Email: ', message);
      break;
    case 'Phone':
      console.log('Phone: ', message);
      break;
    case 'Console':
      console.log('Console: ', message);
      break;
  }
} */

const notifications: string[] = ['Email', 'Phone', 'Console'];
const addNewNotification = (newNotfication: string): void => {
  const checkIfNotificationAllreadyExist = notifications.find((noti) => noti === newNotfication);
  if (checkIfNotificationAllreadyExist) {
    return console.log('notification allready exist');
  }
  notifications.push(newNotfication);
};
addNewNotification('Email');
console.log(notifications);

export function progressNotification2(message: string, notificationType: string) {
  console.log(`${notificationType},${message} `);
}