export type Notification = {
  id: number;
  message: string;
};

export type Notifications = {
  All: Notification[];
  //TODO: We don´t care about the other types of notifications for now
  Verified?: Notification[];
  Mentions?: Notification[];
};
