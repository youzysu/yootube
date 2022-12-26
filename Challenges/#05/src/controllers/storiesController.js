export const home = (req, res) => res.send('Home Page');

export const trending = (req, res) => res.send('Story Trending Page');

export const update = (req, res) => res.send('New Story Page');

export const see = (req, res) =>
  res.send(`Watch Story Number ${req.params.id}`);

export const edit = (req, res) =>
  res.send(`Edit Story Number ${req.params.id}`);

export const deleteStory = (req, res) =>
  res.send(`Delete Story Number ${req.params.id}`);
