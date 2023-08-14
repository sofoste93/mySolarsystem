document.getElementById('planet-search').addEventListener('input', function () {
    const planetName = this.value.toLowerCase();
    const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
    if (planets.includes(planetName)) {
        // Display bubble info on the planet
        const planetElement = document.querySelector(`.${planetName}`);
        const existingBubble = planetElement.querySelector('.info-bubble');
        if (!existingBubble) {
            const infoBubble = document.createElement('div');
            infoBubble.className = 'info-bubble';
            infoBubble.innerText = planetName.charAt(0).toUpperCase() + planetName.slice(1);
            planetElement.appendChild(infoBubble);
        }

        // Information about the planets
        const planetInfo = {
            mercury: "Mercury is the smallest planet in our Solar System.",
            venus: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.",
            // ... Add similar info for other planets ...
        };

        // Update Bootstrap card with planet information
        const planetCard = document.getElementById('planet-card');
        document.getElementById('planet-card-title').innerText = planetName.charAt(0).toUpperCase() + planetName.slice(1);
        document.getElementById('planet-card-description').innerText = planetInfo[planetName] || "Information not available.";
        planetCard.style.display = 'block'; // Display the card

        // Optionally, update the modal with detailed information too
        document.getElementById('planetModalLabel').innerText = planetName.charAt(0).toUpperCase() + planetName.slice(1);
        // For now, I'll populate the modal with the same basic info. You can expand on this:
        document.querySelector('#planetModal .modal-body').innerText = planetInfo[planetName] || "Information not available.";
    }
});

document.getElementById('darkModeSwitch').addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
