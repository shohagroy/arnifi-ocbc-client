export const setRefreshToken = (token) => {
  return (document.cookie = `refreshToken=${token}; Path=/;`);
};

export const getRefreshToken = () => {
  const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
    const [name, value] = cookie.split("=");
    acc[name] = value;
    return acc;
  }, {});

  const token = cookies["refreshToken"];

  if (!token) {
    return "";
  }

  return token;
};
