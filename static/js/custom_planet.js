const planetData = {
    mercury: {
        info: "Mercury is the smallest planet in our Solar System.",
        imgPath: "/static/images/Mercury.png"
    },
    venus: {
        info: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.",
        imgPath: "/static/images/Venus.png"
    },
    // ... Add similar entries for other planets ...
};


document.getElementById('planet-search').addEventListener('input', function () {
    const planetName = this.value.toLowerCase();

    // Check if planet exists in our dataset
    if (planetData[planetName]) {
        // Get planet details from dataset
        const { info, imgPath } = planetData[planetName];

        // Update Bootstrap card with planet information
        const planetCard = document.getElementById('planet-card');
        document.getElementById('planet-card-title').innerText = planetName.charAt(0).toUpperCase() + planetName.slice(1);
        document.getElementById('planet-card-description').innerText = info;
        document.getElementById('planet-image').src = imgPath;
        planetCard.style.display = 'block';

        // Update the modal with detailed information too
        document.getElementById('planetModalLabel').innerText = planetName.charAt(0).toUpperCase() + planetName.slice(1);
        document.querySelector('#planetModal .modal-body').innerText = info;

    } else {
        // If planet doesn't exist in our dataset, show default "not found" message and image
        const planetCard = document.getElementById('planet-card');
        document.getElementById('planet-card-title').innerText = "Planet Not Found";
        document.getElementById('planet-card-description').innerText = "The planet you're looking for could not be found.";
        document.getElementById('planet-image').src = "/static/images/pluto.png"; // Default image path
        planetCard.style.display = 'block';
    }
});

document.getElementById('darkModeSwitch').addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
