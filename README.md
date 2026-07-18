# Blogify

A full-stack blogging platform built with **Ruby on Rails API** and **React**. Users can register, create articles, comment, like posts, bookmark content, and manage their profiles. Administrators can moderate users and posts through a dedicated dashboard.

---

# 🚀 Tech Stack

## Backend

- Ruby 3.4
- Ruby on Rails 8 (API Only)
- PostgreSQL
- JWT Authentication
- Active Storage
- RSpec
- RuboCop

## Frontend

- React 19
- Vite
- React Router
- Axios
- TanStack Query (React Query)
- TailwindCSS

---

# ✨ Features

## Authentication

- User Registration
- Login
- Logout
- JWT Authentication
- Refresh Tokens
- Password Reset
- Email Verification

---

## User Profiles

Each user has:

- Username
- Display Name
- Bio
- Avatar
- Website
- GitHub
- LinkedIn

Users can:

- Edit Profile
- Upload Avatar
- Change Password
- View Their Articles
- View Bookmarked Posts

---

## Blog Posts

Each article contains:

- Title
- Subtitle
- Markdown Content
- Cover Image
- Published Date
- Reading Time
- Tags

Post actions:

- Create
- Save as Draft
- Publish
- Edit
- Delete
- Archive

---

## Comments

Supports nested comments.

- Comment on posts
- Reply to comments
- Edit comments
- Delete comments
- Like comments

---

## Likes

Users can like:

- Articles
- Comments

---

## Bookmarks

Users can save articles to read later.

---

## Categories

Example categories:

- Programming
- Ruby
- Rails
- React
- JavaScript
- AI
- Career
- Life

---

## Tags

Posts can have multiple tags.

Example tags:

- Rails
- React
- API
- PostgreSQL
- Docker
- Authentication
- JavaScript
- CSS

---

## Search

Search by:

- Title
- Content
- Author
- Category
- Tags

---

## Sorting & Filters

Sort articles by:

- Newest
- Oldest
- Most Popular
- Most Liked
- Most Commented

---

## User Dashboard

Users can view:

- Total Articles
- Drafts
- Published Articles
- Bookmarks
- Likes Received
- Comments Received

---

## Admin Panel

Administrators can:

- Manage Users
- Delete Posts
- Feature Articles
- Suspend Users
- Manage Categories
- Manage Tags

---

# 🗄 Database Models

- User
- Post
- Comment
- Category
- Tag
- PostTag
- Like
- Bookmark
- RefreshToken

---

# 🔗 Relationships

## User

- has_many Posts
- has_many Comments
- has_many Likes
- has_many Bookmarks

## Post

- belongs_to User
- belongs_to Category

- has_many Comments
- has_many Likes
- has_many Bookmarks

- has_many PostTags
- has_many Tags

## Comment

- belongs_to User
- belongs_to Post

- belongs_to ParentComment (optional)

- has_many Replies

## Tag

- has_many PostTags
- has_many Posts

---

# 🌐 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /login |
| POST | /register |
| POST | /logout |
| POST | /refresh |
| GET | /me |

---

## Posts

| Method | Endpoint |
|---------|----------|
| GET | /posts |
| GET | /posts/:id |
| POST | /posts |
| PATCH | /posts/:id |
| DELETE | /posts/:id |

---

## Comments

| Method | Endpoint |
|---------|----------|
| GET | /posts/:id/comments |
| POST | /posts/:id/comments |
| PATCH | /comments/:id |
| DELETE | /comments/:id |

---

## Likes

| Method | Endpoint |
|---------|----------|
| POST | /posts/:id/like |
| DELETE | /posts/:id/like |
| POST | /comments/:id/like |
| DELETE | /comments/:id/like |

---

## Bookmarks

| Method | Endpoint |
|---------|----------|
| POST | /posts/:id/bookmark |
| DELETE | /posts/:id/bookmark |
| GET | /bookmarks |

---

## Categories

| Method | Endpoint |
|---------|----------|
| GET | /categories |

---

## Tags

| Method | Endpoint |
|---------|----------|
| GET | /tags |

---

# 📁 React Project Structure

```
src/
│
├── assets/
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Button/
│   ├── Avatar/
│   ├── PostCard/
│   ├── PostList/
│   ├── CommentItem/
│   ├── CommentList/
│   ├── SearchBar/
│   └── Tag/
│
├── pages/
│   ├── Home/
│   ├── Login/
│   ├── Register/
│   ├── Profile/
│   ├── Post/
│   ├── Editor/
│   ├── Dashboard/
│   └── NotFound/
│
├── hooks/
├── contexts/
├── routes/
├── services/
├── utils/
└── App.jsx
```

---

# 📁 Rails Project Structure

```
app/
├── controllers/
├── models/
├── serializers/
├── services/
├── policies/
├── mailers/
├── jobs/
├── validators/
└── lib/
```

---

# ⭐ Stretch Features

- Rich Text Editor
- Markdown Preview
- Image Uploads
- Infinite Scrolling
- Dark Mode
- Email Notifications
- Follow Authors
- Trending Posts
- Reading History
- Reading Progress Bar
- Notifications
- Google OAuth
- GitHub OAuth
- Full-Text Search
- AI-generated Article Summaries
- Scheduled Publishing

---

# 🎯 Learning Goals

This project demonstrates:

- RESTful API Design
- Authentication with JWT
- Authorization (User/Admin Roles)
- Active Record Associations
- Many-to-Many Relationships
- Nested Resources
- Service Objects
- Pagination
- File Uploads
- React Routing
- Protected Routes
- State Management with React Query
- Form Validation
- Responsive Design
- Testing with RSpec and React Testing Library
- Clean Architecture
- Separation of Concerns

---

# 📌 Future Improvements

- Dockerize the application
- CI/CD with GitHub Actions
- Deploy Rails to Render/Fly.io
- Deploy React to Vercel
- Add Redis caching
- Background Jobs with Sidekiq
- WebSockets for real-time notifications
- Analytics Dashboard
- Unit and Integration Tests
- API Documentation with Swagger