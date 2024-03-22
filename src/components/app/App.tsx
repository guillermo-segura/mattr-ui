import Form from '../form/Form';
import css from './classnames';

const App = () => (
  <div className={css.container} data-testid="app-container">
    <div className={css.navbar}>
      <img src="https://www.datocms-assets.com/38428/1646191640-logo-block.svg" alt="logo" data-testid="navbar-logo" className={css.logo} />
    </div>
    <div className={css.body}>
      <Form />
    </div>
  </div>
);

export default App;
