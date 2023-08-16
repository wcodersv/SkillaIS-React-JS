import s from "./CallSearch.module.css"
import { CloseButton } from "../CloseButton/CloseButton"
import { Magnifier} from "../Magnifier/Magnifier"

export const CallSearch = () => {
  return (
    <>
      <div className={s.magnifier}>
        <Magnifier />
      </div>
      <div className={s.button}>
        <CloseButton />
      </div>
      <input className={s.search} placeholder="Поиск по звонкам"></input>
    </>
  );
}
