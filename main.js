
document.addEventListener('DOMContentLoaded', function() {
    // Add the fade-in class to trigger the transition
    document.body.classList.add('fade-in');
});

// window.addEventListener('pageshow', function(event) {
//     if (event.persisted) {
//         // Remove transition-related classes if the page was loaded from cache
//         document.body.classList.remove('fade-in', 'livesound-transition', 'studiowork-transition', 'postproduction-transition');

//         // window.location.reload(); // Force a reload if coming back to the page
//     }
// });

// window.addEventListener('pageshow', function(event) {
//     if (event.persisted) {
//         window.location.reload(); // Force a reload if coming back to the page
//     }
// });


function handleTransition(linkClass, transitionClass, targetUrl) {
    // Prevent default link behavior
    document.querySelector(linkClass).addEventListener('click', function(e) {
        e.preventDefault();

        // Create a div for the transition
        const transitionDiv = document.createElement('div');
        transitionDiv.classList.add(transitionClass);

        // Append the div to the body
        document.body.appendChild(transitionDiv);

        // Trigger the transition
        setTimeout(() => {
            transitionDiv.classList.add('active');
        }, 10); // small delay to allow the CSS transition to kick in

        // Redirect to the target URL after the transition
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 500); // match this duration with the CSS transition time
    });
}

// Handle transitions for each link
handleTransition('.livesound-link', 'livesound-transition', './livesound.html');
handleTransition('.studiowork-link', 'studiowork-transition', './studio.html');
handleTransition('.postproduction-link', 'postproduction-transition', './post.html');

