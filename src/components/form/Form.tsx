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
    isCompleted,
    setGivenName,
    setEmail,
    setCountryOfResidence,
    setDateOfBirth,
    setPhoto,
    submitValues,
  } = useForm();

  return (
    <div className={css.container} data-testid="form-container">
      <InputForm
        required
        label="Given name"
        value={givenName}
        onChange={setGivenName}
        inputProps={{ type: 'email', placeholder: 'E.g. John Doe' }}
      />
      <InputForm
        required
        label="Email"
        value={email}
        onChange={setEmail}
        inputProps={{ type: 'email', placeholder: 'john@email.com' }}
      />
      <InputForm
        required
        label="Country of residence"
        value={countryOfResidence}
        onChange={setCountryOfResidence}
        inputProps={{ placeholder: 'New Zealand' }}
      />
      <InputForm
        required
        label="Date of birth"
        value={dateOfBirth}
        onChange={setDateOfBirth}
        inputProps={{ type: 'date' }}
      />
      <InputForm
        required
        label="Photo"
        value={photo}
        onChange={setPhoto}
        inputProps={{ type: 'file', accept: 'image/png, image/jpeg' }}
      />
      <br />
      <Button
        label={isSubmitting ? 'Submitting' : 'Submit'}
        onClick={submitValues}
        disabled={isSubmitting || !isCompleted}
      />
    </div>
  );
}

export default Form;
