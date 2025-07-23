document.querySelectorAll('.link-section, .topbar button').forEach(button => {
  button.addEventListener('click', () => {
    switch(button.id) {
      case 'home':
        window.location.href = 'index.html';
        break;
      case 'about-me':
        window.location.href = 'me.html';
        break;
      case 'education':
        window.location.href = 'edu.html';
        break;
      case 'timeline':
        window.location.href = 'tl.html';
        break;
      case 'creations':
        window.location.href = 'crea.html';
        break;
      case 'lists':
        window.location.href = 'lists.html';
        break;
      case 'contact-info':
        window.location.href = 'comm.html';
        break;
    }
  });
});