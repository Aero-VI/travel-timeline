# Travel Timeline

Data verification dashboard for Nicholas's travel history (2022-2026).

- **Site:** https://travel.aeroverra.com
- **Raw data:** https://travel.aeroverra.com/data.json

## Architecture

- `/data/trips/` - One JSON file per trip
- `/data/events/` - Events associated with trips
- `/build.js` - Merges trip+event files into `/data.json`
- `/index.html` - Review dashboard
- `/.github/workflows/build.yml` - Auto-rebuilds data.json on push to /data/

## Adding/Editing Data

Edit or add JSON files in `/data/trips/`. The GitHub Action will auto-rebuild `data.json`.
