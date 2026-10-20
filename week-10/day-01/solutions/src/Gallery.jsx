import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
export default function Gallery() {
  return (
    <BrowserRouter>
      <GalleryShell />
    </BrowserRouter>
  );
}
function GalleryShell() {
  const [key, setKey] = useState(
    () => sessionStorage.getItem("pexels-key") || "",
  );
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <section>
      <p className="eyebrow">03 / Snap Shot</p>
      <h1>Find your next view.</h1>
      <details open={!key}>
        <summary>Pexels API key</summary>
        <p>
          Use your own key. It is stored in this browser session, never in the
          repository.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const value = new FormData(e.currentTarget).get("key").trim();
            setKey(value);
            sessionStorage.setItem("pexels-key", value);
          }}
        >
          <label>
            Key <input name="key" type="password" defaultValue={key} required />
          </label>
          <button>Use API key</button>
        </form>
      </details>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (search.trim())
            navigate(`/search/${encodeURIComponent(search.trim())}`);
        }}
      >
        <label>
          Search photos{" "}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
        </label>
        <button>Search</button>
      </form>
      <nav>
        {["mountain", "beaches", "birds", "food"].map((category) => (
          <NavLink key={category} to={`/category/${category}`}>
            {category}
          </NavLink>
        ))}
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Photos apiKey={key} defaultQuery="mountain" />}
        />
        <Route path="/category/:query" element={<Photos apiKey={key} />} />
        <Route path="/search/:query" element={<Photos apiKey={key} />} />
      </Routes>
    </section>
  );
}
function Photos({ apiKey, defaultQuery }) {
  const { query: routeQuery } = useParams();
  const query = routeQuery || defaultQuery;
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setNext] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => setPage(1), [query]);
  useEffect(() => {
    if (!apiKey) return;
    const controller = new AbortController();
    setLoading(true);
    setError("");
    setPhotos([]);
    fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=30&page=${page}`,
      { headers: { Authorization: apiKey }, signal: controller.signal },
    )
      .then(async (r) => {
        if (!r.ok)
          throw Error(
            `Image request failed (${r.status}). Check your API key or quota.`,
          );
        return r.json();
      })
      .then((data) => {
        setPhotos(data.photos);
        setNext(Boolean(data.next_page));
        setLoading(false);
      })
      .catch((e) => {
        if (e.name !== "AbortError") {
          setError(e.message);
          setLoading(false);
        }
      });
    return () => controller.abort();
  }, [apiKey, query, page]);
  return (
    <>
      <h2>
        {query} / Page {page}
      </h2>
      {!apiKey ? (
        <p>Add a Pexels key above to retrieve 30 images per page.</p>
      ) : null}
      {loading ? <p role="status">Loading photographs…</p> : null}
      <p role="alert">{error}</p>
      <div className="gallery">
        {photos.map((photo) => (
          <figure key={photo.id}>
            <a href={photo.url} target="_blank" rel="noreferrer">
              <img
                src={photo.src.medium}
                alt={photo.alt || query}
                loading="lazy"
              />
            </a>
            <figcaption>Photo by {photo.photographer} on Pexels</figcaption>
          </figure>
        ))}
      </div>
      {apiKey && !loading && !error && photos.length === 0 ? (
        <p>No photographs found.</p>
      ) : null}
      <nav>
        <button
          disabled={page === 1 || loading}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </button>
        <button
          disabled={!hasNext || loading}
          onClick={() => setPage((p) => p + 1)}
        >
          Next 30 images
        </button>
      </nav>
    </>
  );
}
