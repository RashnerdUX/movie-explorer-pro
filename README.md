# 🎬 Movie Finder

A modern, responsive movie discovery application built with React that helps users find movies without any hassle. Search through thousands of movies, view trending titles, and discover new favorites with a sleek, intuitive interface.

## ✨ Features

- **🔍 Real-time Search**: Search for movies with debounced input for optimal performance
- **📈 Trending Movies**: View the most searched movies by the community
- **🎯 Popular Movies**: Browse popular movies sorted by popularity
- **⭐ Movie Details**: View ratings, genres, and language information
- **📱 Responsive Design**: Optimized for all screen sizes
- **🎨 Modern UI**: Clean, gradient-based design with smooth animations
- **⚡ Fast Loading**: Optimized with loading states and error handling

## 🚀 Live Demo

🌐 **[View Live Application](https://movie-explorer-pro.vercel.app/)**

*Replace with your actual deployment URL*

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Hooks (useState, useEffect)
- **HTTP Client**: Fetch API
- **Database**: Appwrite (for search analytics)
- **API**: The Movie Database (TMDB)
- **Utilities**: react-use (for debouncing)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/movie-finder.git
   cd movie-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔧 Environment Setup

### TMDB API Setup
1. Visit [The Movie Database](https://www.themoviedb.org/)
2. Create an account and request an API key
3. Add your API key to the `.env` file

### Appwrite Setup
1. Create an [Appwrite](https://appwrite.io/) account
2. Create a new project
3. Set up a database with a collection for search analytics
4. Collection should have the following attributes:
   - `searchTerm` (string)
   - `count` (integer)
   - `movie_id` (integer)
   - `poster_data` (string)
5. Add your Appwrite credentials to the `.env` file

## 📁 Project Structure

```
src/
├── components/
│   ├── Moviecard.jsx      # Individual movie card component
│   ├── search.jsx         # Search input component
│   └── spinner.jsx        # Loading spinner component
├── App.jsx                # Main application component
├── appwrite.jsx           # Appwrite database functions
├── index.css              # Global styles and Tailwind config
├── main.jsx               # React app entry point
└── App.css                # Component-specific styles
```

## 🎯 Key Features Explained

### Search Functionality
- **Debounced Search**: 500ms delay to prevent excessive API calls
- **Real-time Results**: Updates as you type
- **Search Analytics**: Tracks popular search terms using Appwrite

### Trending System
- Displays top 5 most searched movies
- Updates based on user search behavior
- Shows search count and movie posters

### Movie Cards
- **Rating System**: 5-star rating converted from TMDB's 10-point scale
- **Genre Display**: Shows primary genre for each movie
- **Language Info**: Displays original language
- **Poster Images**: High-quality movie posters with fallback

## 🎨 Design System

The app uses a custom design system built on Tailwind CSS:

- **Colors**: Dark theme with purple gradients
- **Typography**: DM Sans for body text, Bebas Neue for display
- **Layout**: Responsive grid system
- **Components**: Reusable card-based design

## 📱 Responsive Design

- **Mobile**: Single column layout
- **Tablet**: 2-3 column grid
- **Desktop**: 4 column grid
- **Large screens**: Centered with max-width container

## 🔄 API Integration

### TMDB API Endpoints Used:
- `/discover/movie` - Popular movies
- `/search/movie` - Movie search
- `/genre/movie/list` - Genre mapping

### Appwrite Functions:
- `updateSearchCount()` - Tracks search analytics
- `getTrendingMovies()` - Retrieves trending movies

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set environment variables in Netlify dashboard

### Vercel
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
The app can be deployed to any static hosting service that supports React apps.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for the movie data
- [Appwrite](https://appwrite.io/) for the backend services
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [React](https://reactjs.org/) for the frontend framework
- [JSMasteryPro](https://jsmastery.com) for the tutorial

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or contact [akhigbek6@gmail.com](mailto:akhigbek6@gmail.com).

---

⭐ **If you found this project helpful, please consider giving it a star!**
