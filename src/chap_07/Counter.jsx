import React, { useState, useEffect } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    useEffect(() => { 
        document.title = `업데이트 횟수: ${count} + ${num}`;
    }, [count, num]);

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count +1)}>Click me</button>

            <p>총 {num}번 클릭했습니다.</p>
            <button onClick={() => setNum(num +1)}>number</button>
        </div>
    );
}

export default Counter;