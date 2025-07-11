VR_tryOn

VR_tryOn is a virtual try-on web app that lets users experience how a clothing item would look on them — without ever leaving their room. Just upload a photo of yourself and the outfit you want to try, and let the app do the magic using RapidAPI's powerful processing. This project blends image processing and sleek frontend tech to offer an immersive and fun try-on experience — all inside your browser.

Demo Previews:
https://i.imghippo.com/files/zeip9795pM.png
https://i.imghippo.com/files/yi6413rc.png
https://i.imghippo.com/files/PyT4038gYw.png
https://www.imghippo.com/i/Qc1059YM.png

Setup Instructions

Clone the Repo:
Run this in your terminal:
git clone https://github.com/tanmay2612/VR_tryOn.git
Then:
cd VR_tryOn

Install the Dependencies:
Run:
npm install

Get a RapidAPI Key:
Sign up on https://rapidapi.com/ and grab your API key for the image processing service.

Configure Your Environment Variables:
In the root of the project, create a .env file and add:
RAPIDAPI_KEY=your-api-key-here

Features

Virtual Try-On: Upload a pic of yourself + clothing image and get an instant preview

Personalized Fit: Visualize how different outfits look before buying

Powered by RapidAPI: Backend image processing through an API

Clean UI: Simple, responsive frontend built for ease of use

Usage Guide

Start the App:
Run: npm start

Open in Browser:
Visit: http://localhost:3000

Upload Images:

A photo of yourself

A photo of the clothing item

Click "Try On":
App processes the images and generates a combined preview

Review & Repeat:
Try different styles and clothing photos as you like

Contributors

This version of VR_tryOn is now maintained by:

@tanmay2612

Originally inspired by a hackathon build and now improved with love.

