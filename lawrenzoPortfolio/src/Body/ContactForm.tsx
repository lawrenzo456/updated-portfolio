import { useForm, type SubmitHandler } from 'react-hook-form';

//name, email, organization, message

type FormFields = {
  name: string;
  organization?: string | null;
  email: string;
  phone?: number | null;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormFields>(); //register is a property in useForm
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  }; //handleSubmit prevents default behavior of forms, and makes sure form fields are valid before calling the function. Once the data is valid, then we have a submit
  return (
    <form className='contact form' onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('name')}
        type='text'
        placeholder='First & Last Name'
      ></input>
      <input
        {...register('organization')}
        type='text'
        placeholder='Organization'
      ></input>
      <input
        {...register('email')}
        type='text'
        placeholder='Email Address'
      ></input>

      <input
        {...register('phone')}
        type='text'
        placeholder='Phone Number'
      ></input>
      <input {...register('message')} type='text' placeholder='Inquiry'></input>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ContactForm;
