/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { PrismaClient } from '@prisma/client';

const global = {};

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'production') global.prisma = prisma;

export default prisma;
