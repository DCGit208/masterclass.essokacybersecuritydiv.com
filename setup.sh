#!/bin/bash

# ECSD Masterclass Quick Setup Script
# This script automates the initial setup process

echo "🚀 ECSD Masterclass - Quick Setup"
echo "=================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if Node.js is installed
echo -e "${BLUE}Checking Node.js installation...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js 18+ first.${NC}"
    echo "Visit: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v)
echo -e "${GREEN}✓ Node.js $NODE_VERSION found${NC}"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed.${NC}"
    exit 1
fi

NPM_VERSION=$(npm -v)
echo -e "${GREEN}✓ npm $NPM_VERSION found${NC}"
echo ""

# Install dependencies
echo -e "${BLUE}Installing dependencies...${NC}"
npm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Dependencies installed successfully${NC}"
else
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi
echo ""

# Create .env.local file
echo -e "${BLUE}Setting up environment variables...${NC}"
if [ ! -f .env.local ]; then
    cp .env.example .env.local
    echo -e "${GREEN}✓ .env.local created from .env.example${NC}"
    echo -e "${BLUE}📝 Please edit .env.local with your actual configuration${NC}"
else
    echo -e "${BLUE}ℹ .env.local already exists, skipping...${NC}"
fi
echo ""

# Display next steps
echo -e "${GREEN}✅ Setup Complete!${NC}"
echo ""
echo "📋 Next Steps:"
echo "1. Edit .env.local with your actual configuration"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:3000 in your browser"
echo "4. Review README.md for full documentation"
echo "5. Check DEPLOYMENT.md when ready to deploy"
echo ""
echo -e "${BLUE}💡 Quick Commands:${NC}"
echo "  npm run dev     - Start development server"
echo "  npm run build   - Build for production"
echo "  npm start       - Start production server"
echo "  npm run lint    - Run ESLint"
echo ""
echo -e "${GREEN}Happy coding! 🚀${NC}"
