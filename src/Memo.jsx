import React, {useState, useMemo} from "react";

function Memo() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');

    const reversedValue = useMemo(() => { return value.split('').reverse().join('');
}, [value]);

    return (
    <div>
        <button onClick={() => setCount(count+1)}>Augmenter</button>
        <input type="text" value={value} onChange={e =>setValue(e.target.value)} />
        <p>{reversedValue}</p>
    </div>
    );
}

export default Memo;