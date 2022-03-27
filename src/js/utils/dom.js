const $ = (name, type = 'one') => {
  if (type === 'one') return document.querySelector(name);
  if (type === 'all') return document.querySelectorAll(name);
};

export { $ };
