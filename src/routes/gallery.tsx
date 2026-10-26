import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import runAfricaLogo from "@/assets/runafrica.jpeg";
import { galleryPhotos } from "@/lib/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery | Run Africa" }] }),
  component: Gallery,
});

function Gallery() {
  const [search, setSearch] = useState("");
  const normalizedSearch = search.trim().toLowerCase();
  const photos = normalizedSearch
    ? galleryPhotos.filter((photo) =>
        `${photo.title} ${photo.description}`.toLowerCase().includes(normalizedSearch),
      )
    : galleryPhotos;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <Link to="/" className="inline-flex items-center gap-3" aria-label="Run Africa home">
            <img src={runAfricaLogo} alt="" className="h-12 w-12 rounded bg-black object-contain" />
            <span className="font-display text-lg">Run Africa</span>
          </Link>
          <Link to="/" hash="gallery" className="text-sm transition hover:text-primary">
            Back home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
        <p className="eyebrow text-primary">Moments from our journeys</p>
        <h1 className="mt-3 text-4xl md:text-6xl">
          Explore the <em className="text-primary">gallery.</em>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Search the Run Africa collection by place, experience, or story.
        </p>

        <label className="relative mt-8 block max-w-xl">
          <span className="sr-only">Search the gallery</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search waterfalls, hikes, Morogoro..."
            className="w-full rounded-full border border-input bg-card py-3.5 pl-12 pr-5 outline-none transition focus:border-primary"
          />
        </label>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {photos.map((photo) => (
            <Link
              key={photo.id}
              to="/gallery/$photoId"
              params={{ photoId: photo.id }}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-muted"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-on-image">
                <p className="font-display text-base md:text-xl">{photo.title}</p>
              </div>
            </Link>
          ))}
        </div>

        {photos.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No gallery photos match “{search}”.
          </p>
        )}
      </section>
    </main>
  );
}
