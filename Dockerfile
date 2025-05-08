FROM node:18-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Set environment variables
ENV NEXTAUTH_SECRET="HABEMUS PAPAM"
ENV NEXTAUTH_URL="https://popeleoxiv.bio"
ENV SKIP_ENV_VALIDATION=1

# Build the application
#RUN NODE_OPTIONS="--experimental-json-modules" pnpm run build:fast
RUN NODE_OPTIONS="--experimental-json-modules" pnpm run build
# Production image, copy all the files and run next
FROM node:18-alpine AS runner

WORKDIR /app

# Install pnpm in the production image
RUN npm install -g pnpm

ENV NODE_ENV=production
ENV PORT=3000

# Copy built assets from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/public ./public

# Copy environment variables from builder stage
ENV NEXTAUTH_SECRET="HABEMUS PAPAM"
ENV NEXTAUTH_URL="http://localhost:3000"
ENV SKIP_ENV_VALIDATION=1

# Expose the port the app runs on
EXPOSE 3000

# Start the application
