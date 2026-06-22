import styles from './WatWeBouwen.module.css';

const cards = [
    {
        title: 'Webapps & SaaS',
        description:
            'Productiesystemen, klantportalen en interne tools. Gebouwd met schaalbaarheid, performance en betrouwbaarheid als uitgangspunt.',
        pills: ['PostgreSQL', 'React', 'JavaScript'],
    },
    {
        title: 'Custom software',
        description:
            'Maatwerk software wanneer standaardoplossingen tekortschieten. Van procesanalyse tot integraties en automatisering.',
        pills: ['PostgreSQL', 'React', 'JavaScript'],
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
        pills: ['Figma', 'Design Systems', 'UX Research'],
    },
    {
        title: 'AI Agents & Automatisering',
        description:
            'Intelligente workflows en agents die repetitief werk automatiseren en processen slimmer laten draaien.',
        pills: ['OpenAI', 'Automation', 'APIs'],
    },
    {
        title: 'API & Integraties',
        description:
            'Koppelingen tussen systemen, databases en externe services. Robuuste API-architectuur als basis voor schaalbare software.',
        pills: ['REST', 'GraphQL', 'Node.js'],
    },
];

export default function WatWeBouwen() {
    return (
        <section className={styles.section}>
            <article className={styles.header}>
                <h2 className={styles.title}>Digitale producten & systemen</h2>
                <div className={styles.line} />
            </article>

            <div className={styles.grid}>
                {cards.map((card) => (
                    <article key={card.title} className={styles.card}>
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