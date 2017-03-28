module.exports = function({ get }) {
  get('/render', 'render#view');
  get('/renderejs', 'renderejs#view');
};
