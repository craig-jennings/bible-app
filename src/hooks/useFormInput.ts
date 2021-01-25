import { useCallback, useState } from 'react';

export default function useFormInput<T>(initialValue: T) {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e) => setValue(e.target.value), []);

  return {
    onChange,
    value,
  };
}
