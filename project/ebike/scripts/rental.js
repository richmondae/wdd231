const requestURL = 'https://richmondae.github.io/wdd231/project/ebike/data/rent.json';

fetch(requestURL)
    .then(response => response.json())
    .then(jsonObject => {
        const rentals = jsonObject['rentals'];

        let table = document.createElement('table');

        // Create table head
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let tr2 = document.createElement('tr');

        let blank = document.createElement('th');
        blank.setAttribute("colspan", "2");
        blank.textContent = "";

        let reservation = document.createElement('th');
        reservation.setAttribute("colspan", "2");
        reservation.textContent = "Reservation";

        let walkin = document.createElement('th');
        walkin.setAttribute("colspan", "2");
        walkin.textContent = "Walk-In";

        tr.appendChild(blank);
        tr.appendChild(reservation);
        tr.appendChild(walkin);
        thead.appendChild(tr);

        // Second row with detailed headings
        let rentaltype = document.createElement('th');
        rentaltype.textContent = "Rental Type";

        let maxpersons = document.createElement('th');
        maxpersons.textContent = "Max. Persons";

        let halfday = document.createElement('th');
        halfday.textContent = "Half Day (3hrs)";

        let fullday = document.createElement('th');
        fullday.textContent = "Full Day";

        let halfday2 = document.createElement('th');
        halfday2.textContent = "Half Day (3hrs)";

        let fullday2 = document.createElement('th');
        fullday2.textContent = "Full Day";

        tr2.appendChild(rentaltype);
        tr2.appendChild(maxpersons);
        tr2.appendChild(halfday);
        tr2.appendChild(fullday);
        tr2.appendChild(halfday2);
        tr2.appendChild(fullday2);
        thead.appendChild(tr2);
        table.appendChild(thead);

        // Table body
        let tbody = document.createElement('tbody');

        rentals.forEach(rental => {
            let tr = document.createElement('tr');

            let vehicle = document.createElement('td');
            vehicle.textContent = rental.vehicle;

            let persons = document.createElement('td');
            persons.textContent = rental.persons;

            let reserveHalf = document.createElement('td');
            reserveHalf.textContent = rental.reserveHalf;

            let reserveFull = document.createElement('td');
            reserveFull.textContent = rental.reserveFull;

            let walkHalf = document.createElement('td');
            walkHalf.textContent = rental.walkHalf;

            let walkFull = document.createElement('td');
            walkFull.textContent = rental.walkFull;

            tr.appendChild(vehicle);
            tr.appendChild(persons);
            tr.appendChild(reserveHalf);
            tr.appendChild(reserveFull);
            tr.appendChild(walkHalf);
            tr.appendChild(walkFull);

            tbody.appendChild(tr);
        });

        table.appendChild(tbody);

        document.querySelector('div.table').appendChild(table);
    })
    .catch(error => console.error('Error loading rental data:', error));
