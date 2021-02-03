import React, { useState } from 'react';

type Params = {
  name: string;
  description: string;
};

type MyFormProps = {
  onSubmit: (form: Params) => void;
};

// 파라미터로 전달
function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: '',
    description: '',
  });
  const { name, description } = form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // onChange에 커서를 올려 나타나는 event 객체 타입
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // onSubmit에 커서를 올려 나타나는 event 객체 타입
    e.preventDefault();
    onSubmit(form); // 파라미터로 전달받은 값
    setForm({
      name: '',
      description: '',
    }); // 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} name="name" onChange={handleChange} />
      <input
        type="text"
        value={description}
        name="description"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
