import type { InputHTMLAttributes } from 'react';

/** Dark-themed text input used in the Join-the-Ecosystem forms. */
export default function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="field" type="text" {...props} />;
}
