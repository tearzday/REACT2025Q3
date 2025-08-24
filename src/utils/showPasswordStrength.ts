export const getPasswordStrength = (password: string) => {
  let strengthScore = 0;

  if (/[a-z]/.test(password)) strengthScore += 1;
  if (/[A-Z]/.test(password)) strengthScore += 1;
  if (/[^A-Za-z0-9]/.test(password)) strengthScore += 1;
  if (/[0-9]/.test(password)) strengthScore += 1;

  if (strengthScore === 1) return 'low';
  if (strengthScore === 2 || strengthScore === 3) return 'medium';
  if (strengthScore === 4) return 'strong';

  return '';
};
