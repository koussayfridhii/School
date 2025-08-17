// In-memory store for refresh tokens (for demonstration purposes)
// In a production environment, use a persistent store like Redis.
const refreshTokens = new Set();

const addRefreshToken = (token) => {
  refreshTokens.add(token);
};

const hasRefreshToken = (token) => {
  return refreshTokens.has(token);
};

const removeRefreshToken = (token) => {
  refreshTokens.delete(token);
};

module.exports = {
  addRefreshToken,
  hasRefreshToken,
  removeRefreshToken,
};
