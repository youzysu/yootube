export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const seeUsers = (req, res) =>
  res.render("users", { pageTitle: "Users" });
export const seeUser = (req, res) => res.render("user", { pageTitle: "User" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
