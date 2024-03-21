import InputForm from '../inputForm/InputForm';
import useForm from '../../hooks/useForm/useForm';
import { formContainer } from './styles';
import Button from '../button/Button';

const Form = () => {
  const {
    values: {
      givenName,
      email,
      country,
      birthdate,
      photo,
    },
    setGivenName,
    setEmail,
    setCountry,
    setBirthdate,
    setPhoto,
    submitValues,
  } = useForm();

  return (
    <div className={formContainer}>
      <InputForm label="Given name" value={givenName} onChange={setGivenName} />
      <InputForm label="Email" value={email} onChange={setEmail} inputProps={{ type: 'email' }} />
      <InputForm label="Country of residence" value={country} onChange={setCountry} />
      <InputForm label="Date of birth" value={birthdate} onChange={setBirthdate} inputProps={{ type: 'date' }} />
      <InputForm label="Photo" value={photo} onChange={setPhoto} inputProps={{ type: 'file' }} />
      <br />
      <Button label="Submit" onClick={submitValues} />
    </div>
  );
}

export default Form;
