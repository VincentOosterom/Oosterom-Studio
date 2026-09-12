import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { blogPosts } from "../../../data/blogPosts";
import { services } from "../../../data/services";
import { seoDiensten } from "../../../data/seoDiensten";
import styles from "./BlogPost.module.css";
import Nav from "../../components/navigate/Navigate.jsx";
import Footer from "../../components/footer/Footer.jsx";
import SEO from "../../components/seo/SEO.jsx";


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

    if (!post) {
        return <Navigate to="/kennisbank" replace />;
    }

    const canonicalUrl = `https://www.oosteromstudio.nl/kennisbank/${post.slug}`;

    const gerelateerdeDienstObjecten = alleDiensten.filter((d) =>
        (post.gerelateerdeDiensten ?? []).includes(d.link)
    );

    const gerelateerdeBlogObjecten = blogPosts.filter((p) =>
        (post.gerelateerdeBlogs ?? []).includes(p.slug)
    );

    return (
        <div className={styles.pagina}>
            <SEO
                title={post.title}
                description={post.excerpt}
                path={`/kennisbank/${post.slug}`}
                ogType="article"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    headline: post.title,
                    description: post.excerpt,
                    datePublished: post.datum,
                    url: canonicalUrl,
                    author: {
                        "@type": "Organization",
                        name: "Oosterom Studio",
                    },
                    publisher: {
                        "@type": "Organization",
                        name: "Oosterom Studio",
                        url: "https://www.oosteromstudio.nl",
                    },
                    mainEntityOfPage: {
                        "@type": "WebPage",
                        "@id": canonicalUrl,
                    },
                }}
            />

            <header className={styles.topbar}>
               <Nav/>
            </header>

            <main className={styles.inhoud}>
                <span className={styles.categorie}>{post.categorie}</span>
                <h1 className={styles.titel}>{post.title}</h1>
                <section className={styles.meta}>
                    <span>{formatteerDatum(post.datum)}</span>
                    <span>·</span>
                    <span>{post.leestijd} leestijd</span>
                </section>

                <section className={styles.artikelInhoud} onClick={onInterneLinkKlik}>
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
                </section>

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
                                    <Link to={`/kennisbank/${p.slug}`} className={styles.relatedLink}>
                                        {p.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                <Link to="/kennisbank" className={styles.terugLink}>
                    ← Alle blogs bekijken
                </Link>
            </main>
            <Footer />
        </div>
    );
}