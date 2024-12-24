---
title: "Pizza Near Me"
description: "A mobile-first app for finding local pizza establishments"
image: "pizza-near-me.png"
type: "Mobile Application"
href: "https://pizza-near.me"
date: "2024-02-01"
technologies: ["React Native", "React", "iOS Development", "Geolocation API", "Google Places API"]
featured: true
draft: false
---

## About This Project

Originally developed as a React Native iOS application with a companion React web app. While the iOS version never made it to the App Store due to infrastructure maintenance considerations, the web version serves as a practical tool for pizza discovery.

## Technical Details

Built using a multi-platform architecture:

### Mobile Application

- React Native (v0.76.2) for native iOS and Android development
- Native navigation using @react-navigation/native-stack
- Location services with react-native-geolocation-service
- Interactive maps via react-native-maps
- Custom UI components with react-native-vector-icons
- Platform-specific permission handling

### Web Application

- React 18 with TypeScript
- Vite for build tooling and development
- Progressive Web App capabilities
- Google Maps JavaScript API integration

### Backend Services

- Cloudflare Workers for serverless API endpoints
- Google Places API integration for restaurant data
- CORS-enabled REST API

## Features

- Location-based search using device geolocation
- Real-time distance calculations (iOS only)
- Mobile-optimized interface
- Restaurant details including (iOS only):
  - Operating hours
  - Distance from current location
  - Contact information
  - Ratings and reviews
- Responsive layout that adapts to both mobile and desktop views

## Development Journey

The project began as an iOS application built with React Native, aiming to provide a native experience for pizza discovery. While the iOS version was completed, the decision to focus on the web version was made to reduce ongoing maintenance overhead and provide broader accessibility across all devices. I learned a lot about the complexities of iOS development and learned that I have a vast amount to learn about the complexities of iOS development and React in general. Pouring through documentation and stackoverflow was a huge help.
