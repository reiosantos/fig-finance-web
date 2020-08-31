export interface LoadingState {
  api: {
    [key: string]: boolean;
  };
}

export interface Action {
  type: string;
  payload: any;
}

export enum NotificationType {
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
  ERROR = 'error',
}

export interface NotificationStateProps {
  addNotification: (message: string, type: string) => void;
  resetNotification: () => void;
}

export interface LoaderState {
  success?: boolean;
  loading: boolean;
}

export interface NotificationState {
  message: string;
  type: NotificationType;
}

export interface CommonState {
  loader: LoaderState;
  notification: NotificationState;
}

export interface State {
  loading: LoadingState;
  common: CommonState
}
