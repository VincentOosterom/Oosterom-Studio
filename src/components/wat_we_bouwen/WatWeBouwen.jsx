import styles from './WatWeBouwen.module.css';

const cards = [
    {
        title: 'Web apps & SaaS',
        description:
            'Productiesystemen, klantportalen, interne tools. Postgres als bron van waarheid, deploys waar je niet van wakker ligt.',
        pills: ['PostgreSQL', 'React', 'Javascript'],
    },
    {
        title: 'Custom Software',
        description:
            'Maatwerk waar standaardpakketten ophouden, integraties, dataplatforms, automatisering. Eerst je proces begrijpen, dan pas typen.',
        pills: ['PostgreSQL', 'React', 'Javascript'],
    },
    {
        title: 'Mobile Apps',
        description:
            'iOS en Android via React Native. Offline-first, biometrische auth, encrypted-at-rest. Geen webview-omhulsel.',
        pills: ['PostgreSQL', 'React Native', 'iOS & Android'],
    },
];

export default function WatWeBouwen() {
    return (
        <section className={styles.section}>
            <article className={styles.header}>
                <h2 className={styles.title}>Wat ik bouw</h2>
                <div className={styles.line} />
            </article>
            <a className={styles.grid}>
                {cards.map((card) => (
                    <article key={card.title} className={styles.card}>
                        <i className={`ti ${card.icon} ${styles.icon}`} aria-hidden="true" />
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardDesc}>{card.description}</p>
                        <div className={styles.pills}>
                            {card.pills.map((pill) => (
                                <span key={pill} className={styles.pill}>{pill}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </a>
        </section>
    );
}