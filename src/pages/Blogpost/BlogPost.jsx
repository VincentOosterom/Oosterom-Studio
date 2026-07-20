import { useEffect } from "react";
import { useParams, useNavigate, Link,  } from "react-router-dom";
import { blogPosts } from "../../../data/blogPosts";
import { services } from "../../../data/services";
import { seoDiensten } from "../../../data/seoDiensten";
import styles from "./BlogPost.module.css";
import Navigate from "../../components/navigate/Navigate.jsx";
import Footer from "../../components/footer/Footer.jsx";


const alleDiensten = [...services, ...seoDiensten];

function formatteerDatum(isoDatum) {
    return new Date(isoDatum).toLocaleDateString("nl-NL", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export default function BlogPost() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find((p) => p.slug === slug);


    function onInterneLinkKlik(event) {
        const link = event.target.closest("a");
        if (!link) return;
        const href = link.getAttribute("href");
        if (!href || !href.startsWith("/")) return;
        event.preventDefault();
        navigate(href);
    }

    useEffect(() => {
        if (!post) return;

        document.title = `${post.title} | Oosterom Studio Blog`;

        let metaTag = document.querySelector('meta[name="description"]');
        if (!metaTag) {
            metaTag = document.createElement("meta");
            metaTag.setAttribute("name", "description");
            document.head.appendChild(metaTag);
        }
        metaTag.setAttribute("content", post.excerpt);

        const schema = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.datum,
            author: {
                "@type": "Organization",
                name: "Oosterom Studio",
            },
        };
        let schemaTag = document.getElementById("blog-schema");
        if (!schemaTag) {
            schemaTag = document.createElement("script");
            schemaTag.type = "application/ld+json";
            schemaTag.id = "blog-schema";
            document.head.appendChild(schemaTag);
        }
        schemaTag.textContent = JSON.stringify(schema);

        return () => {
            schemaTag?.remove();
        };
    }, [post]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const gerelateerdeDienstObjecten = alleDiensten.filter((d) =>
        post.gerelateerdeDiensten.includes(d.link)
    );
    const gerelateerdeBlogObjecten = blogPosts.filter((p) =>
        post.gerelateerdeBlogs.includes(p.slug)
    );

    return (
        <div className={styles.pagina}>
            <header className={styles.topbar}>
               <Navigate/>
            </header>

            <main className={styles.inhoud}>
                <span className={styles.categorie}>{post.categorie}</span>
                <h1 className={styles.titel}>{post.title}</h1>
                <div className={styles.meta}>
                    <span>{formatteerDatum(post.datum)}</span>
                    <span>·</span>
                    <span>{post.leestijd} leestijd</span>
                </div>

                <div className={styles.artikelInhoud} onClick={onInterneLinkKlik}>
                    <div
                        className={styles.tekst}
                        dangerouslySetInnerHTML={{ __html: post.intro }}
                    />

                    {post.secties.map((sectie) => (
                        <section key={sectie.kop} className={styles.sectie}>
                            <h2 className={styles.sectieKop}>{sectie.kop}</h2>
                            <div
                                className={styles.tekst}
                                dangerouslySetInnerHTML={{ __html: sectie.html }}
                            />
                        </section>
                    ))}
                </div>

                {gerelateerdeDienstObjecten.length > 0 && (
                    <aside className={styles.stempel}>
                        <p className={styles.stempelLabel}>GERELATEERDE DIENSTEN</p>
                        <ul className={styles.stempelLijst}>
                            {gerelateerdeDienstObjecten.map((d) => (
                                <li key={d.link}>
                                    <Link to={d.link} className={styles.stempelLink}>
                                        {d.icon} {d.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                )}

                {gerelateerdeBlogObjecten.length > 0 && (
                    <section className={styles.sectie}>
                        <h2 className={styles.sectieKop}>Verder lezen</h2>
                        <ul className={styles.relatedLijst}>
                            {gerelateerdeBlogObjecten.map((p) => (
                                <li key={p.slug}>
                                    <Link to={`/blog/${p.slug}`} className={styles.relatedLink}>
                                        {p.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                <Link to="/blog" className={styles.terugLink}>
                    ← Alle blogs bekijken
                </Link>
            </main>
            <Footer />
        </div>
    );
}