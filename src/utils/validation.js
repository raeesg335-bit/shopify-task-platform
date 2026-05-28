export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const validateUsername = (username) => {
  return username.length >= 3 && /^[a-zA-Z0-9_]+$/.test(username);
};

export const validatePasswordMatch = (password, confirmPassword) => {
  return password === confirmPassword && password.length > 0;
};

export const validateCryptoAddress = (address, type) => {
  if (type === 'trc20') {
    return address.startsWith('T') && address.length === 34;
  }
  if (type === 'erc20') {
    return address.startsWith('0x') && address.length === 42;
  }
  return false;
};

export const validateBankAccount = (accountNumber) => {
  return accountNumber.length >= 9 && accountNumber.length <= 18;
};
