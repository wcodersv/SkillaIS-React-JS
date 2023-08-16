import style from './Main.module.css';
import {HeaderMain} from './HeaderMain/HeaderMain';

export const Main = ({children}) => {
  return (

    <div className={style.body}>{children}</div>

      <HeaderMain />
    </div>

  );
};
