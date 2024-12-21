import { useState } from 'react';
import Title from './Title/Title';
import ControlPanel from './ControlPanel/ControlPanel';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Title text={"give feedback"} />
      <ControlPanel
        handleGoodValue={() => setGood(prev => prev+1)}
        handleNeutralValue={() => setNeutral(prev => prev+1)}
        handleBadValue={() => setBad(prev => prev+1)}
      />
      <Title text={"statistics"} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  );
}

export default App;