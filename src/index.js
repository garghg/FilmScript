(function () {
    var DELIMITER = ',';
    var NEWLINE = '\n';
    var qRegex = /^"|"$/g;
    var table = document.getElementById('table');
    var genreFilter = document.getElementById('genre-filter');
    var filePath = 'https://raw.githubusercontent.com/garghg/FilmScript/refs/heads/main/movies.csv';

    if (!table || !genreFilter) {
        return;
    }

    // Automatically load the CSV from the predefined path
    fetchCSV(filePath);

    // Function to fetch the CSV file
    function fetchCSV(file) {
        if (!file) {
            return;
        }

        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(text => {
                toTable(text);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    function toTable(text) {
        if (!text || !table) {
            return;
        }

        // Clear table
        while (!!table.lastElementChild) {
            table.removeChild(table.lastElementChild);
        }

        var rows = text.split(NEWLINE);
        var headers = rows.shift().trim().split(DELIMITER);
        var htr = document.createElement('tr');

        var genreIndex = -1; // Track the index of the genre column

        headers.forEach(function (h, index) {
            var th = document.createElement('th');
            var ht = h.trim();

            if (!ht) {
                return;
            }

            th.textContent = ht.replace(qRegex, '');
            htr.appendChild(th);

            // Store the genre column index
            if (ht.toLowerCase() === 'genre') {
                genreIndex = index;
            }
        });

        table.appendChild(htr);

        var rtr;

        rows.forEach(function (r) {
            r = r.trim();

            if (!r) {
                return;
            }

            var cols = r.split(DELIMITER);

            if (cols.length === 0) {
                return;
            }

            rtr = document.createElement('tr');

            cols.forEach(function (c, index) {
                var td = document.createElement('td');
                var tc = c.trim();

                td.textContent = tc.replace(qRegex, '');

                rtr.appendChild(td);
            });

            table.appendChild(rtr);
        });

        // After the table is populated, update the first column to display images
        updateFirstColumnImages();

        // Filter rows based on selected genre
        genreFilter.addEventListener('change', function () {
            filterByGenre(genreIndex, genreFilter.value);
        });
    }

    // Function to update the first column with image tags
    function updateFirstColumnImages() {
        var rows = table.querySelectorAll('tr');
        rows.forEach(function (row, rowIndex) {
            // Skip the header row
            if (rowIndex === 0) {
                return;
            }

            var firstCell = row.cells[0];

            if (firstCell) {
                var imageUrl = firstCell.textContent.trim();

                var img = document.createElement('img');
                img.src = imageUrl;
                img.alt = 'Image';
                img.style.maxWidth = '200px'; // adjust image size
                img.style.maxHeight = '200px'; // adjust image size
                firstCell.innerHTML = ''; // Clear text content
                firstCell.appendChild(img); // Add the image to the cell
                img.draggable = false;
            }
        });
    }

    // Function to filter rows by genre
    function filterByGenre(genreIndex, selectedGenre) {
        var rows = table.querySelectorAll('tr');
        rows.forEach(function (row, rowIndex) {
            // Skip the header row
            if (rowIndex === 0) {
                return;
            }
            
            var cells = row.cells;

            if (cells.length > genreIndex) {
                var genre = cells[genreIndex].textContent.trim().toLowerCase();

                // Check if the selected genre is included in the genre list
                if (!selectedGenre || genre.includes(selectedGenre.toLowerCase())) {
                    row.style.display = ''; // Show the row
                } else {
                    row.style.display = 'none'; // Hide the row
                }
            }
        });
    }
})();
