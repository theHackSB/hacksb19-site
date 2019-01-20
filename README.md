# Hack SB's Landing Page
Hack SB is a 12 hour student organized hackathon for high school students. This repository contains the source code for the official landing page. 

![logo](https://hacksb.org/media/c-logo.png  "Logo Title Text 1")

# How it works
We using the classic HTML, CSS and JS to do make this landing page to keep things simple, small & minimal

# DevOps
In effort to keep the source code and the production build, we used some little tricks to save time for both the developer and the user. 
## CDN minification
Instead of minifying out code using webpack or parcel which would require a different type of a project arcuture, we used the Cloudflare's CDN service and installed a few scripts which will minify our code on the server and cache the page when offline using the Service Worker API.

# Backend
We believe in the serverless idology, therefore we used firebase realtime database to store the user information. We used firebase cloud functions to secure our database to restrict unwanted reads and writes to the DB. Using React js we were able to create a visualization of the data.
