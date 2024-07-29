# Mini Search Engine

## Overview

This project is a simple web application that includes a mini search engine and a button to download a PDF file. The application is built using HTML, CSS, and JavaScript.

## Features

- **Search Functionality**: Allows users to perform a Google search directly from the web page.
- **PDF Download**: Provides a button that, when clicked, triggers the download of a specified PDF file.

## File Structure
/mini-search-engine
│
├── index.html
├── style.css
├── script.js
└── path/to/your/pdf.pdf

- `index.html`: The main HTML file for the application.
- `style.css`: The CSS file for styling the application.
- `script.js`: The JavaScript file containing the search and PDF download functionality.
- `path/to/your/pdf.pdf`: The PDF file to be downloaded when the "About Website Creator" button is clicked.

## Getting Started

### Prerequisites

Ensure you have a web browser to view and test the application.

### Setup

1. **Clone the Repository**

   ```sh
   git clone https://github.com/your-username/mini-search-engine.git

Navigate to the Project Directory

sh
Copy code
cd mini-search-engine
Open index.html in Your Web Browser

Simply open the index.html file in your preferred web browser to view and interact with the application.

Modifying the PDF Download Path
Open script.js.
Replace 'path/to/your/pdf.pdf' with the actual path to the PDF file you want to make available for download.
Example
javascript
Copy code
document.getElementById('success').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'path/to/your/pdf.pdf'; // Replace with the actual path to your PDF file
    link.download = 'about_website_creator.pdf'; // Replace with the desired download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
Files
index.html
Contains the HTML structure of the application, including the search input, search button, and download button.

style.css
Contains the CSS styles for the application, including layout and visual design.

script.js
Contains the JavaScript code for search functionality and PDF download feature.

Usage
Search: Enter a query in the search input field and click the "Search" button to perform a Google search.
Download PDF: Click the "About Website Creator" button to download the specified PDF file.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
HTML, CSS, and JavaScript for building the web application.
Google Search API for performing searches.

