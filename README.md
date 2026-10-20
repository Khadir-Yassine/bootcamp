# Full-Stack Development Bootcamp

**Runnable solutions, English explanations, and a week-by-week learning archive.**

JavaScript · React · Node.js · Express · MongoDB · PostgreSQL · Python

This repository follows the Geeks Institute bootcamp curriculum in Casablanca. Original exercise briefs sit alongside worked implementations, daily learning notes, and weekly reviews.

**12 weeks · 79 scheduled days · 343 archived course pages · 142 assignment pages**

[Browse solutions](SOLUTIONS.md) · [Getting started](GETTING_STARTED.md) · [Coverage and missing content](COVERAGE.md) · [Full curriculum](CONTENTS.md)

## Where to start

| I want to… | Open |
| --- | --- |
| Find and run a solved exercise | [Solutions by week](SOLUTIONS.md) → choose a day → open `solutions.md` |
| Learn how to install or start a project | [Getting started](GETTING_STARTED.md), then the activity's run instructions |
| Read the original assignment | The activity's `README.md` |
| Open one exercise from a larger set | The activity's `individual/` folder; its documents link to the shared solution |
| Review what a day or week covers | `day-XX/summary.md` or `week-XX/week-summary.md` |
| Understand what is available and what is missing | [Coverage](COVERAGE.md) and [source availability](CONTENT_STATUS.md) |
| Inspect previously completed checks | [Validation record](VALIDATION.md) |

## Curriculum and solutions

| Week | Topics | Implementations | Review |
| --- | --- | --- | --- |
| [01](week-01/README.md) | JavaScript fundamentals, DOM, events, forms | [Solutions](week-01/SOLUTIONS.md) | [Summary](week-01/week-summary.md) |
| [02](week-02/README.md) | Advanced JavaScript, arrays, objects, classes | [Solutions](week-02/SOLUTIONS.md) | [Summary](week-02/week-summary.md) |
| [03](week-03/README.md) | Async JavaScript, APIs, professional skills | [Solutions](week-03/SOLUTIONS.md) | [Summary](week-03/week-summary.md) |
| [04](week-04/README.md) | Node.js, Express, MongoDB | [Solutions](week-04/SOLUTIONS.md) | [Summary](week-04/week-summary.md) |
| [05](week-05/README.md) | Mongoose, PostgreSQL, SQL | [Solutions](week-05/SOLUTIONS.md) | [Summary](week-05/week-summary.md) |
| [06](week-06/README.md) | Database relationships, restaurant REST API | [Solutions](week-06/SOLUTIONS.md) | [Summary](week-06/week-summary.md) |
| [07](week-07/README.md) | React components, state, forms, routing | [Solutions](week-07/SOLUTIONS.md) | [Summary](week-07/week-summary.md) |
| [08](week-08/README.md) | Scheduled Project X week | [Source status](week-08/SOLUTIONS.md) | [Summary](week-08/week-summary.md) |
| [09](week-09/README.md) | React hooks, reducers, application projects | [Solutions](week-09/SOLUTIONS.md) | [Summary](week-09/week-summary.md) |
| [10](week-10/README.md) | React projects, Python fundamentals and OOP | [Solutions](week-10/SOLUTIONS.md) | [Summary](week-10/week-summary.md) |
| [11](week-11/README.md) | Scheduled project and exposition week | [Source status](week-11/SOLUTIONS.md) | [Summary](week-11/week-summary.md) |
| [12](week-12/README.md) | Python Circle and console games | [Solutions](week-12/SOLUTIONS.md) | [Summary](week-12/week-summary.md) |

## Try a project

| Project | What it demonstrates | Run guide |
| --- | --- | --- |
| Coloring Studio | DOM creation, color selection, pointer drawing, erasing | [Browser app](week-01/day-05/projects/02-mini-project-coloring-game/solutions.md) |
| Pocket Percussion | Keyboard/click events and local HTML audio | [Browser app](week-01/day-05/projects/03-mini-project-drumset/solutions.md) |
| Robo-Friends Search | Collection filtering and dynamic rendering | [JavaScript project](week-02/day-05/projects/01-mini-project-robo-friends-search/solutions.md) |
| Restaurant API | Express routes, controllers and PostgreSQL models | [Backend project](week-06/day-02/projects/01-mini-project/solutions.md) |
| Enhanced Task Manager | React hooks and application state | [React project](week-09/day-01/challenges/09-daily-challenge-enhanced-task-manager/solutions.md) |
| Rock, Paper, Scissors | Python classes, validated input and score tracking | [Console game](week-12/day-02/projects/02-mini-project-rock-paper-scissors/solutions.md) |

## How the files are organized

```text
bootcamp/
├── README.md                  # Repository overview
├── SOLUTIONS.md               # Main implementation index
├── GETTING_STARTED.md         # Runtime and setup guide
├── COVERAGE.md                # Assignment coverage and source gaps
├── CONTENTS.md                # Complete archived curriculum
├── references/                # Attachment references and transcriptions
└── week-XX/
    ├── README.md              # Week navigation
    ├── SOLUTIONS.md           # Week implementation index
    ├── week-summary.md        # Weekly learning review
    └── day-XX/
        ├── README.md          # Day navigation
        ├── summary.md         # Daily learning notes
        └── exercises/         # Also: lessons/, challenges/, projects/, quizzes/
            └── NN-activity/
                ├── README.md       # Original brief
                ├── solutions.md    # Explanation, source links and run command
                ├── individual/     # Separate prompts for multi-part exercises
                └── …               # Runnable source or solution/ subfolder
```

Some exercises have `solution.js`, `solutions.js`, `solution.py`, SQL scripts or browser HTML directly beside their brief. Backend apps usually use `solution/`. React implementations share the workspaces at [`week-07/solutions`](week-07/solutions/README.md), [`week-09/solutions`](week-09/solutions/README.md) and [`week-10/day-01/solutions`](week-10/day-01/solutions/README.md); each assignment guide names its component and screen.

## Implementation status

Every archived exercise, challenge and project page has a linked solution or an explicit availability note. This includes embedded lesson exercises. Multi-part assignments can share one implementation bundle; a guide count is not an individual exercise count.

Some original pages contain no brief, some quizzes expose only their first question, and open-choice projects implement one permitted option. API apps can require your own key; database projects require their documented service. These cases are listed in [Coverage](COVERAGE.md). Personal reflection answers are labeled examples, and platform quizzes have not been submitted.

## Sources

Course material originates from [Geeks Institute](https://www.geeks.institute/). Original references remain linked; implementations and English study explanations were added for this repository. See [Sources and attribution](SOURCES.md) and the [reference library](references/README.md).
