export const validateInput = {
  required: (value) => {
    return value?.trim() ? null : "This field is required";
  },

  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? null : "Invalid email format";
  },

  password: (value) => {
    if (value.length < 8) return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(value)) return "Password must contain uppercase letter";
    if (!/[a-z]/.test(value)) return "Password must contain lowercase letter";
    if (!/[0-9]/.test(value)) return "Password must contain number";
    return null;
  },
};
