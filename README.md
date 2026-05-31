# Travel Timeline - Verification Dashboard

Data verification tool for reviewing travel history scraped from Gmail.

## Structure

- `/data/trips/` - Individual trip JSON files (one per trip segment)
- `/data/events/events.json` - Events associated with trips
- GitHub Action merges all trip files into `/data.json` on push
- Static site reads `/data.json` and displays the timeline

## Adding/Editing Data

Edit or add JSON files in `/data/trips/`. Each file contains an array of trip objects.
Push to main and the GitHub Action will rebuild and deploy.

## Live Site

https://travel.aeroverra.com
