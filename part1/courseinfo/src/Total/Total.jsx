const Total = ({ data }) => {
    const totalValue = data.reduce((acc, val) => {
        return acc + val.exercises;
    }, 0);

    return (
        <p>Number of exercises {totalValue}</p>
    );
}

export default Total;