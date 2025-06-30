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
// Add hover effect to project cards
projects.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });
});
// Add click effect to project cards
projects.forEach(card => {
  card.addEventListener('click', () => {
    const link = card.querySelector('a');
    if (link) {
      window.open(link.href, '_blank');
    }
  });
});
// Add a fade-in effect for the project cards
projects.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

  setTimeout(() => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 100);
});
// Add a fade-in effect for the buttons
buttons.forEach(button => {
  button.style.opacity = '0';
  button.style.transform = 'translateY(20px)';
  button.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

  setTimeout(() => {
    button.style.opacity = '1';
    button.style.transform = 'translateY(0)';
  }, 100);
});
// Add a fade-in effect for the project container
const projectsContainer = document.querySelector('.projects-container');
projectsContainer.style.opacity = '0';
projectsContainer.style.transform = 'translateY(20px)';
projectsContainer.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
setTimeout(() => {
  projectsContainer.style.opacity = '1';
  projectsContainer.style.transform = 'translateY(0)';
}, 100);