# Getting Started

[Overview](README.md) · [Find a solution](SOLUTIONS.md) · [Coverage](COVERAGE.md)

## 1. Get the repository

```sh
git clone https://github.com/Khadir-Yassine/bootcamp.git
cd bootcamp
```

Choose a week from [SOLUTIONS.md](SOLUTIONS.md), then open an activity's `solutions.md`. That guide identifies the correct source, run command, input and external requirements. There is no repository-wide package installation command.

## 2. Choose the runtime

| Implementation | Requirements | Where to run it |
| --- | --- | --- |
| Standalone JavaScript | Node.js 22+ recommended | The folder named in its solution guide |
| Browser HTML/CSS/JavaScript | A modern browser | Open the HTML file or serve the repository locally |
| Node/Express | Node.js 22+, npm, and any documented database | The activity's `solution/` directory |
| React | Node.js 22+, npm | The corresponding shared React workspace |
| Python | Python 3.10+ | The folder containing the documented entry point |
| PostgreSQL / MongoDB | The stated database tools and dataset | Follow the activity's setup and script order |

## 3. Start with a self-contained example

### Browser: Coloring Studio

From the repository root:

```sh
python -m http.server 8000
```

Visit `http://localhost:8000/week-01/day-05/projects/02-mini-project-coloring-game/index.html`. Select a palette color and draw; use white to erase or Clear canvas to reset. Many simple HTML examples also work by opening their file directly. API requests and module-based apps should use a server.

### Python: Rock, Paper, Scissors

```sh
cd week-12/day-02/projects/02-mini-project-rock-paper-scissors
python rock-paper-scissors.py
```

Use `p` to play, `s` for scores and `q` to quit. No package installation is needed. On systems where Python is named `python3` or `py`, use that command instead.

### React: Week 7 workspace

```sh
cd week-07/solutions
npm ci
npm run dev
```

Open the address printed by Vite. Each assignment guide tells you which tab and component to use. The other workspaces are [Week 9](week-09/solutions/README.md) and [Week 10 Day 1](week-10/day-01/solutions/README.md). Some Week 7 activities also require `npm run server` in a second terminal; details are in the workspace guide.

### Backend and databases

Open the selected activity's `solutions.md` before running its commands. Install packages in its `solution/` folder. Follow its database creation, schema and seed instructions in order. Database seed/reset scripts are for the dedicated learning database described in that guide.

For SQL exercises based on DVD Rental, obtain the original dataset through the [database reference](references/README.md). Synthetic fixtures used for implementation checks are labeled and do not reproduce the original dataset's exact titles or counts.

## Configuration

Some activities need Giphy, OpenWeather, Pexels or currency API credentials. Use your own key in the documented local configuration or UI. Copy an `.env.example` only where one is supplied and fill in its placeholders locally. Do not commit credentials; `.env` files and installed dependencies are ignored.

MongoDB examples require a running MongoDB service; transaction-based examples state when a replica set is required. PostgreSQL apps need their documented connection string and schema. Keep independently configured servers on their documented ports.

## Reading an assignment

1. `README.md`: original requirements and shared data.
2. `individual/*.md`: a particular prompt in a multi-part set, if provided.
3. `solutions.md`: approach, source links, run instructions and any interpretation of ambiguous requirements.
4. Runnable files: implementation to study and modify.
5. Day `summary.md` and `week-summary.md`: concepts and learning review.

For missing source material, see [Coverage](COVERAGE.md). For completed checks and their limits, see [Validation](VALIDATION.md). Optional tests remain available, but are not required to read or launch an exercise.
