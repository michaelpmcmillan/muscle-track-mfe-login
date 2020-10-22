import GoTrue from "gotrue-js";

const auth = new GoTrue({
  APIUrl: "https://muscle-track.netlify.app/.netlify/identity",
  audience: "",
  setCookie: true,
});

export const login = async (email, password) => {
  await auth
    .login(email, password, true)
    .then((response) => (window.location.href = "/profile"))
    .catch((error) => {
      // display error message
    });
};
