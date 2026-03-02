// frontend/src/services/auth.js
export const verifyEmail = async (token) => {
  const response = await fetch('/api/auth/verify-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token })
  });
  if (!response.ok) {
    const error = await response.json();
    throw { response: { data: error } };
  }
  return response.json();
};