# Travel and Tourism Management System

## Project Overview

This is a comprehensive web-based Travel and Tourism Management System built using the MERN stack (MongoDB, Express.js, and Node.js) with EJS as the templating engine. The system provides a platform for managing hotels, tours, bookings, and user interactions in the tourism industry.

## Technology Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Template Engine**: EJS
- **Frontend**: HTML, CSS, JavaScript
- **Authentication**: JWT (JSON Web Tokens)
- **AI Integration**: Google's Genai for chatbot functionality

## Key Features

### User Management

- Multi-role user system (Admin, Hotel Manager, Regular User)
- Authentication and authorization
- User profile management
- Auto sign-in functionality

### Hotel Management

- Comprehensive hotel listing and details
- Hotel filtering and search capabilities
- Hotel booking system
- Hotel manager dashboard

### Tour Management

- Tour packages listing
- Tour booking system
- Tour filtering and search
- Tour details with media support
- Tour availability management

### Booking System

- Integrated booking management for hotels and tours
- Booking history
- Booking analytics

### Additional Features

- Contact form system
- AI-powered chatbot for customer support
- Analytics dashboard for administrators
- Recommendation system
- Responsive design for multiple devices

## Project Structure

### Backend Components

- **Controllers**: Handle business logic for different entities

  - Analytics
  - Bookings
  - Contact
  - Hotels
  - Owners
  - Tours
  - Users

- **Models**: MongoDB schemas for data structure

  - Booking Model
  - Contact Model
  - Hotel Model
  - Owner Model
  - Tour Model
  - User Model

- **Middleware**:

  - Authentication
  - Auto Sign-in functionality

- **Routes**:
  - Dashboard Router
  - Hotels Router
  - Tours Router
  - User Router

### Frontend Organization

- **Views**: EJS templates for dynamic content rendering

  - Dashboard views (Admin, Hotel Manager, User)
  - Hotel views
  - Tour views
  - Partials (Header, Footer)

- **Static Assets**:
  - CSS styles (organized by feature)
  - JavaScript files (organized by functionality)
  - Images and Videos for hotels and tours

## Security Features

- Encrypted password storage using bcrypt
- JWT-based authentication
- Session management
- Protected routes and middleware authentication

## Data Management

The system uses MongoDB for data storage with the following collections:

- Users
- Hotels
- Tours
- Bookings
- Contact Forms
- Owners

## Integration Features

- Google's Genai API integration for chatbot
- RESTful API architecture
- Session-based user tracking
- File system integration for media management

## Development Tools

- Nodemon for development server
- Morgan for HTTP request logging
- Environment variable management with dotenv
- Cookie parsing and session management
- Serve-favicon for favicon handling
