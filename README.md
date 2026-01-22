# mtu-rocketry

# MTU Rocketry Website 

Official website for the MTU Rocketry team. This site provides information about the team, upcoming events, launches, outreach activities, and ways to get in touch.

 Live site:  
https://mtu-rocketry.netlify.app/

## Features

- Multi-page static website
- Team information and profiles
- Events and launches pages
- Outreach and community involvement
- Contact page
- Responsive layout for desktop and mobile
- Shared styling and JavaScript across pages

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Netlify (for deployment and hosting)

## Project Structure
```bash 
mtu-rocketry-website/
├── index.html # Home page
├── team.html # Team information
├── events.html # Events page
├── launches.html # Launches page
├── outreach.html # Outreach activities
├── contact.html # Contact page
├── styles.css # Global styles
├── scripts.js # Shared JavaScript
└── README.md # This file
```

## Running Locally

This is a static website, so you can run it locally in a few simple ways:

### Option 1: Open Directly
You can double-click `index.html` to open it in your browser.

### Option 2: Local Server (Recommended)

Using Python:

```bash
python -m http.server 8000
```

Then open:
http://localhost:8000/index.html

## Deployment
The site is deployed using Netlify. Any updates pushed to the connected GitHub repository will automatically trigger a new deployment.

## Customization
 - Edit the .html files to update page content
- Modify styles.css to change layout, colors, and design
- Update scripts.js to add or modify interactive behavior
