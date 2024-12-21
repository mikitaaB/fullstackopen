import Button from "../Button/Button";

const ControlPanel = ({ handleGoodValue, handleNeutralValue, handleBadValue }) => {
    return (
        <div>
            <Button onClick={handleGoodValue} title={"good"} />
            <Button onClick={handleNeutralValue} title={"neutral"} />
            <Button onClick={handleBadValue} title={"bad"} />
        </div>
    );
}

export default ControlPanel;