import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { readFileSync } from 'fs';
import { resolve, join } from 'path';
import Handlebars from 'handlebars';

import transporter from '@utils/transporter';
import prisma from '@utils/prisma';

const emailsDirectory = resolve(process.cwd(), 'src/emails');

const sendVerificationRequest = ({ identifier, url }) => {
  const emailFile = readFileSync(join(emailsDirectory, 'verify-email.html'), {
    encoding: 'utf-8',
  });
  const template = Handlebars.compile(emailFile);

  transporter.sendMail({
    from: `TripGuide ${process.env.EMAIL_FROM}`,
    to: identifier,
    subject: 'Verify your email address for Tripguide',
    html: template({
      url: process.env.NEXTAUTH_URL,
      signin_url: url,
      email: identifier,
    }),
  });
};

const sendWelcomeEmail = async ({ user }) => {
  const { email } = user;

  try {
    const emailFile = readFileSync(join(emailsDirectory, 'welcome.html'), {
      encoding: 'utf-8',
    });
    const template = Handlebars.compile(emailFile);
    await transporter.sendMail({
      from: `TripGuide ${process.env.EMAIL_FROM}`,
      to: email,
      subject: 'Welcome to Tripguide',
      html: template({
        base_url: process.env.NEXTAUTH_URL,
        support_email: process.env.SUPPORT_EMAIL,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export default NextAuth({
  pages: {
    signIn: '/',
    signOut: '/',
    error: '/',
    verifyRequest: '/',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      maxAge: 10 * 60, // 10 minutes
      sendVerificationRequest,
    }),
  ],
  events: {
    createUser: sendWelcomeEmail,
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.JWT_SECRET,
});
