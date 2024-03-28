// import { Button } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from "@mui/material";

export const MRCard = () => {
  return (
    <>

      <div className="card__wrap">
        <article className="card__content">
          <div className="card__top">
            <div className="card__top-content">
              <span className="status">Согласование</span>
              <span className="favorites">
                <IconButton 
                sx={{
                  // background: 'grey',
                }}>
                  <StarIcon 
                  sx={{
                    fill: 'rgba(117, 75, 233, 1)',
                  }}
                  />
                </IconButton>
              </span>
            </div>
          </div>
          <div className="card__bottom">
            <h3 className="card__title">Slava 4 оч.</h3>
            <div className="card__subtitle">Договор генподряда №234</div>
            <div className="card__descr descr">
              <div className="descr__summ">
                <span>Сумма</span>
                <span className="digit">4 456 123.84</span>
              </div>
              <div className="descr__remain">
                <span>Остаток</span>
                <span className="digit">0</span>
              </div>
              <div className="descr__data">
                <span>Дата</span>
                <span className="digit">12 июня 2023</span>
              </div>
            </div>
          </div>
        </article>
      </div>

    </>
  );
};
