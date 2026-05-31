const fs = require('fs');
const path = require('path');

// Load all trip files
const tripsDir = path.join(__dirname, 'data', 'trips');
const eventsFile = path.join(__dirname, 'data', 'events', 'events.json');

const trips = [];
const files = fs.readdirSync(tripsDir).filter(f => f.endsWith('.json'));

for (const file of files) {
  const content = fs.readFileSync(path.join(tripsDir, file), 'utf8');
  try {
    const trip = JSON.parse(content);
    trips.push(trip);
  } catch (e) {
    console.error(`Error parsing ${file}: ${e.message}`);
    process.exit(1);
  }
}

// Sort by StartDate
trips.sort((a, b) => a.StartDate.localeCompare(b.StartDate));

// Load events
let events = [];
if (fs.existsSync(eventsFile)) {
  events = JSON.parse(fs.readFileSync(eventsFile, 'utf8'));
}

const output = {
  trips,
  events,
  meta: {
    totalTrips: trips.length,
    totalEvents: events.length,
    generatedAt: new Date().toISOString(),
    dateRange: {
      earliest: trips[0]?.StartDate || null,
      latest: trips[trips.length - 1]?.EndDate || null
    }
  }
};

fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(output, null, 2));
console.log(`Built data.json: ${trips.length} trips, ${events.length} events`);
