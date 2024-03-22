import Form from '../form/Form';
import css from './classnames';

const App = () => (
  <div className={css.container} data-testid="app-container">
    <Form />
  </div>
);

export default App;
