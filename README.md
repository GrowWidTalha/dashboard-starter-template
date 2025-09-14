# Dashboard Starter Kit

A modern, full-featured dashboard starter kit built with Next.js 15, NextAuth.js v5, Prisma, and shadcn/ui components. This starter kit provides a complete authentication system, role-based access control, and a beautiful dashboard interface ready for customization.

## ✨ Features

### 🔐 Authentication & Security
- **Multi-provider Authentication**: Google, GitHub, and Email/Password
- **Two-Factor Authentication (2FA)**: Email-based 2FA with secure token generation
- **Role-based Access Control**: Admin and User roles with protected routes
- **Email Verification**: Secure email verification system
- **Password Reset**: Secure password reset with email tokens
- **Session Management**: Secure session handling with NextAuth.js v5

### 🎨 UI & Components
- **Modern Design**: Built with shadcn/ui components and Tailwind CSS
- **Responsive Layout**: Mobile-first responsive design
- **Dark/Light Mode**: Theme switching support with next-themes
- **Sidebar Navigation**: Collapsible sidebar with organized menu sections
- **Form Validation**: Zod schema validation with React Hook Form
- **Toast Notifications**: Beautiful toast notifications with Sonner

### 🗄️ Database & Data Management
- **Prisma ORM**: Type-safe database operations
- **PostgreSQL Support**: Production-ready database setup
- **Database Migrations**: Easy database schema management
- **Token Management**: Secure token generation and validation

### 🚀 Performance & Developer Experience
- **Next.js 15**: Latest Next.js with App Router and Turbopack
- **TypeScript**: Full TypeScript support
- **React Query**: Server state management with TanStack Query
- **ESLint**: Code linting and formatting
- **Hot Reload**: Fast development with Turbopack

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Authentication**: NextAuth.js v5 (beta)
- **Database**: PostgreSQL with Prisma ORM
- **UI Components**: shadcn/ui + Radix UI primitives
- **Styling**: Tailwind CSS v4
- **Forms**: React Hook Form + Zod validation
- **State Management**: TanStack Query (React Query)
- **Email**: Resend for transactional emails
- **Icons**: Lucide React + React Icons
- **Theme**: next-themes for dark/light mode

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dashboard-starter-kit
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/dashboard_starter"

   # NextAuth.js
   AUTH_SECRET="your-auth-secret-here"
   NEXTAUTH_URL="http://localhost:3000"

   # OAuth Providers
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"

   # Email Service (Resend)
   RESEND_API_KEY="your-resend-api-key"
   EMAIL="your-verified-email@domain.com"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   pnpm prisma generate

   # Run database migrations
   pnpm prisma db push

   # (Optional) Seed the database
   pnpm prisma db seed
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

Visit `http://localhost:3000` to see your dashboard!

## 🏗️ Project Structure

```
src/
├── actions/           # Server actions for authentication
├── app/              # Next.js App Router pages
│   ├── auth/         # Authentication pages
│   ├── dashboard/    # Dashboard pages
│   └── posts/        # Example posts page
├── components/       # React components
│   ├── auth/         # Authentication components
│   ├── ui/           # shadcn/ui components
│   └── ...           # Other components
├── config/           # Configuration files
├── data/             # Database queries
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── schemas/          # Zod validation schemas
└── middleware.ts     # Next.js middleware
```

## 🔧 Configuration

### Authentication Providers

The starter kit supports multiple authentication providers. Configure them in `src/auth.config.ts`:

- **Google OAuth**: Set up Google OAuth credentials
- **GitHub OAuth**: Set up GitHub OAuth credentials  
- **Email/Password**: Built-in credentials provider

### Database Schema

The Prisma schema includes:
- **User model**: User accounts with roles and 2FA support
- **Account model**: OAuth provider accounts
- **Token models**: Verification, password reset, and 2FA tokens

### Sidebar Configuration

Customize the sidebar navigation in `src/config/sidebar.ts`:

```typescript
export const sidebarConfig: SidebarSection[] = [
  {
    items: [
      { title: "Dashboard", url: "/dashboard", icon: Home },
      { title: "Posts", url: "/posts", icon: FileText },
    ]
  },
  // Add more sections...
]
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Available Scripts

```bash
# Development
pnpm dev          # Start development server with Turbopack

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Database
pnpm prisma generate    # Generate Prisma client
pnpm prisma db push     # Push schema changes
pnpm prisma studio      # Open Prisma Studio

# Code Quality
pnpm lint         # Run ESLint
```

## 🔒 Security Features

- **CSRF Protection**: Built-in CSRF protection with NextAuth.js
- **Secure Cookies**: HttpOnly, Secure, SameSite cookies
- **Token Expiration**: All tokens have expiration times
- **Password Hashing**: bcrypt for secure password storage
- **Rate Limiting**: Built-in rate limiting for auth endpoints
- **Input Validation**: Zod schemas for all user inputs

## 🎨 Customization

### Adding New Pages

1. Create a new page in `src/app/`
2. Add the route to `src/config/sidebar.ts`
3. Implement any necessary authentication checks

### Styling

- **Tailwind CSS**: Customize styles using Tailwind classes
- **CSS Variables**: Theme colors defined in `src/app/globals.css`
- **Component Variants**: Use CVA for component variants

### Database Schema

Extend the Prisma schema in `prisma/schema.prisma`:

```prisma
model YourModel {
  id        String   @id @default(cuid())
  // Add your fields
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Prisma](https://prisma.io/) - Database toolkit
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

---

**Happy coding!** 🚀