(function () {
    // Constants for CSV parsing
    var DELIMITER = ',';  // Separator for values in the CSV file
    var NEWLINE = '\n';    // Newline character for splitting rows
    var qRegex = /^"|"$/g; // Regular expression to remove quotation marks
    var table = document.getElementById('table'); // Reference to the table element
    var genreFilter = document.getElementById('genre-filter'); // Reference to the genre filter dropdown
    var filePath = 'https://raw.githubusercontent.com/garghg/FilmScript/refs/heads/main/movies.csv'; // URL to the CSV file

    // Exit the function if the table or genre filter is not found
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

        fetch(file) // Fetch the CSV file from the URL
            .then(response => {
                // If the response is not successful, throw an error
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text(); // Return the text content of the response
            })
            .then(text => {
                toTable(text); // Call the function to convert the CSV data into a table
            })
            .catch(error => {
                // Log any errors encountered during the fetch operation
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // Function to convert CSV text data into an HTML table
    function toTable(text) {
        if (!text || !table) {
            return;
        }

        // Clear any existing content in the table (precautionary)
        while (!!table.lastElementChild) {
            table.removeChild(table.lastElementChild);
        }

        // Split the text into rows
        var rows = text.split(NEWLINE);
        var headers = rows.shift().trim().split(DELIMITER); // Get the header row
        var htr = document.createElement('tr'); // Create a table row for headers

        var genreIndex = 0; // Track the index of the genre column

        // Iterate through the header columns
        headers.forEach(function (h, index) {
            var th = document.createElement('th'); // Create header cells
            var ht = h.trim();

            if (!ht) {
                return;
            }

            // Clean up any quotes and add header text to the cell
            th.textContent = ht.replace(qRegex, '');
            htr.appendChild(th);

            // Store the index of the genre column
            if (ht.toLowerCase() === 'genre') {
                genreIndex = index;
            }
        });

        // Append the header row to the table
        table.appendChild(htr);

        var rtr;

        // Iterate through the data rows
        rows.forEach(function (r) {
            r = r.trim();

            if (!r) {
                return;
            }

            var cols = r.split(DELIMITER); // Split the row into columns

            if (cols.length === 0) {
                return;
            }

            rtr = document.createElement('tr'); // Create a row for data

            // Iterate through the columns and create table cells
            cols.forEach(function (c) {
                var td = document.createElement('td'); // Create a table data cell
                var tc = c.trim();

                td.textContent = tc.replace(qRegex, ''); // Clean up any quotes and add text content

                rtr.appendChild(td);
            });

            // Append the data row to the table
            table.appendChild(rtr);
        });

        // After the table is populated, update the first column to display images
        updateFirstColumnImages();

        // Filter rows based on selected genre
        genreFilter.addEventListener('change', function () {
            filterByGenre(genreIndex, genreFilter.value); // Filter by selected genre
        });
    }

    // Function to update the first column with image tags (for movie poster images)
    function updateFirstColumnImages() {
        var rows = table.querySelectorAll('tr'); // Get all table rows
        rows.forEach(function (row, rowIndex) {
            // Skip the header row
            if (rowIndex === 0) {
                return;
            }

            var firstCell = row.cells[0]; // Get the first cell in the row

            if (firstCell) {
                var imageUrl = firstCell.textContent.trim(); // Get the URL from the first cell

                var img = document.createElement('img'); // Create an image element
                img.src = imageUrl; // Set the source of the image
                img.alt = 'Image'; // Set alt text for the image
                img.style.maxWidth = '200px'; // Adjust image size
                img.style.maxHeight = '200px'; // Adjust image size
                firstCell.innerHTML = ''; // Clear the cell content
                firstCell.appendChild(img); // Append the image to the cell
                img.draggable = false; // Make the image non-draggable
            }
        });
    }

    // Function to filter rows by genre
    function filterByGenre(genreIndex, selectedGenre) {
        var rows = table.querySelectorAll('tr'); // Get all table rows
        rows.forEach(function (row, rowIndex) {
            // Skip the header row
            if (rowIndex === 0) {
                return;
            }

            var cells = row.cells; // Get the cells in the current row

            if (cells.length > genreIndex) {
                var genre = cells[genreIndex].textContent.trim().toLowerCase(); // Get the genre value from the current row

                // Check if the selected genre matches or if "All Genres" is selected
                if (!selectedGenre || genre.includes(selectedGenre.toLowerCase())) {
                    row.style.display = ''; // Show the row
                } else {
                    row.style.display = 'none'; // Hide the row
                }
            }
        });
    }
})();
