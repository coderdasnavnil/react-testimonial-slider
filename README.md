# React User Review Slider

A simple testimonial slider built using React. Users can browse through different user reviews using navigation buttons.

## Features

- Built with React functional components
- Uses React Hooks (`useState`)
- Dynamic user navigation
- CSS Modules for styling
- Responsive card layout

## Tech Stack

- React
- JavaScript (ES6)
- CSS Modules
- React Icons

## Demo

https://react-testimonial-slider.vercel.app/)

Example:
https://your-demo-link.vercel.app

## Project Structure

```
src
 ├── App.js
 ├── Data.js
 ├── Usercard.js
 ├── Usercard.module.css
```

## How It Works

The application stores the current user index in React state. Clicking the navigation buttons updates the index and displays the corresponding user review.

Example logic:

```javascript
const [index, setIndex] = useState(0);

const person = people[index];
```

This ensures the displayed user changes dynamically when the index updates.

## Installation

Clone the repository

```
git clone https://github.com/yourusername/react-user-review-slider.git
```

Install dependencies

```
npm install
```

Run the project

```
npm start
```

## Future Improvements

- Add random user button
- Add animation for transitions
- Add auto-slide functionality

## Author

Navnil Das
