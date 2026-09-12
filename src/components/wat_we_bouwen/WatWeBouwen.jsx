import styles from './WatWeBouwen.module.css';

const cards = [
    {
        title: 'Webapps & SaaS',
        description:
            'Productiesystemen, klantportalen en interne tools. Gebouwd met schaalbaarheid, performance en betrouwbaarheid als uitgangspunt.',
        pills: ['Wordpress', 'Elementor', 'React'],
    },
    {
        title: 'Custom software',
        description:
            'Maatwerk software wanneer standaardoplossingen tekortschieten. Van procesanalyse tot integraties en automatisering.',
        pills: ['PostgreSQL', 'React', 'JavaScript', 'Spring Boot'],
    },
    {
        title: 'Mobile apps',
        description:
            'Native mobiele apps met React Native. Offline-first, veilige authenticatie en data-encryptie by design.',
        pills: ['React Native', 'iOS & Android', 'APIs'],
    },
    {
        title: 'UX & UI Design',
        description:
            'Heldere interfaces die gebruiksgemak en conversie combineren. Gebouwd op gedrag, niet op aannames.',
        pills: ['Figma', 'Design Systems', 'UX Research', 'Canva'],
    },
    {
        title: 'AI Agents & Automatisering',
        description:
            'Intelligente workflows en agents die repetitief werk automatiseren en processen slimmer laten draaien.',
        pills: ['OpenAI', 'Automation', 'APIs', 'Claude Agents', 'Hermes'],
    },
    {
        title: 'API & Integraties',
        description:
            'Koppelingen tussen systemen, databases en externe services. Robuuste API-architectuur als basis voor schaalbare software.',
        pills: ['REST', 'Node.js', 'Keycloak'],
    },
];

export default function WatWeBouwen() {
    return (
        <section className={styles.section}>
            <div className={styles.bgGrid} aria-hidden="true" />

            <article className={styles.header}>
                <span className={styles.tag}>Mijn Expertise</span>
                <h2 className={styles.title}>
                    Digitale <em>producten</em>
                </h2>
                <p className={styles.subtitle}>
                    Van webapplicatie tot mobiele app, dit is de technische breedte
                    die ik in huis heb.
                </p>
            </article>

            <div className={styles.grid}>
                {cards.map((card, index) => (
                    <article key={card.title} className={styles.card}>
                        <span className={styles.cardNum}>
                            {String(index + 1).padStart(2, '0')}
                        </span>

                        <h3 className={styles.cardTitle}>{card.title}</h3>

                        <p className={styles.cardDesc}>
                            {card.description}
                        </p>

                        <div className={styles.pills}>
                            {card.pills.map((pill) => (
                                <span key={pill} className={styles.pill}>
                                    {pill}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}