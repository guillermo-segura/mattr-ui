import { renderHook, act } from '@testing-library/react-hooks';

import useForm from './useForm';
import mattrApi from '../../api/mattr';

jest.mock('../../api/mattr', () => ({
  post: jest.fn().mockResolvedValue(''),
}));

describe('useForm hook', () => {
  test('should initialize with empty values and not submitting', () => {
    const { result } = renderHook(() => useForm());
    expect(result.current.values).toEqual({
      givenName: '',
      email: '',
      countryOfResidence: '',
      dateOfBirth: '',
      photo: '',
    });
    expect(result.current.isSubmitting).toBe(false);
  });

  test('should update values when setters are called', () => {
    const { result } = renderHook(() => useForm());
    act(() => {
      result.current.setGivenName('John');
      result.current.setEmail('john@example.com');
    });
    expect(result.current.values).toEqual({
      givenName: 'John',
      email: 'john@example.com',
      countryOfResidence: '',
      dateOfBirth: '',
      photo: '',
    });
  });

  test('should set isSubmitting to true when submitValues is called', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useForm());
    mattrApi.post = jest.fn().mockResolvedValue('');
    await act(async () => {
      result.current.submitValues();
      await waitForNextUpdate();
    });
    expect(result.current.isSubmitting).toBe(false);
    expect(mattrApi.post).toHaveBeenCalledWith('/api/issue-credential', {
      givenName: '',
      email: '',
      countryOfResidence: '',
      dateOfBirth: '',
      photo: '',
    });
  });
});
