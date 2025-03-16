function searchCars() {
    let query = document.getElementById("search-bar").value.toLowerCase();
    let brand = document.getElementById("brand-filter").value;
    let price = document.getElementById("price-filter").value;

    console.log(`Searching for: ${query}, Brand: ${brand}, Price Range: ${price}`);

    // Send request to backend (Spring Boot API)
    fetch(`/api/cars?query=${query}&brand=${brand}&price=${price}`)
        .then(response => response.json())
        .then(data => console.log("Filtered Cars:", data))
        .catch(error => console.error("Error fetching cars:", error));
}

function searchCars() {
    let input = document.getElementById("search-bar").value.toLowerCase();
    let carCards = document.querySelectorAll(".car-card");

    carCards.forEach(card => {
        let carName = card.querySelector("h3").innerText.toLowerCase();
        if (carName.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
async function searchCars() {
    let input = document.getElementById("search-bar").value;

    if (input.trim() === "") {
        // If empty, reload all cars
        loadAllCars();
        return;
    }

    let response = await fetch(`/cars/search?keyword=${input}`);
    let cars = await response.json();

    let carGrid = document.querySelector(".car-grid");
    carGrid.innerHTML = ""; // Clear previous cars

    cars.forEach(car => {
        carGrid.innerHTML += `
            <div class="car-card">
                <img src="${car.imageUrl}" alt="${car.name}">
                <h3>${car.name}</h3>
                <p>${car.specifications}</p>
            </div>
        `;
    });
}



