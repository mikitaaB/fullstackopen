const Total = ({ data }) => {
    const totalValue = data.reduce((acc, val) => {
        return acc + val.exercises;
    }, 0);

    return (
        <p><b>total of {totalValue} exercises</b></p>
    );
}

export default Total;