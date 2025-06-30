# Newsletter System Documentation

## Overview
This newsletter system allows users to subscribe to your blog updates with email validation, duplicate prevention, and admin management capabilities.

## Features
- ✅ Email validation and duplicate prevention
- ✅ SQLite database with Prisma ORM
- ✅ Interactive signup form with real-time feedback
- ✅ Toast notifications for user feedback
- ✅ Admin panel to view subscribers
- ✅ CSV export functionality
- ✅ Responsive design

## Database Setup

### 1. Install Dependencies
```bash
npm install prisma @prisma/client
```

### 2. Initialize Database
```bash
npx prisma generate
npx prisma db push
```

### 3. Database Schema
The system uses a `NewsletterSubscriber` model with the following fields:
- `id`: Unique identifier (CUID)
- `email`: User's email address (unique)
- `createdAt`: Subscription timestamp
- `updatedAt`: Last update timestamp
- `isActive`: Subscription status

## API Endpoints

### POST /api/newsletter
Subscribe a new email to the newsletter.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Inscription réussie ! Vous recevrez bientôt nos actualités."
}
```

### GET /api/newsletter
Get all active newsletter subscribers (admin only).

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "clx...",
      "email": "user@example.com",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "count": 1
}
```

## Components

### NewsletterSignup
A reusable component for newsletter signup forms.

**Props:**
- `className`: Additional CSS classes
- `title`: Form title (default: "Soyez les premiers informés")
- `description`: Form description
- `placeholder`: Email input placeholder
- `buttonText`: Submit button text

**Usage:**
```tsx
import { NewsletterSignup } from '@/components/newsletter-signup'

<NewsletterSignup 
  title="Join Our Newsletter"
  description="Stay updated with our latest content"
/>
```

## Admin Panel

### Access Admin Panel
Visit `/admin/newsletter` to access the admin panel.

**Features:**
- View all subscribers
- Export subscribers to CSV
- Real-time statistics
- Responsive table design

## Customization

### Styling
The newsletter component uses Tailwind CSS classes and can be customized by:
1. Modifying the component's className prop
2. Updating the component's internal styles
3. Using CSS custom properties

### Validation
Email validation is handled by Zod schema. You can modify the validation rules in:
- `hooks/use-newsletter.ts` (client-side)
- `app/api/newsletter/route.ts` (server-side)

### Database
To switch to a different database (PostgreSQL, MySQL):
1. Update `prisma/schema.prisma`
2. Change the `provider` in the datasource
3. Update the connection URL
4. Run `npx prisma db push`

## Development

### Running the Development Server
```bash
npm run dev
```

### Database Commands
```bash
# Generate Prisma client
npx prisma generate

# Push schema changes
npx prisma db push

# Open Prisma Studio (database GUI)
npx prisma studio

# Reset database
npx prisma db push --force-reset
```

### Environment Variables
Create a `.env` file for database configuration:
```env
DATABASE_URL="file:./dev.db"
```

## Production Deployment

### Database
For production, consider using:
- **Vercel Postgres** (if deploying on Vercel)
- **PlanetScale** (MySQL)
- **Supabase** (PostgreSQL)
- **Railway** (PostgreSQL)

### Environment Setup
1. Set up your production database
2. Update `DATABASE_URL` in your environment variables
3. Run `npx prisma db push` to create tables
4. Deploy your application

## Security Considerations

### Rate Limiting
Consider implementing rate limiting for the newsletter API:
```typescript
// Example with a simple in-memory store
const rateLimit = new Map()

// In your API route
const clientIP = request.headers.get('x-forwarded-for') || 'unknown'
const now = Date.now()
const windowMs = 15 * 60 * 1000 // 15 minutes
const maxRequests = 5

const requests = rateLimit.get(clientIP) || []
const validRequests = requests.filter(time => now - time < windowMs)

if (validRequests.length >= maxRequests) {
  return NextResponse.json(
    { success: false, message: 'Too many requests' },
    { status: 429 }
  )
}

validRequests.push(now)
rateLimit.set(clientIP, validRequests)
```

### Email Validation
The system includes:
- Client-side validation with Zod
- Server-side validation
- Duplicate email prevention
- Proper error handling

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure the database file exists
   - Check file permissions
   - Verify the DATABASE_URL

2. **Prisma Client Not Generated**
   - Run `npx prisma generate`
   - Restart your development server

3. **API Route Not Found**
   - Ensure the file is in the correct location: `app/api/newsletter/route.ts`
   - Check for TypeScript compilation errors

4. **Toast Notifications Not Working**
   - Ensure `<Toaster />` is added to your layout
   - Check that `sonner` is installed

### Debug Mode
Enable debug logging by adding to your `.env`:
```env
DEBUG=prisma:*
```

## Support
For issues or questions, check:
1. Prisma documentation: https://pris.ly/docs
2. Next.js API routes: https://nextjs.org/docs/api-routes/introduction
3. Zod validation: https://zod.dev/ 