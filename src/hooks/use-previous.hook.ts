import { useRef, useEffect } from 'react';

export default function usePrevious(value: string): string {
  const ref = useRef('');

  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
