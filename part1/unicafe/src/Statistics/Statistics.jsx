import StatisticLine from "./StatisticLine/StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
    const isGathedStats = good == 0 && neutral === 0 && bad === 0;
    const total = 3;
    const all = good + neutral + bad;
    const average = (good - bad)/total;
    const positive = (good * 100)/all + "%";

    return (
        <div>
            {isGathedStats
                ? <span>{"No feedback given"}</span>
                : (
                    <table>
                        <StatisticLine text="good" value={good} />
                        <StatisticLine text="neutral" value={neutral} />
                        <StatisticLine text="bad" value={bad} />
                        <StatisticLine text="all" value={all} />
                        <StatisticLine text="average" value={average} />
                        <StatisticLine text="positive" value={positive} />
                    </table>
                )
            }
        </div>
    );
}

export default Statistics;