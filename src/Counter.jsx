import { h } from 'preact';
import { useState } from 'preact/hooks';

export function Counter() {
  const [value, setValue] = useState(0);

  return <div>
    <p>{value}</p>
    <p>
      <button onClick={() => setValue((value) => value + 1)}>
        Increment
      </button>
    </p>
  </div>;
}
