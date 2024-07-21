# EcoFix - Community Issues Reporting Platform

## Overview

EcoFix is a community-driven platform that empowers citizens to report and track local environmental issues. By fostering collaboration between residents and local authorities, EcoFix aims to create a cleaner, safer, and more sustainable environment.

## Features

- **Geolocation**: Automatically detect your location for accurate reporting.
- **Photo Upload**: Attach images to your reports for better understanding.
- **Issue Tracking**: Follow the progress of reported issues in real-time. (in-progress)
- **Leaderboard**: Recognize top contributors and encourage community engagement.(in-progress)

## Technologies Used

- HTML, CSS, JavaScript
- Bootstrap 5 for responsive design
- Font Awesome for icons
- OpenStreetMap API for geolocation

## Setup Instructions

### Prerequisites

- A web browser (e.g., Chrome, Firefox)
- An IDE or text editor (e.g., VSCode, Sublime Text)
- Node.js and npm (for package management and server setup)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ecofix.git
cd ecofix
```

2. **Install dependencies**
```bash
npm install
```

### Running the Project

1. **Start the server**
```bash
npm start
```

2. **Open the project in your browser**
- Navigate to `http://localhost:3000`

### Project Structure

- `index.html`: The main landing page.
- `submit.html`: The page for submitting issues.
- `leaderboard.html`: The leaderboard page.
- `css/styles/2/3.css`: The main stylesheets for the project.
- `js/submit.js`: JavaScript file for handling form submissions and geolocation.
- `assets/`: Folder containing images and other assets.

### File Descriptions

#### HTML Files

- **index.html**
- The main landing page, containing a welcome message, features, and call-to-action sections.
- **submit.html**
- The form for users to submit issues, including fields for name, issue category, description, location, and photo upload.
- **leaderboard.html**
- The leaderboard displaying top contributors and their respective scores.

#### CSS File

- **styles3.css**
- Contains styles for the overall look and feel of the website, including custom colors, form styling, and responsiveness.

#### JavaScript File

- **submit.js**
- Handles form submissions, validates user input, and fetches user location using the Geolocation API and OpenStreetMap.

## Usage Instructions

### Submitting an Issue

1. **Navigate to the submission page**
- Click on the "Submit Issue" button on the homepage or go to `http://localhost:3000/submit.html`.

2. **Fill out the form**
- Enter your name, select an issue category, provide a description, and enter your location.
- You can use the "Use My Location" button to automatically fetch your current location.

3. **Upload a photo**
- Attach an image of the issue you are reporting.

4. **Submit the form**
- Click the "Submit Issue" button to send your report.

### Viewing the Leaderboard

1. **Navigate to the leaderboard page**
- Click on the "Leaderboard" link in the navigation menu or go to `http://localhost:3000/leaderboard.html`.

2. **View top contributors**
- See the list of top contributors and their scores based on the issues they have reported and resolved.

## Contribution Guidelines

We welcome contributions to improve EcoFix! Here’s how you can help:

1. **Fork the repository**
2. **Create a new branch**
```bash
git checkout -b feature-branch-name
```

3. **Make your changes**
- Improve the code, add features, or fix bugs.

4. **Commit your changes**
```bash
git commit -m "Description of changes"
```

5. **Push to the branch**
```bash
git push origin feature-branch-name
```

6. **Create a pull request**

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact

For any inquiries or support, please contact us at:

- **Email**:
- **Phone**:

Connect with us on social media:

- [Facebook](https://www.facebook.com)
- [Twitter](https://www.twitter.com)
- [Instagram](https://www.instagram.com)

## Acknowledgements

- Special thanks to Hack To The Future Hackathon
- Icons by Font Awesome.
- Geolocation services by OpenStreetMap.

---

Thank you for using EcoFix! Together, we can make our environment better.
