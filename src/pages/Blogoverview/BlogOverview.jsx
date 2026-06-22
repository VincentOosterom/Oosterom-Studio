import { Link } from "react-router-dom";
import { blogPosts } from "../../../data/blogPosts";
import styles from "./Blogoverview.module.css";
import Navigate from "../../components/navigate/Navigate.jsx";
import Footer from "../../components/footer/Footer.jsx";

const gesorteerdeBlogs = [...blogPosts].sort(
    (a, b) => new Date(b.datum) - new Date(a.datum)
);

function formatteerDatum(isoDatum) {
    return new Date(isoDatum).toLocaleDateString("nl-NL", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export default function BlogOverview() {
    return (
        <div className={styles.pagina}>
            <header className={styles.topbar}>
               <Navigate/>
            </header>

            <main className={styles.inhoud}>
                <span className={styles.tag}>Blog</span>
                <h1 className={styles.titel}>Inzichten & praktijkkennis</h1>
                <p className={styles.intro}>
                    Praktische artikelen over webdesign, beveiliging en software voor
                    MKB-bedrijven. Geschreven vanuit de praktijk, niet vanuit theorie.
                </p>

                <div className={styles.grid}>
                    {gesorteerdeBlogs.map((post, index) => (
                        <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className={styles.kaart}
                        >
              <span className={styles.velLabel}>
                VEL {String(index + 1).padStart(2, "0")}/
                  {String(gesorteerdeBlogs.length).padStart(2, "0")}
              </span>
                            <span className={styles.categorie}>{post.categorie}</span>
                            <h2 className={styles.kaartTitel}>{post.title}</h2>
                            <p className={styles.excerpt}>{post.excerpt}</p>
                            <div className={styles.meta}>
                                <span>{formatteerDatum(post.datum)}</span>
                                <span>·</span>
                                <span>{post.leestijd}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}