import { notifications } from "@/lib/mock-data";
import { Notifications } from "@/types";
import NotificationsClientPage from "./notifications-client-page";

async function getNotifications(): Promise<Notifications> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(notifications);
    }, 1000);
  });
}

export default async function NotificationsPage() {
  const notifications = await getNotifications();
  return <NotificationsClientPage {...{ notifications }} />;
}
