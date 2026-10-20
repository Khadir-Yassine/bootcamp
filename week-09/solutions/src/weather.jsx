import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
export function WeatherApp() {
  return (
    <BrowserRouter>
      <WeatherState />
    </BrowserRouter>
  );
}
function WeatherState() {
  const navigate = useNavigate();
  const [key, setKey] = useState(
    () => sessionStorage.getItem("accuweather-key") || "",
  );
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([]);
  const [city, setCity] = useState({
    Key: "215854",
    LocalizedName: "Tel Aviv",
  });
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("bootcamp-weather-favorites-v1") || "[]",
      );
    } catch {
      return [];
    }
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [metric, setMetric] = useState(true);
  const [dark, setDark] = useState(false);
  const cache = useRef(new Map());
  async function request(path, signal) {
    const cacheKey = `${key}:${path}`;
    if (cache.current.has(cacheKey)) return cache.current.get(cacheKey);
    const r = await fetch(
      `https://dataservice.accuweather.com/${path}${path.includes("?") ? "&" : "?"}apikey=${encodeURIComponent(key)}`,
      { signal },
    );
    if (!r.ok)
      throw Error(
        `Weather provider returned ${r.status}. Check the key and daily quota.`,
      );
    const data = await r.json();
    cache.current.set(cacheKey, data);
    return data;
  }
  useEffect(() => {
    localStorage.setItem(
      "bootcamp-weather-favorites-v1",
      JSON.stringify(favorites),
    );
  }, [favorites]);
  useEffect(() => {
    if (!key || !query.trim()) {
      setOptions([]);
      return;
    }
    if (!/^[a-zA-Z\s-]+$/.test(query)) {
      setError("Use English letters only.");
      setOptions([]);
      return;
    }
    const c = new AbortController();
    const timer = setTimeout(async () => {
      try {
        setError("");
        setOptions(
          await request(
            `locations/v1/cities/autocomplete?q=${encodeURIComponent(query)}`,
            c.signal,
          ),
        );
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message);
      }
    }, 350);
    return () => {
      clearTimeout(timer);
      c.abort();
    };
  }, [query, key]);
  useEffect(() => {
    if (!key) return;
    const c = new AbortController();
    setLoading(true);
    setError("");
    setCurrent(null);
    setForecast([]);
    Promise.all([
      request(`currentconditions/v1/${city.Key}?details=true`, c.signal),
      request(`forecasts/v1/daily/5day/${city.Key}?metric=${metric}`, c.signal),
    ])
      .then(([conditions, days]) => {
        setCurrent(conditions[0]);
        setForecast(days.DailyForecasts);
        setLoading(false);
        setFavorites((all) =>
          all.map((f) =>
            f.Key === city.Key ? { ...f, current: conditions[0] } : f,
          ),
        );
      })
      .catch((e) => {
        if (e.name !== "AbortError") {
          setError(e.message);
          setLoading(false);
        }
      });
    return () => c.abort();
  }, [city.Key, key, metric]);
  const saved = favorites.some((f) => f.Key === city.Key);
  const unit = metric ? "Metric" : "Imperial";
  const viewCity = (c) => {
    setCity(c);
    setQuery("");
    setOptions([]);
    navigate("/");
  };
  return (
    <div className={dark ? "dark" : ""}>
      <section>
        <nav>
          <Link to="/">Weather</Link>
          <Link to="/favorites">Favorites ({favorites.length})</Link>
          <button onClick={() => setDark((d) => !d)}>Light / dark</button>
          <button onClick={() => setMetric((m) => !m)}>
            °{metric ? "C" : "F"}
          </button>
        </nav>
        <h1>Weather, wherever.</h1>
        <details open={!key}>
          <summary>AccuWeather API configuration</summary>
          <p>
            Enter your own API key. It is kept in this browser session only. No
            key is committed.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const k = new FormData(e.currentTarget).get("key").trim();
              sessionStorage.setItem("accuweather-key", k);
              setKey(k);
            }}
          >
            <label>
              API key{" "}
              <input name="key" type="password" required defaultValue={key} />
            </label>
            <button>Use key</button>
          </form>
        </details>
        <p role="alert">{error}</p>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <label>
                  Search city (English letters)
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    disabled={!key}
                  />
                </label>
                <ul>
                  {options.map((o) => (
                    <li key={o.Key}>
                      <button onClick={() => viewCity(o)}>
                        {o.LocalizedName}, {o.Country.LocalizedName}
                      </button>
                    </li>
                  ))}
                </ul>
                <h2>{city.LocalizedName}</h2>
                {loading ? (
                  <p role="status">Loading current weather and forecast…</p>
                ) : null}
                {current ? (
                  <>
                    <p>
                      {current.WeatherText} · {current.Temperature[unit].Value}°
                      {metric ? "C" : "F"}
                    </p>
                    <button
                      aria-pressed={saved}
                      onClick={() =>
                        setFavorites((all) =>
                          saved
                            ? all.filter((f) => f.Key !== city.Key)
                            : [...all, { ...city, current }],
                        )
                      }
                    >
                      {saved ? "Remove from favorites" : "Add to favorites"}
                    </button>
                    <h2>Five-day forecast</h2>
                    <div className="grid">
                      {forecast.map((day) => (
                        <section key={day.Date}>
                          <h3>
                            {new Date(day.Date).toLocaleDateString("en", {
                              weekday: "long",
                            })}
                          </h3>
                          <p>{day.Day.IconPhrase}</p>
                          <p>
                            {day.Temperature.Minimum.Value}–
                            {day.Temperature.Maximum.Value}°{metric ? "C" : "F"}
                          </p>
                        </section>
                      ))}
                    </div>
                  </>
                ) : !key ? (
                  <p>
                    Supply an AccuWeather key to load live Tel Aviv weather,
                    city suggestions, and forecasts.
                  </p>
                ) : null}
              </>
            }
          />
          <Route
            path="/favorites"
            element={
              <>
                <h2>Favorite cities</h2>
                {favorites.length ? (
                  favorites.map((f) => (
                    <section key={f.Key}>
                      <button onClick={() => viewCity(f)}>
                        {f.LocalizedName}
                      </button>
                      <p>ID: {f.Key}</p>
                      <p>
                        {f.current?.WeatherText}{" "}
                        {f.current?.Temperature?.[unit]?.Value}°
                        {metric ? "C" : "F"}
                      </p>
                      <small>
                        Last fetched current conditions. Click to refresh.
                      </small>
                    </section>
                  ))
                ) : (
                  <p>No cities saved yet.</p>
                )}
              </>
            }
          />
        </Routes>
      </section>
    </div>
  );
}
