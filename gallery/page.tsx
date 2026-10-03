import Image from "next/image";
import styles from "./gallery.module.css";

const photos = [
  {
    title: "Running",
    subtitle: "Finding my pace, one run at a time.",
    image: "/jr1.jpg",
    alt: "German out for a run",
  },
  {
    title: "Hiking",
    subtitle: "Taking the scenic route and enjoying the outdoors.",
    image: "/jr2.jpg",
    alt: "German out hiking",
  },
  {
    title: "Apparel",
    subtitle: "A look at the clothing from my business.",
    image: "/jr3.jpg",
    alt: "Clothing offered by German's business",
    portrait: true,
  },
  {
    title: "Order Packing",
    subtitle: "Customer orders packed with care.",
    image: "/jr4.jpg",
    alt: "Packaged customer orders from German's business",
    portrait: true,
  },
];

export default function Gallery() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <p className={styles.eyebrow}>My life &amp; business</p>
        <h1>Things I love.</h1>
        <p className={styles.description}>
          From running and hiking to building my business, here are a few things
          I enjoy.
        </p>
      </section>

      <section className={styles.grid} aria-label="Photos of my hobbies and business">
        {photos.map((photo, index) => (
          <article className={styles.item} key={photo.title}>
            <div
              className={`${styles.imageFrame} ${photo.portrait ? styles.portraitFrame : ""}`}
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                width={1200}
                height={900}
                unoptimized
                priority={index < 2}
                className={styles.image}
                sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
              />
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className={styles.caption}>
              <div>
                <h2>{photo.title}</h2>
                <p>{photo.subtitle}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
