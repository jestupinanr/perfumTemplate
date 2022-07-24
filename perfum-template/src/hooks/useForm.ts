import { useState } from 'react';

export const useForm = <T>(
  initialState: T,
  onSubmit: (form: T) => void,
  callback?: (target: EventTarget & (HTMLInputElement | HTMLTextAreaElement)) => void
) => {
  const [form, setForm] = useState(initialState);

  // Reset function
  const clear = () => setForm(initialState);

  // Submit event
  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(form);
  };

  // On change event
  const handleFormChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Do callback if exists
    if (callback) callback(target);

    // Get value by type
    const value = () => {
      // Check if textarea
      if (target instanceof HTMLTextAreaElement) return target.value;

      switch (target.type) {
        case 'checkbox':
          return target.checked;

        case 'file':
          return { file: (target.files || [{}])[0], path: target.value };

        default:
          return target.value;
      }
    };

    // Update form
    setForm({
      ...form,
      [target.name]: value(),
    });
  };

  return { form, handleFormChange, setForm, clear, onSubmit: submit };
};

export default useForm;
