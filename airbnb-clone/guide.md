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

### NextJS Consideration
- IMG Tag: Instead of using normal html `<img src="image.jpg"/>`, we use Next.js `import Image from "next/image"`; because it optimizes the image into webp format which is smaller and faster to load. We need to create *next.config.js* file and write the source from where the image is being loaded. 