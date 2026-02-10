# Rooted

A privacy-first, end-to-end encrypted notes app where your notes are encrypted before they leave your device.
The server never sees plaintext. Not even admins. Not even the database.

This project exists to demonstrate real-world cryptography, secure auth, and clean full-stack engineering

### What this website does
- Write notes normally
- Notes are encrypted client-side
- Only encrypted data is stored in the database
- Decryption happens only on the client
- Without the user's key, the data is useless

## Tech Stack
### Frontend
- React / Next.js
- Client-side cryptography
- Clean, minimal UI

### Backend
- API routes
- JWT authentication

### Database
- Supabase
- Stores only encrypted notes

### Deployment
- Hosted on Vercel
- Production-ready setup

## Future ideas
- Key rotation
- Secure sharing between users
- Native client using the same crypto model

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
