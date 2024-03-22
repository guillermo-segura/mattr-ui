import InputForm from '../inputForm/InputForm';
import useForm from '../../hooks/useForm/useForm';
import Button from '../button/Button';
import css from './classnames';

const Form = () => {
  const {
    values: {
      givenName,
      email,
      countryOfResidence,
      dateOfBirth,
      photo,
    },
    isSubmitting,
    setGivenName,
    setEmail,
    setCountryOfResidence,
    setDateOfBirth,
    setPhoto,
    submitValues,
  } = useForm();


  return (
    <div className={css.container} data-testid="form-container">
      <InputForm label="Given name" value={givenName} onChange={setGivenName} />
      <InputForm label="Email" value={email} onChange={setEmail} inputProps={{ type: 'email' }} />
      <InputForm label="Country of residence" value={countryOfResidence} onChange={setCountryOfResidence} />
      <InputForm label="Date of birth" value={dateOfBirth} onChange={setDateOfBirth} inputProps={{ type: 'date' }} />
      <InputForm label="Photo" value={photo} onChange={setPhoto} inputProps={{ type: 'file' }} />
      <br />
      <Button label={isSubmitting ? 'Submitting' : 'Submit'} onClick={submitValues} disabled={isSubmitting} />
    </div>
  );
}

export default Form;
