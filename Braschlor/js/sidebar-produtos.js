// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all product category items
    const produtosItems = document.querySelectorAll('.produtos-item');
    const menuOptions = document.querySelectorAll('.menu-options');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    // Function to handle product category selection
    function showCategory(index) {
      // Remove active class from all items
    produtosItems.forEach(item => {
        item.classList.remove('active');
    });
    
      // Hide all menu options
    menuOptions.forEach(menu => {
        menu.classList.remove('show');
    });
    
      // Add active class to selected item
    produtosItems[index].classList.add('active');
    
      // Show corresponding menu options
    document.getElementById('produto-' + index).classList.add('show');
    
      // Reset current option index for carousel
    currentOptionIndex = 0;
    updateCarouselVisibility();
}
    
    // Add click event listeners to product category items
    produtosItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        showCategory(index);
    });
    });
    
    // Carousel functionality
    let currentOptionIndex = 0;
    
    function updateCarouselVisibility() {
    const activeMenu = document.querySelector('.menu-options.show');
    const options = activeMenu.querySelectorAll('.option');
    
      // Hide all options
    options.forEach(option => {
        option.style.display = 'none';
    });
    
      // Determine which options to show (3 at a time)
    for (let i = currentOptionIndex; i < currentOptionIndex + 6; i++) {
        if (options[i]) {
        options[i].style.display = 'flex';
        }
    }
    
      // Update button visibility
    prevBtn.parentElement.style.visibility = currentOptionIndex === 0 ? 'hidden' : 'visible';
    nextBtn.parentElement.style.visibility = currentOptionIndex + 3 >= options.length ? 'hidden' : 'visible';
    }
    
    // Previous button click handler
    prevBtn.addEventListener('click', function() {
    if (currentOptionIndex > 0) {
        currentOptionIndex--;
        updateCarouselVisibility();
    }
    });
    
    // Next button click handler
    nextBtn.addEventListener('click', function() {
    const activeMenu = document.querySelector('.menu-options.show');
    const options = activeMenu.querySelectorAll('.option');
    
    if (currentOptionIndex + 3 < options.length) {
        currentOptionIndex++;
        updateCarouselVisibility();
    }
    });
    
    // Initialize the carousel
    updateCarouselVisibility();
});