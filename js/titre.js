let title = '👑 My Home Space 👑';
let i = 0;
setInterval(() => {
  document.title = title.substring(0, i + 1);
  if (i == 0) {
    direction = 1;
  } else if (i == title.length) {
    direction = -1;
  }
  i += direction;
}, 300);