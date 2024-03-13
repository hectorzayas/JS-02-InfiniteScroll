# Glass

## Overview
Glass enhances web experiences by leveraging the Unsplash API to dynamically generate and infinitely load high-quality images. It introduces a unique feature allowing users to apply filters, searching for images that match specific criteria directly from Unsplash. This project builds upon the concepts introduced in the [javascript20-projects | Infinite Scroll](https://github.com/JacintoDesign/infinite-scroll) by extending functionality and implementing advanced web development practices.

### [Live Demo](https://hz-glass.netlify.app/)

## Features
- **Infinite Image Loading**: Seamlessly load images as the user scrolls, enhancing user engagement without sacrificing performance.
- **Filtered Searches**: Incorporate user-specified filters to tailor image searches to specific needs, utilizing the comprehensive Unsplash API.
- **Responsive Design**: Employ Google Fonts and minimalist design principles to ensure the site is aesthetically pleasing on any device.

## Tools Utilized
- **Unsplash API**: [Visit Unsplash Developers](https://unsplash.com/developers)
- **CSS Loaders**: [Explore Loaders](https://cssloaders.github.io/)
- **Google Fonts**: [Discover Fonts](https://fonts.google.com/)
- **Netlify**: [Learn More](https://www.netlify.com/)
- **Axios**: [Documentation](https://axios-http.com/)
- **Node.js**: For backend functionality.

## Implementation Details

### Loading Spinner
- Integrated using HTML and CSS from [CSS Loaders](https://cssloaders.github.io/).
- Customized styles for a visually appealing loading experience.

### Webpage Structure and Styling
- Adopted Montserrat from Google Fonts for typography.
- Images are displayed in a single-column layout to maintain simplicity and focus.
- Added a header bar for project title and filter input, facilitating easy access to Unsplash's filtered searches.

### Infinite Scrolling and Dynamic Content Loading
- Asynchronous functions fetch images from Unsplash, ensuring a smooth infinite scrolling experience.
- Dynamically creates HTML elements (`<a>` and `<img>`) to display images, handling image metadata effectively.
- Utilizes DOM manipulation methods (`getElementById`, `createElement`, `appendChild`) and a custom `setAttributes` function to streamline element attribute assignment.

### Secure API Key Management with Netlify
- **Environment Variables**: Configured in Netlify to securely store and access the Unsplash API key, preventing unauthorized access.
- **Netlify Functions**: Implemented to act as a secure intermediary for API requests, utilizing Axios for HTTP requests and handling query parameters through serverless functions.

### Setup and Deployment
1. **Netlify Environment Variables**: Securely added the Unsplash API key into the Netlify site settings to keep it private.
2. **Serverless Function Configuration**: Established a Netlify function to manage API requests, ensuring secure API key usage without exposing it in client-side code.
3. **Axios for API Calls**: Utilized within Netlify functions to streamline and manage HTTP requests to the Unsplash API.

## Thanks to
Source Code: [Jacinto Wong](https://github.com/JacintoDesign/infinite-scroll)

## License
This project is available under the [MIT License](LICENSE.md). Feel free to use, modify, and distribute the code as you see fit.
