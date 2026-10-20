const campusNetworks = [
    { school: 'UT Austin', name: 'utexas.network', url: 'https://www.utexas.network/' },
    { school: 'Cornell', name: 'bigred.network', url: 'https://www.bigred.network/' },
    { school: 'University of Guelph', name: 'uguelph.network', url: 'https://www.uguelph.network/' },
    { school: 'Columbia', name: 'columbia.network', url: 'https://www.columbia.network/' },
    { school: 'University of Houston', name: 'uhouston.network', url: 'https://www.uhouston.network/' },
    { school: 'University of Mary Washington', name: 'umw.network', url: 'https://www.umw.network/' },
    { school: 'NYU', name: 'nyuniversity.network', url: 'https://www.nyuniversity.network/' },
    { school: 'NESCAC schools', name: 'nescac.network', url: 'https://www.nescac.network/' },
    { school: 'BRAC University', name: 'bracu.network', url: 'https://bracu-network.vercel.app/' },
    { school: 'Vistula University', name: 'vistula.network', url: 'https://vistula-network.com/' },
    { school: 'Arizona State', name: 'asunetwork.com', url: 'https://asunetwork.com/' },
    { school: 'University of Toronto', name: 'northblue.network', url: 'https://www.northblue.network/' },
];

export default function CampusNetworks() {
    return (
        <section className="campus-networks" id="campus-networks" aria-labelledby="campus-networks-heading">
            <h2 id="campus-networks-heading">beyond waterloo</h2>
            <p>shoutout to the students connecting their own campuses. go meet the people building things elsewhere.</p>
            <ul className="campus-networks-list">
                {campusNetworks.map(network => (
                    <li key={network.url}>
                        <a href={network.url} target="_blank" rel="noopener noreferrer">
                            <span className="campus-network-name">{network.name} <span aria-hidden="true">↗</span></span>
                            <span className="campus-network-school">{network.school}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
