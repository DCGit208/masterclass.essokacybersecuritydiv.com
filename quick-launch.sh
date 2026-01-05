#!/bin/bash

# CEH Elite V13 - Quick Placeholder Replacement Script
# This script replaces all placeholder URLs at once

echo "🚀 CEH Elite V13 - Placeholder Replacement"
echo "=========================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Get user inputs
echo -e "${BLUE}Enter your application form URL (Google Form, Typeform, etc.):${NC}"
read -p "Application URL: " APP_URL

echo ""
echo -e "${BLUE}Enter your Calendly booking URL:${NC}"
read -p "Calendly URL: " CALENDLY_URL

echo ""
echo -e "${BLUE}Enter cohort start date (e.g., March 15, 2026):${NC}"
read -p "Cohort Start: " COHORT_START

echo ""
echo -e "${BLUE}Enter application deadline (e.g., February 28, 2026):${NC}"
read -p "Deadline: " APP_DEADLINE

echo ""
echo -e "${BLUE}Enter countdown target in ISO format (e.g., 2026-03-15T00:00:00):${NC}"
read -p "Countdown Target: " COUNTDOWN_TARGET

echo ""
echo -e "${BLUE}Enter instructor phone number (e.g., +1 (555) 000-0000):${NC}"
read -p "Phone: " PHONE_NUMBER

echo ""
echo -e "${YELLOW}📝 Summary of changes:${NC}"
echo "  Application URL: $APP_URL"
echo "  Booking URL: $CALENDLY_URL"
echo "  Cohort Start: $COHORT_START"
echo "  Deadline: $APP_DEADLINE"
echo "  Countdown: $COUNTDOWN_TARGET"
echo "  Phone: $PHONE_NUMBER"
echo ""
read -p "Proceed with replacement? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}Aborted.${NC}"
    exit 1
fi

# Backup config file
echo -e "${BLUE}Creating backup...${NC}"
cp config/ceh-elite-v13.ts config/ceh-elite-v13.backup.ts
echo -e "${GREEN}✓ Backup created: config/ceh-elite-v13.backup.ts${NC}"

# Replace in config file
echo -e "${BLUE}Updating config file...${NC}"

# Escape special characters for sed
APP_URL_ESCAPED=$(echo "$APP_URL" | sed 's/[&/\]/\\&/g')
CALENDLY_URL_ESCAPED=$(echo "$CALENDLY_URL" | sed 's/[&/\]/\\&/g')
COHORT_START_ESCAPED=$(echo "$COHORT_START" | sed 's/[&/\]/\\&/g')
APP_DEADLINE_ESCAPED=$(echo "$APP_DEADLINE" | sed 's/[&/\]/\\&/g')
COUNTDOWN_TARGET_ESCAPED=$(echo "$COUNTDOWN_TARGET" | sed 's/[&/\]/\\&/g')
PHONE_NUMBER_ESCAPED=$(echo "$PHONE_NUMBER" | sed 's/[&/\]/\\&/g')

# Update config file
sed -i '' "s|applicationUrl: \"https://YOUR_APPLICATION_FORM_LINK\"|applicationUrl: \"$APP_URL_ESCAPED\"|g" config/ceh-elite-v13.ts
sed -i '' "s|bookingUrl: \"https://YOUR_BOOKING_LINK\"|bookingUrl: \"$CALENDLY_URL_ESCAPED\"|g" config/ceh-elite-v13.ts
sed -i '' "s|cohortStartDate: \"March 15, 2026\"|cohortStartDate: \"$COHORT_START_ESCAPED\"|g" config/ceh-elite-v13.ts
sed -i '' "s|applicationDeadline: \"February 28, 2026\"|applicationDeadline: \"$APP_DEADLINE_ESCAPED\"|g" config/ceh-elite-v13.ts
sed -i '' "s|countdownTarget: \"2026-03-15T00:00:00\"|countdownTarget: \"$COUNTDOWN_TARGET_ESCAPED\"|g" config/ceh-elite-v13.ts
sed -i '' "s|phone: \"+1 (555) 000-0000\"|phone: \"$PHONE_NUMBER_ESCAPED\"|g" config/ceh-elite-v13.ts

echo -e "${GREEN}✓ Config file updated${NC}"

# Build to verify
echo ""
echo -e "${BLUE}Building project to verify changes...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ SUCCESS! All placeholders replaced and build passed.${NC}"
    echo ""
    echo -e "${BLUE}Next steps:${NC}"
    echo "1. Review config/ceh-elite-v13.ts to verify changes"
    echo "2. Test locally: npm run dev"
    echo "3. Commit changes: git add . && git commit -m 'Launch: Replace placeholders with live URLs'"
    echo "4. Deploy: git push"
    echo ""
    echo -e "${YELLOW}Optional improvements:${NC}"
    echo "- Add instructor photo to /public/team/"
    echo "- Add hero video URL in config"
    echo "- Replace testimonials with real client feedback"
    echo "- Create OG image at /public/og-ceh-elite.jpg"
else
    echo ""
    echo -e "${RED}❌ Build failed. Restoring backup...${NC}"
    mv config/ceh-elite-v13.backup.ts config/ceh-elite-v13.ts
    echo -e "${YELLOW}Backup restored. Please check for errors.${NC}"
    exit 1
fi
