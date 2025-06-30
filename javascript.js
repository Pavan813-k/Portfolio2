const buttons = document.querySelectorAll('.buttons button');
const projects = document.querySelectorAll('.project-card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    projects.forEach((project, index) => {
      project.classList.remove('show'); // remove any previous animation
      project.style.display = 'none';   // hide all cards first

      const match = filter === 'all' || project.classList.contains(filter);

      if (match) {
        // Delay each animation for staggered effect
        setTimeout(() => {
          project.style.display = 'block';
          project.classList.add('show');
        }, index * 100);
      }
    });
  });
});

// Show all projects with animation on first load
window.addEventListener('DOMContentLoaded', () => {
  projects.forEach((card, index) => {
    setTimeout(() => {
      card.style.display = 'block';
      card.classList.add('show');
    }, index * 100);
  });
});
