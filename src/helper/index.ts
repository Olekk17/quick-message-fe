export const verifyEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

export const verifyPassword = (password: string) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const saveLoaderDecrease = (value: number) => {
  if (value > 0) {
    return value - 1;
  }
  
  return value;
}

export const TOKEN = {
  get: () => {
    return localStorage.getItem("token");
  },
  set: (token: string) => {
    localStorage.setItem("token", token);
  },
  delete: () => {
    localStorage.removeItem("token");
  }
}
