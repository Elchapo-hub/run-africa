import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import runAfricaLogo from "@/assets/runafrica.jpeg";
import { galleryPhotos, getGalleryPhoto } from "@/lib/gallery";

export const Route = createFileRoute("/gallery/$photoId")({
  head: ({ params }) => {
    const photo = getGalleryPhoto(params.photoId);
    return { meta: [{ title: photo ? `${photo.title} | Run Africa` : "Run Africa Gallery" }] };
  },
  component: GalleryPhotoPage,
});

function GalleryPhotoPage() {
  const { photoId } = Route.useParams();
  const photo = getGalleryPhoto(photoId);

  if (!photo) {
    return (
      <main className="grid min-h-screen place-items-center bg-background px-5 text-center">
        <div>
          <h1 className="font-display text-4xl">This photo is not here.</h1>
          <a
            href="/#gallery"
            className="mt-6 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm"
          >
            <ArrowLeft className="h-4 w-4" /> Back to the gallery
          </a>
        </div>
      </main>
    );
  }

  const currentIndex = galleryPhotos.findIndex((item) => item.id === photo.id);
  const relatedPhotos = Array.from(
    { length: 4 },
    (_, offset) => galleryPhotos[(currentIndex + offset + 1) % galleryPhotos.length]!,
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <Link to="/" className="inline-flex items-center gap-3" aria-label="Run Africa home">
            <img src={runAfricaLogo} alt="" className="h-12 w-12 rounded bg-black object-contain" />
            <span className="font-display text-lg">Run Africa</span>
          </Link>
          <a
            href="/#gallery"
            className="inline-flex items-center gap-2 text-sm transition hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to gallery
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.25fr_0.75fr] md:items-center md:px-10 md:py-16">
        <div className="overflow-hidden rounded-lg bg-muted">
          <img src={photo.src} alt={photo.alt} className="max-h-[75vh] w-full object-cover" />
        </div>
        <div className="py-4 md:px-5">
          <p className="eyebrow mb-4 text-primary">A Run Africa moment</p>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">{photo.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{photo.description}</p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            From forest paths and waterfalls to welcoming communities and wide-open views, our
            Tanzania journeys make room for the moments that stay with you.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs">
            {["Tanzania", "Local experiences", "Outdoor journeys"].map((word) => (
              <span key={word} className="rounded-full border border-border px-3 py-1.5">
                {word}
              </span>
            ))}
          </div>
          <a
            href="/#planner"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition hover:brightness-110"
          >
            Plan a journey <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="bg-secondary py-14 text-secondary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="eyebrow mb-3 text-accent">More from the journey</p>
          <h2 className="mb-8 font-display text-3xl md:text-4xl">More moments to discover</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-5">
            {relatedPhotos.map((related) => (
              <Link
                key={related.id}
                to="/gallery/$photoId"
                params={{ photoId: related.id }}
                className="group relative aspect-[4/5] overflow-hidden rounded-lg"
              >
                <img
                  src={related.src}
                  alt={related.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 pt-10 text-sm text-on-image">
                  {related.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
