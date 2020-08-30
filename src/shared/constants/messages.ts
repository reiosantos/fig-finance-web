const errorMessages = {
  required: (field: string) => `${field} is required`,
  minLengthString: (field: string, length: number) =>
    `${field} must contain at least ${length} letters`,
  maxLengthString: (field: string, length: number) =>
    `${field} must contain at least ${length} letters`,
  betweenLengthString: (field: string, lengthFrom: number, lengthTo: number) =>
    `${field} must contain minimum ${lengthFrom} and maximum ${lengthTo} letters`,
  validType: (type: string) => `please provide a valid ${type}`
};

const onConfirmMessages = {
  confirmAction: (field: string, action: string) => `Are you sure, you want to ${action} ${field}?`,
  confirmLogout: 'Are you sure, you want to logout?'
};

export { errorMessages, onConfirmMessages };
