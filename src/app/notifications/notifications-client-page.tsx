"use client";

import { TopBarMenuContext } from "@/context";
import { Notifications } from "@/types";
import { useContext } from "react";
import { NoVerified } from "./no-verified";
import NoMentions from "./no-mentions";
import Image from "next/image";

export default function NotificationsClientPage({
  notifications,
}: {
  notifications: Notifications;
}) {
  const { currentPage } = useContext(TopBarMenuContext);

  // Add a type assertion to ensure currentPage is a valid key
  const validPage = currentPage as keyof Notifications;
  const currentNotifications = notifications[validPage];

  if (validPage === "Verified" && !currentNotifications) {
    return <NoVerified />;
  }
  if (validPage === "Mentions" && !currentNotifications) {
    return <NoMentions />;
  }
  return (
    <div>
      {notifications[validPage]?.map((notification) => (
        <article
          key={notification.id}
          className="py-3 px-4 border-b border-b-twitter-dark-gray flex flex-row items-start"
        >
          <div className="mr-2 flex-0 w-10 flex justify-end">
            <Image
              src={"/images/blue-profile.svg"}
              alt="blue profile notification"
              width={21}
              height={21}
            />
          </div>
          <div className="flex-1">{notification.message}</div>
        </article>
      ))}
    </div>
  );
}
