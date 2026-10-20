# Reference solution

The Commander utility dispatches to three separate commands. The weather dashboard prompts for a city, sends a metric request, and displays temperature and description with Chalk. Supply your own OPENWEATHER_API_KEY. Network failures and missing files set a nonzero exit code.

## Files

- [`commands/greet.js`](solution/commands/greet.js)
- [`commands/fetch.js`](solution/commands/fetch.js)
- [`commands/read.js`](solution/commands/read.js)
- [`index.js`](solution/index.js)
- [`weather.js`](solution/weather.js)
- [`dashboard.js`](solution/dashboard.js)
- [`weather-index.js`](solution/weather-index.js)

## Run

From this activity's `solution` directory:

```sh
npm install
node index.js greet Yassine
node index.js fetch https://jsonplaceholder.typicode.com/posts/1
node index.js read package.json
node weather-index.js
```

These are reference implementations. The original assignment is preserved in [README.md](README.md).
