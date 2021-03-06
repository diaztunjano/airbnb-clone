# Spotify-Next-Clone Guide

This document serves as guidance to the process of creating this app. It uses Next.js, Tailwind, NextAuth and connects with the  Airbnb Api already developed that handles different types of querys to the *real* Airbnb. It details the packages installed, VSCode Extensions used and any other cool stuff I wish to remember for future projects. 
***
## Packages Installed:

- Next.js with tailwind installation: 
  - `npx create-next-app -e with-tailwindcss `
-  Heroicons:
   - `npm install @heroicons/react ` 


***
## VSCode Extensions Used:
- ES7 React/Redux/GraphQL/React-Native Snippets
- Tailwind CSS IntelliSense

***

## Deployment:
- Used Vercel to host and deploy the app. Everytime I push to main branch, it gets re-deployed. 

***

### NextJS Stuff:
- **IMG Tag:** 
  - Instead of using normal html `<img src="image.jpg"/>`, we use Next.js `import Image from "next/image"`; because it optimizes the image into webp format which is smaller and faster to load. We need to create *next.config.js* file and write the source from where the image is being loaded. 
  
- **Static Rendering:** 
  - When including `async function getStaticProps()`, it tells Next.js to do server rendering. Normally, User get the React Bundle when entering the website. Next.js introduces a server between the user and React. First, the user makes a request to the Next.js server and it sends only the components that the website needs. With Server Side Rendering, it loads the app before it reaches to the user, so it is faster than regular React bundle. 
  - With `async function getServerSideProps()`, every single time the user comes to the search page it rebuilds the page per request. With Static, it loads when the page is deployed and when the user logs in it is already loaded. Downside is that maybe this can get outdated quickly, where as with ServerSide it doesn't happen.
    
- **Env:**
  - Env variables are in next.config.js

- **React:**
  - If I have an object like `{
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.2423,
    zoom: 11,
  }`, by using `{...viewport}` I am *desempaquetando* the object for it to be as `width="100%", height="100%", latitude=37.7577` etc.
  
***

### Map Implementation:
- **Mapbox:**
  - Using react-map-gl. We need to get the Style URL and Access Token from Mapbox. 
  - To Allow movement through the map, I need to have a setState() and change it with onViewportChange().
  - Geolib allows to center the map in the average of all the locations I provided.   
 
  
***

### Tailwind CSS Stuff:
- **Images:**
  - When using `layout="fill"`, the Image will fill the entire parent. So I need to indicate in the div parent a `className="relative"` and also set a default height and width as `className="relative h-16 w-16"`
  - When doing the scroll image, we don't want images to overflow the size of the screen, so we use: `<div className="flex space-x-3 overflow-scroll">` and also, to hide the slide bar, we use the plugin tailwind-scrollbar.
  
- **Reusable classes:**
  - At styles/globals.css, I create a custom tailwind CSS style and then I can apply it to any other element. In this case, I used it in the search page by the name of "button" to give the `<p>` tag a button style by clearing it as `<p className="button">`. It looks cleaner and avoids cluttering the page. 

- **Aligning:**
  - By default, elements align as blocks. We need to use `className="flex"` in the container that has the elements.
  - When using `className="flex-grow"` the div takes as much space as possible.

- **Responsive:**
  - Grids:
    - In order to change the amount of columns a div has, we use dynamic format based on the screen size. For example, `className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"` says that for mobile(1), for small screens(2), for larger (3) and xl(4).

- **Calendar:**
  - React-date-range: Used DateRangePicker component from the library. Installation: `npm install --save react-date-range`

- **Loading Bar:**
  -Imported from @badrap/bar-of-progress. Used in App.js by importing the Router and listening the events. When the Router starts to change, the loading bar is activated. 