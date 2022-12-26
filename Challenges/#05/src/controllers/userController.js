export const edit = (req, res) => res.send('Edit Profile');
export const see = (req, res) =>
  res.send(`Watch ${req.params.id} User's Profile`);
export const login = (req, res) => res.send('Login');
export const join = (req, res) => res.send('Join');
