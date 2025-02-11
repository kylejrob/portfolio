// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = "Toggle Dark Mode";
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px 20px';
toggleButton.style.backgroundColor = '#008CBA';  // Lighter color for better visibility
toggleButton.style.color = '#fff';  // White text for contrast
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
toggleButton.style.fontSize = '16px';
toggleButton.style.fontWeight = 'bold';

// Add box shadow for a floating effect
toggleButton.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';

// Add hover effect to make it more interactive
toggleButton.style.transition = 'background-color 0.3s, transform 0.2s';

toggleButton.addEventListener('mouseover', () => {
    toggleButton.style.transform = 'scale(1.1)';
});

toggleButton.addEventListener('mouseout', () => {
    toggleButton.style.transform = 'scale(1)';
});

// Append the toggle button to the body
document.body.appendChild(toggleButton);

// Check if dark mode is saved in local storage
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    document.body.classList.add('dark-mode');
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkModeNow = document.body.classList.contains('dark-mode');
    
    // Save the dark mode state in local storage
    localStorage.setItem('darkMode', isDarkModeNow.toString());
});

// Select all "Read More" links on the page
const readMoreLinks = document.querySelectorAll('.read-more');

readMoreLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link action
        
        const fullDescription = this.closest('.post').querySelector('.full-description');
        const readMoreWrapper = this.closest('.post').querySelector('.read-more-wrapper');
        
        // Toggle the visibility of the full description
        fullDescription.style.display = fullDescription.style.display === 'none' ? 'block' : 'none';
        
        // Change the link text based on the visibility
        if (fullDescription.style.display === 'block') {
            this.textContent = 'Read Less';
            // Move the Read More button to the bottom of the post
            this.closest('.post').appendChild(readMoreWrapper);
        } else {
            this.textContent = 'Read More';
            // Move the Read More button back to the top of the post
            this.closest('.post').querySelector('.short-description').appendChild(readMoreWrapper);
        }
    });
});
