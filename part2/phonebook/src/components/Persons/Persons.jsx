const Persons = ({ persons }) => {
    return (
        <ul>
            {persons.map(number => (
                <li key={number.id}>
                    {`${number.name} ${number.number}`}
                </li>
            ))}
        </ul>
    );
}

export default Persons;