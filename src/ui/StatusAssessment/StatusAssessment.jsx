import s from './StatusAssessment.module.css';

export const StatusAssessment = () => {
  return (
    <>
      <p className={s.bad}>Плохо</p>
      <p className={s.good}>Хорошо</p>
      <p className={s.great}>Отлично</p>
    </>
  );
};
