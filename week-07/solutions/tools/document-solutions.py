"""Build source links and solution guides for the assigned React curriculum."""
from pathlib import Path
import os

ROOT=Path(__file__).resolve().parents[3]
def write(path,text):
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(text.strip()+'\n',encoding='utf-8')
def rel(source,target):return os.path.relpath(target,source.parent).replace('\\','/')
entries=[]
def guide(week,day,category,prefix,module,tab,explanation,checks):
    base=ROOT/f'week-{week:02}'/f'day-{day:02}'/category
    candidates=list(base.glob(prefix+'*'))
    if len(candidates)!=1:raise ValueError((base,prefix,candidates))
    folder=candidates[0];app=ROOT/(f'week-{week:02}/solutions' if week!=10 else 'week-10/day-01/solutions')
    out=folder/'solutions.md';title=(folder/'README.md').read_text(encoding='utf-8-sig').splitlines()[0].lstrip('# ')
    text=f'''# {title} — Solution

[Original assignment](README.md) · [Runnable workspace]({rel(out,app/'README.md')}) · [Implementation]({rel(out,app/'src'/module)})

## How to run

From `{app.relative_to(ROOT).as_posix()}`, run `npm ci`, then `npm run dev`. Open the local address printed by Vite and choose **{tab}**.

## Approach and implementation

{explanation}

## Check the result

{checks}

## Validation and dependencies

See the [workspace guide]({rel(out,app/'README.md')}) for the tests, API configuration, and network-dependent checks. The solution uses actual React components; the original assignment remains above for comparison.
'''
    write(out,text)
    original=folder/'README.md';content=original.read_text(encoding='utf-8-sig')
    if '[Working solution]' not in content:original.write_text(content.rstrip()+'\n\n## Working solution\n\n[Working solution](solutions.md) — runnable code, explanation, and verification steps.\n',encoding='utf-8')
    for individual in (folder/'individual').glob('*.md'):
        content=individual.read_text(encoding='utf-8-sig')
        if '[Working solution]' not in content:individual.write_text(content.rstrip()+'\n\n[Working solution](../solutions.md) · [Source code]('+rel(individual,app/'src'/module)+').\n',encoding='utf-8')
    entries.append((week,day,title,out,module))

guide(7,1,'exercises','08-','basics.jsx','basics',
'''`CelebrityCard` destructures the five props and renders a photo, title, description, and Wikipedia link. The exact Bob Dylan and Paul McCartney objects are mapped with their names as stable keys. Tailwind utility classes style each card. The planets array is mapped into a semantic unordered list with stable planet-name keys.''',
'''- Check both celebrity names, photos, descriptions, and working Wikipedia links.
- Count six planets and verify Mars, Venus, Jupiter, Earth, Saturn, and Neptune appear once each.''')
guide(7,1,'exercises','09-','basics.jsx','basics',
'''The JSX exercise renders `Hello World!`, a JSX-valued `myElement`, and `5 + 5` inside a sentence. `UserFavoriteAnimals` receives the array from its parent and maps it into keyed list items. `Exercise` renders the required heading, paragraph, link, form, image, and list. `styleHeader` supplies the specified inline style; the imported stylesheet supplies `.para`.''',
'''- Find the exact JSX messages and separate first/last-name headings.
- Check the four animals.
- Submit the simple form and inspect the blue heading and dark paragraph.''')
guide(7,1,'challenges','10-','basics.jsx','landing',
'''`Header`, `Card`, and `Contact` are reusable function components. The landing page includes a hero, three distinct feature cards, inline pictographic icons, anchor navigation, and a contact form. Tailwind grid utilities and media queries support narrow, tablet, and desktop screens. The contact form confirms submission locally; no unrequested email service is implied.''',
'''- Use Home, Features, and Contact navigation links.
- Resize the page and verify the feature cards collapse into one column.
- Submit a valid contact email and message, and check the local confirmation.''')
guide(7,3,'exercises','14-','forms.jsx','forms',
'''`BookForm` stores title, author, genre, and year in state, copies them to a submitted object, logs that object, and displays a success message. The contact `Form` tracks first name, last name, phone, and email. It uses custom validation before submission, swaps the form for the submitted data, and provides a reset that clears values and restores the form.''',
'''- Submit a book and check both the success text and console object.
- Try malformed phone/email values; the contact form must remain visible with errors.
- Submit valid contact values, verify the data replaces the form, then click Reset.''')
guide(7,3,'exercises','15-','state.jsx','state',
'''`Car` receives `{ name: "Ford", model: "Mustang" }`, keeps red in state, and renders a small `Garage`. `Events` implements the click alert, Enter-key input alert, and a functional ON/OFF toggle. `Phone` keeps the required Samsung Galaxy S20 data in state and changes black to blue immutably. `Color` begins red, alerts from its mount effect, and changes to blue on demand.''',
'''- Check “This car is red Mustang” and the small-garage message.
- Click the alert button, press Enter in the input, and toggle ON/OFF twice.
- Change the phone color and favorite color without changing the other fields.''')
guide(7,3,'exercises','16-','forms.jsx','forms / state',
'''`Clock` in `state.jsx` stores a Date and uses an interval to call `tick` once a second; cleanup clears that interval on unmount. The `Form` and reusable `Input` in `forms.jsx` implement first/last-name, phone, and email validation. `noValidate` disables native form validation so the custom regex checks and field errors are responsible for correctness. Phone validation additionally counts real digits.''',
'''- Select state to watch the live local-time display advance.
- Select forms, submit empty fields, then malformed email and punctuation-only phone values.
- Correct every field and confirm submission works.''')
guide(7,3,'exercises','17-','forms.jsx','forms',
'''`Forms` implements all staged requirements in a single final component: controlled `username` and `age`, a conditional greeting, submit alert, numeric-age error text, initialized textarea, and the Volvo-default car selector. Empty age is permitted until entered; invalid age blocks submission and displays an inline error rather than repeatedly alerting on each keystroke.''',
'''- Type a name and age and verify the greeting updates.
- Enter letters in age to see an error, then enter digits to clear it.
- Edit the textarea and change Volvo to another brand; submit to see the username alert.''')
guide(7,3,'challenges','18-','state.jsx','voting',
'''`Voting` initializes four language/vote objects with zero counts. Each button updates only the matching language through an immutable `map`, using the functional state updater so rapid clicks do not lose votes. The source typo “JavaSript” is corrected to “JavaScript” for the label.''',
'''- Vote for Python twice: its count becomes 2 while the others remain 0.
- Vote for each other language and check independent totals.''')
guide(7,4,'exercises','07-','errors.jsx','errors',
'''`CompassClock` is a class component with state for year, month, weekday, calendar day, hour, minute, and second. Mounting starts a one-second interval; unmounting clears it. Three circular scales rotate according to hours, minutes, and seconds, while a centered text readout remains upright. The year sits at the top left and the month at the bottom right.''',
'''- Check the displayed local date/time against your computer.
- Watch the seconds ring move and verify the year/month corner labels.
- Change tabs and return: the clock still works without accumulating timers.''')
guide(7,4,'challenges','08-','forms.jsx','forms',
'''`FormContainer` owns the values and passes data and handlers to the presentational `FormComponent`. `handleChange` reads checkbox `checked` values and all other input `value` properties. The preview updates as you type. Submission writes URL query parameters with `URLSearchParams`; checked dietary boxes become `on`, unchecked boxes are omitted, and the demo tab hash is preserved.''',
'''- Enter name, age, gender, destination, and dietary selections and watch the preview.
- Submit and inspect the URL query string for the values and checked-box `on` entries.''')
guide(7,4,'exercises','09-','errors.jsx','errors',
'''The first simulation wraps two `BuggyCounter` instances in one boundary; the second isolates each counter. Reaching 5 throws `I crashed!`. The intentionally unprotected third simulation is opt-in and demonstrates the whole React tree unmounting. `LifecycleColor` logs snapshots and post-update state, changes red to yellow after mounting, supports a blue button, and exposes a shouldComponentUpdate switch. Its child alerts during unmount when Delete is clicked.''',
'''- In the shared pair, take one counter to 5: both disappear into one fallback.
- In the separate pair, take one to 5: its sibling remains usable.
- Inspect lifecycle logs; delete the child to see its unmount alert.
- Enable the unprotected simulation only when ready to reload the app after its deliberate crash.''')
guide(7,4,'projects','10-','errors.jsx','errors',
'''`ErrorProject` retains independent image and description columns. “Get images” requests two dog images. The object replacement intentionally causes React's invalid-child render error inside a paragraph-level `ErrorBoundary`; surrounding controls and images remain available. `getDerivedStateFromError` sets the fallback and `componentDidCatch` records details. Event-handler errors require an explicit try/catch and are displayed separately because boundaries do not intercept event errors.''',
'''- Click Get images (internet required) and confirm two images load.
- Replace string with object: only that paragraph is replaced by the fallback.
- Fetch images again to prove the left column is still alive.
- Invoke event handler and see its caught error without a render crash.''')
guide(7,4,'exercises','11-','errors.jsx','errors',
'''`Modal` and `ErrorBoundary` are class components. Clicking Trigger error sets state so `Crash` throws on the next render; the boundary displays a centered error modal over a translucent overlay. `occurError` is also provided for explicitly marking failure. Close clears the boundary state; Reset demonstration clears the parent trigger. Escape closes the modal, and the close button receives focus.''',
'''- Click Trigger error and verify the modal and overlay.
- Close or press Escape, then reset the demonstration to trigger it again.''')
guide(7,5,'exercises','05-','data.jsx','data',
'''`server.js` exposes `/users` with the two required usernames and a separate `/api/customers/` route with the six supplied customers. Vite proxies those paths to port 3001. The class components fetch their own endpoint in `componentDidMount`, store results/loading/error state, and map keyed list items. Abort controllers prevent updates after unmounting.''',
'''- Start `npm run server` in a second terminal.
- Open the data tab and check both usernames and six customer names.
- Stop the backend and reload to verify an error appears instead of silently showing fake data.''')
guide(7,5,'exercises','06-','data.jsx','data',
'''`RouterExercise` uses BrowserRouter, NavLink, Routes, and Route for Home, Profile, and an intentionally crashing Shop. Each route has an error boundary. The next examples map the supplied posts JSON and the original nested profile JSON into social media, skills, and experience components. `Webhook` serializes the exact hardcoded payload and POSTs it to a user-provided webhook.site URL; response text and failures are visible and successful responses are logged.''',
'''- Navigate Home → Profile → Shop → Home; the shop failure remains isolated.
- Compare posts and nested profile sections to the local JSON files.
- Enter your own CORS-enabled webhook URL and send; inspect its dashboard and console.''')
guide(7,5,'exercises','07-','data.jsx','data',
'''The class `PostForm` supports two explicit modes. Fetch mode controls user/email and POSTs JSON to `/users/`. Axios mode controls userId/title/body, converts the numeric ID, and POSTs to `/posts`. Both log and display the returned object, with visible network errors. JSONPlaceholder simulates creation and does not persist records.''',
'''- Submit valid user/email and inspect the returned object.
- Submit the three-field Axios form and inspect userId/title/body plus the generated ID.
- Disconnect the network to verify a visible error.''')
guide(7,5,'projects','08-','data.jsx','data',
'''`PostList` and `UsersList` extend a common class-based lifecycle loader. It fetches the required JSONPlaceholder endpoints after mounting, holds an initially empty collection and loading/error state, and maps posts to title/body and users to name/email/city. Component unmounting aborts its request. Loading and unsuccessful HTTP responses are rendered explicitly.''',
'''- With internet available, check post titles/bodies and user names/emails/cities.
- Refresh with network throttling to observe Loading.
- Block an endpoint and check its error text.''')
guide(7,5,'challenges','09-','data.jsx','data',
'''`ServerChallenge` is a class component that loads `/api/hello` on mount. A controlled message form POSTs JSON to `/api/world`; the Express handler logs the received body and returns the exact required prefix plus the input value. The client displays the returned message immediately below the form.''',
'''- Run `npm run server` beside Vite.
- Verify Hello From Express, submit a message, and compare the echoed text in the UI and backend console.''')
guide(7,5,'challenges','10-','data.jsx','data',
'''`AutoCompletedText` is a class component with the specified `suggestions` and `text` state. It filters English country names case-insensitively by prefix, renders suggestions in an unordered list, and on selection copies the country to the input and empties the suggestion list. The full original country list is stored locally in `countries.js`.''',
'''- Type “mo” and choose Morocco; the input becomes Morocco and the list clears.
- Clear the text and verify no suggestions are shown.''')

# Exercises embedded in lesson folders must be discoverable too.
for day,prefix,module,tab,explanation,checks in [
(3,'02-','state.jsx','state','`Actor` stores firstName, lastName, and image URL in state and renders all three.','Check the actor name and image.'),
(3,'07-','data.jsx','data','The Star Wars `RemoteList` requests a list during componentDidMount and renders `results` using map, with loading, abort cleanup, and errors.','Open the data tab with internet access and find the Star Wars list.'),
(3,'08-','state.jsx','state','`Actor` reads its form on submit using FormData and replaces the actor state, updating the name and image.','Edit firstName, lastName, and image URL, then submit and compare the rendered actor.'),
(4,'04-','errors.jsx','errors','`MathOperation` divides two numbers. The click/submit handler catches zero-division errors and stores them in state; the following render throws them so ErrorBoundary can catch them. An error thrown only inside an event would bypass an error boundary.','Divide by zero to see the fallback; reset and divide by a nonzero number to see the result.')]:
    guide(7,day,'lessons',prefix,module,tab,explanation,checks)

guide(9,1,'exercises','05-','tasks.jsx','tasks',
'''`TaskProvider` shares reducer state and dispatch through context. `AddTask` dispatches trimmed text with a unique UUID. Tasks have id, text, and completed fields; completion toggles immutably and removal filters by ID. `TaskList` and each row consume the provider. The enhanced editor/filter controls are included in this shared final implementation.''',
'''- Add two tasks, complete one, remove the other, and confirm IDs keep actions attached to the correct row.''')
guide(9,1,'exercises','07-','hooks.jsx','hooks',
'''`ThemeProvider` stores light/dark state and exposes a toggle through context. `ThemeSwitcher` consumes the context and the provider applies the theme class. `CharacterCounter` uses refs to read the textarea and update its output directly during input, meeting the lesson's no-rerender requirement while keeping the count live.''',
'''- Toggle the theme twice and verify the page changes both times.
- Type and delete characters and compare the displayed count.''')
guide(9,1,'exercises','08-','tasks.jsx','tasks',
'''The shared task reducer implements add/remove actions for the required todo list, plus completion, edit, and filtering for subsequent exercises. Blank additions are rejected, every task uses an independent ID, and list updates return new arrays instead of mutating previous state.''',
'''- Add two identically named tasks, remove one, and verify the second remains.''')
guide(9,1,'challenges','09-','tasks.jsx','tasks',
'''The enhanced task manager extends the context/reducer solution. Clicking task text opens an input backed by an edit ref; submit dispatches EDIT_TASK. FILTER_TASKS changes the reducer's filter, and a selector derives the visible list without deleting hidden tasks. Save, cancel, complete, and remove all act by task ID.''',
'''- Add two tasks, complete one, and switch between all/active/completed.
- Click a task, edit it, save, and check that switching filters retains the update.
- Cancel an edit and verify the original text remains.''')
guide(9,1,'projects','06-','weather.jsx','weather',
'''The two React Router pages share selected city, weather, forecast, favorites, units, and errors. Tel Aviv (location key 215854) is the default. Debounced autocomplete accepts English letters, requests matching cities, then fetches current conditions and five-day forecast in parallel. A per-session request cache reduces provider usage. Favorites retain location ID, name, and last-fetched current conditions in localStorage; selecting one navigates back to weather and refreshes. Celsius/Fahrenheit and light/dark switches are included.

The assignment requires AccuWeather: enter your own key in the configuration form. This integration does not replace live weather with fabricated values. Cached favorites are explicitly labelled as last fetched. No deployment credentials or service key were supplied, so the code/build is provided here; external hosted deployment and authenticated live API verification remain user-configured steps.''',
'''- Supply an AccuWeather key and check Tel Aviv and the five-day forecast.
- Search London, choose a suggestion, save it, then reload and visit Favorites.
- Click the favorite to return to its details; toggle units and theme.
- Try non-English input and an invalid key; each produces a clear error.''')
for prefix,explanation in [('01-','`CharacterCounter` updates a DOM output through refs without rerendering on each key. `SmoothScroll` references a target heading and calls scrollIntoView with smooth behavior. `DataFetcher` stores the response in a ref for the life of the component mount; reading the cached value does not fetch again. Its abort controller cleans up on unmount.'),('03-','`ContextCounter` provides count/dispatch to a child through context. `ThemeProvider` supplies light/dark state and toggle. `Authentication` provides a user or null, and AuthView switches between Login and a welcome/logout state. Authentication is explicitly a local simulation.'),('04-','`counterReducer` handles increment/decrement. The task reducer handles add, complete, remove, edit, and filter actions. `cartReducer` combines product quantities and computes the total with a pure selector. The task implementation is in tasks.jsx; cart and counter interfaces are in hooks.jsx.')]:
    guide(9,1,'lessons',prefix,'hooks.jsx','hooks / tasks',explanation,'Exercise each control and run `npm test` to verify the reducer transitions independently of the UI.')

concepts={
(2,'04-'):'''A video home page separates major layout regions (Header, Sidebar, VideoGrid) from reusable SearchBar, VideoThumbnail, and SubscribeButton components. See the [annotated component sketch](../../../solutions/component-map.svg). Red outlines denote layout regions; blue outlines denote reusable children. This is a labelled reconstruction, not a claim that a live YouTube screenshot was captured.''',
(2,'05-'):'''For the available AutoBarista dashboard brief, use Header(title), Sidebar(items), DashboardLayout(children), MetricCard(label,value,unit), HardwareStatusGrid(devices), StatusRow(deviceName,status,indicatorColor), RobotArmStatus(temperature,task), and OrderQueue(orders,onServe). Data and callbacks belong to the nearest parent that coordinates the children. The separately referenced generated cover image is absent from the archived assignment, so this decomposition follows the written dashboard requirements.''',
(2,'06-'):'''The component tree is CoffeeOrderScreen → UserWelcome(name), DrinkList(selected,onSelect), RobotStatus(busy), BaseButton(text,action,disabled). The parent owns selected drink and busy state. Clicking Brew makes the robot Busy, disables the button, then restores Ready after a simulated three-second brew.''',
(3,'04-'):'''`BaseButton({text,color,action})` renders a real button using its color prop and runs action on click. A disabled prop supports busy states. The same component is reused for ordering, maintenance, serving, and restocking.''',
(3,'05-'):'''`RobotArmStatus` passes the fixed values 45°C and Moving to cup into separate DataDisplay children with labels. Props flow from parent to children; the children only render their label/value interface.''',
(3,'06-'):'''`HardwareStatusGrid` composes only Card and StatusRow: Hardware Health contains Dobot Arm (Online, green), Tuya Fingerbot (Asleep, yellow), and Coffee Machine (Offline, red). Status text accompanies colors so meaning is not conveyed by color alone.''',
(4,'04-'):'''`SessionBrewCounter` initializes brewCount to 0. Completing a brew uses the functional updater count => count + 1. The state lasts for the mounted session and resets on remount; the integrated machine also increments its completion counter only after delivery finishes.''',
(4,'05-'):'''AutoBarista stores maintenance as a boolean. Toggle maintenance flips it through the reducer, updates the warning panel, and disables new orders while ON. An already running cycle may complete; only new starts are blocked. The toggle stays accessible so maintenance can be turned OFF.''',
(4,'06-'):'''`OrderQueue` starts with []. After two Add Random Order clicks it holds [orderA, orderB], each with a UUID and drink. Serving orderA creates a filtered new array [orderB]. Independent IDs distinguish even two orders of the same drink.''',
(5,'04-'):'''The final tree is AutoBarista → Header, DashboardLayout → Sidebar and main sections → operations Card, HardwareStatusGrid, RobotArmStatus, OrderQueue, CoffeeOrderScreen, SessionBrewCounter. The reducer lives in the composition root for machine-wide state; each independent queue or selection keeps its own state.''',
(5,'05-'):'''`CheckSystemHealth(deviceName, connections)` replaces three repetitive checks with a parameterized lookup returning {deviceName, online}. A real integration can inject asynchronous adapters by device name instead of duplicating validation and status mapping. The supplied map makes the exercise deterministic without pretending to contact real hardware.''',
}
for (day,prefix),explanation in concepts.items():guide(9,day,'exercises',prefix,'autobarista.jsx','autobarista',explanation,'Open AutoBarista and exercise the corresponding panel. All hardware behavior is labelled and implemented as a local learning simulation.')
guide(9,5,'projects','06-','autobarista.jsx','autobarista',
'''`coffeeReducer` models an explicit state machine. ORDER succeeds only while Idle, in stock, and outside maintenance; it decrements cups once and changes status to Brewing. An effect schedules delivery after exactly 3 seconds; another schedules Idle after 1.5 seconds. Cleanup cancels timers on unmount. FINISH increases the session brew count. Repeated clicks cannot consume extra cups while busy. At zero cups the order button is replaced by the exact red warning; Restock adds ten cups.''',
'''- Start with 10 cups/Idle. Simulate Order: cups become 9 and status Brewing.
- After 3 seconds check Delivering, then Idle after 1.5 more seconds.
- Exhaust all cups and check “Out of Cups! Please Restock.” replaces the order button.
- Restock and confirm ordering returns; verify maintenance blocks new orders.''')

guide(10,1,'challenges','04-','Calculator.jsx','calculator',
'''The controlled number inputs are explicitly converted with Number so addition cannot concatenate strings. The selected operation delegates to a pure calculate function. Missing, invalid, or infinite values and division by zero produce visible errors; valid results use an output element. All four bonus operations are supported.''',
'''- Add 2 and 3 to get 5; multiply 1.5 and −2 to get −3.
- Divide by zero and check the error. Then correct the divisor and verify recovery.''')
guide(10,1,'projects','02-','Gallery.jsx','gallery',
'''The gallery uses React Router with four category links plus /search/:query. Pexels requests use per_page=30 with pagination, abort cleanup, loading/empty/error states, lazy-loaded images, attribution, and hover transitions. Search queries are URL encoded. Supply your own Pexels key in the session-only configuration field; no credential is committed. Live API requests need a valid key and internet access.''',
'''- Enter a valid Pexels key, visit each category, and search another topic.
- Check up to 30 matching images per response, photo attribution, and hover zoom.
- Use Next/Previous and confirm the page changes; invalid keys show an error.''')
guide(10,1,'projects','03-','Quotes.jsx','quotes',
'''The original assignment's QuotesDatabase is stored locally. The initial quote is random. nextQuoteIndex chooses a nonzero offset modulo the quote count, guaranteeing the immediate previous quote cannot repeat. Each click changes the background and coordinated quote/button colors; the colors also avoid immediate repeats.''',
'''- Click New quote repeatedly and verify the author, quote, background, and button update.
- Run npm test to verify the selection cannot immediately repeat at boundary random values.''')

for week in [7,9,10]:
    group=[e for e in entries if e[0]==week]
    base=ROOT/f'week-{week:02}';out=base/('SOLUTIONS.md' if week!=10 else 'day-01/SOLUTIONS.md')
    lines=[f'# Week {week}'+(' / Day 1' if week==10 else '')+' — Working React Solutions','', 'Runnable React source and English explanations are linked for every archived assignment in this scope. Original instructions are retained.','', '| Day | Assignment | Source |','| --- | --- | --- |']
    for _,day,title,path,module in group:lines.append(f'| {day} | [{title}]({rel(out,path)}) | `{module}` |')
    lines+=['','## Verification','', 'Production builds and focused behavior tests are documented in the workspace README. API-key services need user-provided credentials; unseen quizzes and empty scheduled days have no invented answers.']
    write(out,'\n'.join(lines))
    for day in set(e[1] for e in group):
        day_readme=base/f'day-{day:02}'/'README.md';text=day_readme.read_text(encoding='utf-8-sig')
        if '## Working solutions' not in text:
            links='\n'.join(f'- [{title}]({rel(day_readme,path)})' for _,d,title,path,_ in group if d==day)
            day_readme.write_text(text.rstrip()+'\n\n## Working solutions\n\n'+links+'\n',encoding='utf-8')
write(ROOT/'week-08/SOLUTIONS.md','# Week 8 — Assignment Availability\n\nThe archived week contains Project X scheduling and an Eid celebration item, but no implementation brief or exercise requirements. No project solution is invented. Existing daily summaries and original schedule files are retained.\n')
print(f'Documented {len(entries)} assignment and lesson folders.')
