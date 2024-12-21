import Part from "../Part/Part";

const Content = ({ data }) => {
    return (
        <div>
            {data.map((part, index) => (
                <Part
                    key={index}
                    name={part.name}
                    exercises={part.exercises}
                />
            ))}
        </div>
    );
}

export default Content;