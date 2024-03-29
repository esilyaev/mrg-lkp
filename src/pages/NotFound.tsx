import "../assets/notfound.css"
// COMPONENTS
import { MRSidebar } from "../comps/MRSidebar";
// MUI
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const NotFound = () => {
  return (
    <>
      <MRSidebar />
      <section className="notfound common-p">
        <div className="container notfound__container common-container">
          <div className="notfound__header common-header">
            <h1 className="notfound__title heading-1">Страница не найдена</h1>
            <div className="notfound__dropdown dropdown">
              <span>Все проекты</span>
              <ArrowDropDownIcon />
            </div>


          </div>

          <div className="notfound__descr">

            <h2 className="notfound__subtitle heading-2">
              В разработке
            </h2>
            <p className="notfound__txt">Страница временно недоступна</p>
          </div>

          <div className="notfound__img">
            <img src="/public/img/notfound.svg" alt="##" />
          </div>

        </div>


      </section>
    </>
  );
};
