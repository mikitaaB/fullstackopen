import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

const PersonForm = ({ persons, updatePersons }) => {
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState(0);

    const handlePersonNameChange = (e) => {
        setNewName(e.target.value.trim());
    }

    const handlePersonNumberChange = (e) => {
        setNewNumber(e.target.value);
    }

    const handleAddPerson = (e) => {
        e.preventDefault();
        if (!newName.length && !newNumber.length) {
            return;
        }
        if (persons.findIndex(person => person.name === newName) >= 0) {
            alert(`${newName} is already added to phonebook`);
            return;
        }
        const newPerson = {
            id: persons.length + 1 + "",
            name: newName,
            number: newNumber
        };
        updatePersons(persons.concat(newPerson));
        setNewName("");
        setNewNumber("");
    }

    return (
        <form onSubmit={handleAddPerson}>
            <div>
                name: <Input
                    value={newName}
                    onChange={handlePersonNameChange}
                    type={"text"}
                />
            </div>
            <div>
                number: <Input
                    value={newNumber}
                    onChange={handlePersonNumberChange}
                    type={"number"}
                />
            </div>
            <div>
                <Button
                    title={"add"}
                    type="submit"
                />
            </div>
        </form>
    );
}

export default PersonForm;