document.querySelector('a[href="#home"]').addEventListener('click', function() {
    const homeLeft = document.querySelector('.homeleft');
    const homeRight = document.querySelector('.homerightwraper');
  
    // Remove classes to reset animation
    homeLeft.classList.remove('animate-left');
    homeRight.classList.remove('animate-right');
  
    // Use setTimeout to allow reflow before re-adding classes
    setTimeout(() => {
      homeLeft.classList.add('animate-left');
      homeRight.classList.add('animate-right');
    }, 50); // A small delay to ensure the reflow happens
  });
  
  