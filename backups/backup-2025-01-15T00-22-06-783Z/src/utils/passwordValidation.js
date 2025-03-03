export const validatePassword = (password) => {
  const validations = {
    minLength: password.length >= 12,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumbers: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    noSpaces: !/\s/.test(password),
    noConsecutive: !/(.)\1{2,}/.test(password), // Pas plus de 2 caractères identiques consécutifs
  };

  const messages = {
    minLength: '12 caractères minimum',
    hasUpperCase: 'Au moins une lettre majuscule',
    hasLowerCase: 'Au moins une lettre minuscule',
    hasNumbers: 'Au moins un chiffre',
    hasSpecialChar: 'Au moins un caractère spécial (!@#$%^&*(),.?":{}|<>)',
    noSpaces: 'Pas d\'espaces',
    noConsecutive: 'Pas plus de 2 caractères identiques consécutifs',
  };

  const failed = Object.entries(validations)
    .filter(([_, valid]) => !valid)
    .map(([key]) => messages[key]);

  return {
    isValid: failed.length === 0,
    errors: failed,
  };
};