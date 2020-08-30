export interface LoadingState {
  api: {
    [key: string]: boolean;
  };
}

export interface CommonState {
  modalStatus: {
    isModalOpen: boolean;
    action: string;
  };
  notification: {
    message: string;
    type: string;
  };
}

export interface ModalStateProps {
  openModal: (action: string) => void;
  closeModal: () => void;
}

export interface NotificationStateProps {
  addNotification: (message: string, type: string) => void;
}

export interface LoaderState {
  loading: boolean;
}

export interface State {
  loading: LoadingState;
  common: CommonState;
}

export interface Action {
  type: string;
  payload: any;
}
