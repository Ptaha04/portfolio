const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

/*document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
}); */

document.querySelectorAll('.section').forEach(section => {
  section.classList.add('visible');
});
