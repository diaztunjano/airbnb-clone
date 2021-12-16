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

### NextJS Consideration:
- **IMG Tag:** 
  - Instead of using normal html `<img src="image.jpg"/>`, we use Next.js `import Image from "next/image"`; because it optimizes the image into webp format which is smaller and faster to load. We need to create *next.config.js* file and write the source from where the image is being loaded. 
  
- **Static Rendering:** 
  - When including `async function getStaticProps()`, it tells Next.js to do server rendering. Normally, User get the React Bundle when entering the website. Next.js introduces a server between the user and React. First, the user makes a request to the Next.js server and it sends only the components that the website needs. With Server Side Rendering, everytime the user requests a site, it reloads from zero but it is still faster than regular React bundle. 
  
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
