# Personal Bookshelf

This React application allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Features

- **Book Search Page:**
  - Search for books by typing in the book's name.
  - Display search results in real-time as the user types.
  - Uses the Open Library API for fetching results.
  - Display search results in a list of cards representing each book.

- **Personal Bookshelf Page:**
  - Add books from the search results to the personal bookshelf.
  - Persistently stores the user's bookshelf using the Web Storage API (localStorage).
  - Display the user's personal bookshelf with options to remove books.

## Tech Stack

- React
- Axios for API requests
- Bootstrap for styling

## Setup

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/zaheernaqvi72/BookShelfApp.git
   ```

2. **Install Dependencies**:

    ```bash
    cd BookShelfApp
    npm install
    ```
3. **Start the Development Server:
    ```bash
    npm run dev
    ```

4. Click on the link in the terminal to view the webpage.

## How to Use

### Book Search Page

1. Enter a book name in the search input field.
2. As you type, search results will appear dynamically below.
3. Click on "Add to Bookshelf" button to add a book to your personal bookshelf.
4. Navigate to the "My Bookshelf" button at the top-right to view your personal bookshelf.

### Personal Bookshelf Page

1. Navigate to the "My Bookshelf" link at the top-right from the Book Search page.
2. View your saved books in the personal bookshelf.
3. Click on "Remove" button to remove a book from your bookshelf.
4. Navigate back to the Book Search page using the "Back to Search" link at the top-right.

## Additional Notes

- This application uses Bootstrap for styling, Axios for making HTTP requests, and localStorage for persisting the user's bookshelf.
- Ensure you have a stable internet connection to fetch book data from the Open Library API.
