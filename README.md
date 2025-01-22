# FilmScript

  ![image](https://github.com/user-attachments/assets/19997aa7-3b26-4246-a35f-300fca4e3f2e)

## Project Overview

FilmScript is a simple web-based application that allows users to view a list of movies in an interactive table format. The movie data is pulled from a CSV file, which includes information such as movie titles, genres, and poster URLs. Users can filter the movie list by genre, making it easier to browse and discover films based on their preferred genre.

The application is designed to provide a quick, user-friendly interface for movie lovers, film researchers, and anyone interested in exploring movie databases. The data is dynamically loaded from an external source (a CSV file), making it easy to keep the movie list up-to-date without needing to modify the core application code.

## Key Features

- **Genre-based Filtering**: Users can filter the displayed movies based on their genre preference (e.g., Horror, Comedy, Sci-Fi, etc.).
- **Dynamic Movie List**: The movies are loaded dynamically from an external CSV file, making it easy to maintain and update the list without altering the application code.
- **Image Display**: Movie posters or images are fetched and displayed directly from the URL provided in the CSV file, enhancing the visual appeal of the movie list.
- **Simple and Intuitive Interface**: The table format is straightforward, and the dropdown filter for genres allows easy selection, making it user-friendly.
- **Automatic Data Parsing**: The application processes the CSV data and converts it into an HTML table automatically, reducing the need for manual updates or data entry.

## How It Works

1. **HTML Structure**: The application’s front end consists of a basic HTML page, which includes a dropdown filter for genres, two images of popcorn for styling, and an empty table to hold the movie data.
2. **CSV File Loading**: When the page loads, the JavaScript fetches the CSV file (hosted on GitHub) containing movie information.
3. **CSV Parsing**: The CSV data is parsed, and an HTML table is dynamically populated with movie details (title, genre, poster image, etc.).
4. **Filtering**: Users can select a genre from the dropdown list, and the table updates to only show movies from the selected genre.
5. **Images**: If available, movie poster images are fetched and displayed in the table, adding a visual element to the data.

## Process Plan
<p align="center">
  <img src="https://github.com/user-attachments/assets/4ca7f3ec-3ca3-4ef0-936e-98a4b775e34e">
</p>

## Problem It Solves

In the real world, film enthusiasts and researchers often need to navigate large databases of movies. Manually browsing through endless lists of movies can be tedious and time-consuming. FilmScript helps solve this problem by:

1. **Organizing movie data**: By displaying the movie data in a tabular format, users can easily scan through a list of movies with relevant details.
2. **Filtering movie genres**: Users can filter movies by genre, making it simple to find films that match their interests or research needs.
3. **Dynamic content loading**: With data fetched from an external CSV file, the list of movies is automatically updated without any additional manual effort. This ensures that users always have access to the most current information.


## Implementation in the Real World

This project can be easily implemented in several real-world scenarios:

- **Movie Database for Film Studios or Distributors**: FilmScript can serve as a quick reference for users exploring a catalog of films. Studios or distributors can host this on their website, allowing users to browse films by genre or title.
- **Movie Recommendation System**: FilmScript can be expanded to recommend films based on genre preferences, making it a useful tool for personalized movie suggestions.
- **Film Research & Education**: Academics or film critics can use this tool to explore different film genres and analyze movie trends in an interactive way.
- **Event-based Movie Showings**: Cinemas or streaming platforms could use this setup to display movies currently available for viewing, with genre filtering to help users find relevant films.

## Future Suggested Enhancements

- **Search Functionality**: Implement a search feature to allow users to search for movies by title, director, or actor.
- **More Detailed Movie Information**: Enhance the table to display additional information such as release year, runtime, or rating.
- **Improved Filtering**: Allow for multiple genre selections or advanced filters (e.g., by rating, year, etc.).
- **Responsive Design**: Make the page responsive so it works well on all screen sizes, including mobile devices.

### Resources used:
- [Covalence's YouTube Tutorial](https://youtu.be/oencyPPBTUQ)
- [Kaggle 1000 Movies Database](https://www.kaggle.com/datasets/harshitshankhdhar/imdb-dataset-of-top-1000-movies-and-tv-shows)
- [ChatGPT](https://chatgpt.com/)
