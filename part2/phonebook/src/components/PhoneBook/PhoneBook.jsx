import { useState, useEffect } from "react";
import Title from "../Title/Title";
import Filter from "../Filter/Filter";
import Persons from "../Persons/Persons";
import PersonForm from "../PersonForm/PersonForm";

const PhoneBook = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ]);
    const [showPersons, setShowPersons] = useState(persons);
    const [searchValue, setSearchValue] = useState("");

    const updatePersons = (val) => {
        setPersons(val);
    }

    const updateSearchValue = (val) => {
        setSearchValue(val);
    }

    useEffect(() => {
        if (searchValue.length === 0) {
            setShowPersons(persons);
            return;
        }
        setShowPersons(persons.filter(person => person.name.indexOf(searchValue) >= 0));
    }, [searchValue]);

    return (
        <>
            <Title titleValue={"Phonebook"} />
            <Filter
                searchValue={searchValue}
                updateSearchValue={updateSearchValue}
            />
            <Title titleValue={"add a new"} />
            <PersonForm
                persons={persons}
                updatePersons={updatePersons}
            />
            <Title titleValue={"Numbers"} />
            <Persons persons={showPersons} />
        </>
    );
}

export default PhoneBook;