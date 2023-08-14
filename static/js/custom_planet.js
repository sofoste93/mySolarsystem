document.getElementById('planet-search').addEventListener('input', function () {
    const planetName = this.value.toLowerCase();

    // Remove previous info-bubble if any
    const oldBubble = document.querySelector('.info-bubble');
    if (oldBubble) {
        oldBubble.remove();
    }

    const planets = {
        mercury: {
            info: "Mercury is the smallest planet in our Solar System.",
            imagePath: "static/images/Mercury.png"
        },
        venus: {
            info: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.",
            imagePath: "static/images/Venus.png"
        }
        // ... Add similar info and paths for other planets ...
    };

    if (planets[planetName]) {
        // Display bubble info on the planet
        const planetElement = document.querySelector(`.${planetName}`);
        const infoBubble = document.createElement('div');
        infoBubble.className = 'info-bubble';
        infoBubble.innerText = planetName.charAt(0).toUpperCase() + planetName.slice(1);
        planetElement.appendChild(infoBubble);

        // Display planet info and image in the card
        const planetCard = document.getElementById('planet-card');
        planetCard.style.display = 'block';
        document.getElementById('planet-card-title').innerText = planetName.charAt(0).toUpperCase() + planetName.slice(1);
        document.getElementById('planet-card-description').innerText = planets[planetName].info;
        document.getElementById('planet-image').src = planets[planetName].imagePath;
    } else {
        // Display default state
        const planetCard = document.getElementById('planet-card');
        planetCard.style.display = 'block';
        document.getElementById('planet-card-title').innerText = "Unknown Planet";
        document.getElementById('planet-card-description').innerText = "The planet you're looking for could not be found.";
        document.getElementById('planet-image').src = "static/images/pluto.png";
    }
});

document.getElementById('orbitSwitch').addEventListener('change', function() {
    const orbits = document.querySelectorAll('.orbit');
    if (this.checked) {
        orbits.forEach(orbit => orbit.style.display = 'block');
    } else {
        orbits.forEach(orbit => orbit.style.display = 'none');
    }
});

document.getElementById('darkModeSwitch').addEventListener('change', function() {
    const body = document.querySelector('body');
    const cardBody = document.getElementById('the-planets');
    if (this.checked) {
        body.classList.add('dark-mode', 'bg-black');
        cardBody.classList.add('dark-mode', 'bg-dark')
        cardBody.classList.remove('text-dark')
    } else {
        body.classList.remove('dark-mode', 'bg-black', 'text-dark');
        cardBody.classList.remove('dark-mode', 'bg-dark', 'text-dark')
        body.classList.add('text-dark');
        cardBody.classList.add('text-dark')
    }
});

