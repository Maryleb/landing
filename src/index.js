import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const cats = [
  {
    id: 1,
    nickname: "Барсик",
    bride: "Русская голубая",
    weight: 3.25,
    image: "cat3.jpg"
  },
  {
    id: 2,
    nickname: "Рыжик",
    bride: "Аббисинская",
    weight: 2.5,
    image: "cat4.jpg"
  },
  {
    id: 3,
    nickname: "Красотуля",
    bride: "-",
    weight: 2.8,
    image: "cat1.jpg"
  },
]

const brades = [
  {
    id: 1,
    title: `Аббисинская`,
    discr: `Порода домашних кошек, выведенная в Великобритании в конце XIX века на основе аборигенных пород кошек Восточной Африки и Юго-Восточной Азии. Абиссинская — одна из самых древних пород кошек и одновременно одна из первых пород, получивших официальный выставочный стандарт. `
  },
  {
    id: 2,
    title: `Русская голубая`,
    discr: `Порода домашней кошки, признанная международными фелинологическими организациями, которая стала известна в России только с началом фелинологического движения. Русская голубая кошка c успехом разводится за рубежом. Она является одной из самых популярных пород короткошерстных кошек.`
  },
  {
    id: 3,
    title: `Британская`,
    discr: `Короткошёрстные кошки. Как правило, это сильные и крепкие кошки. Бывают от средних до крупных размеров. Согласно легенде, являются потомками Чеширского кота.`
  },
  {
    id: 4,
    title: `Бурманская`,
    discr: `Порода короткошёрстных кошек. Кошку бурманской породы отличает мускулистое, крепкое тело, короткая блестящая шерсть, большие округлые глаза жёлтого цвета. Бурмы ласковы, игривы, привязаны к человеку, терпимы к соседству с другими кошками, а также с собаками.`
  },
  {
    id: 5,
    title: `Сибирская`,
    discr: `Порода полудлинношёрстных кошек. Сибирская кошка имеет полудлинную густую шерсть, не пропускающую влагу, среднего размера уши, пушистый хвост. Окрас различный.`
  },

]

const listImg = ["logo.png"]

function Head(props) {
  const logoImages =listImg.map((img, index) =>
  <img key={index} src={img} className='logo'/>
  );
  return(
    <div className="head">
      {logoImages}
    </div>
  )
}

function CatItem(props) {
  return (
    <div key={props.id} className='cat_item'>
      <div className='cat_inside'>
        <h4>{props.nickname}</h4>
        <p>Порода: {props.bride}</p>
        <p>Вес: {props.weight}</p>
        <img src={props.image}></img>
      </div>
    </div>
  );
}

function AllCats (props) {
  const catsList = props.list.map((item) =>
    <CatItem key={item.id} nickname={item.nickname} bride={item.bride} weight={item.weight} image={item.image} />
  );
  return (
    <div className='cats_list'>
      {catsList}
    </div>
  )
}

function AddBradeInfo (props) {
  const [isOpen, setOpenClose] = React.useState(false);
  const [sign, setSign] = React.useState("+")
  const press = () => {
    setOpenClose(!isOpen);
    if (!isOpen)
      setSign("×");
    else setSign("+");
  }
  return (
    <div key={props.id} className='brade_item' onClick={press}>
        <span className="left">{props.title}</span>
        <span className="right">{sign}</span>
        {isOpen &&
        <p>{props.discr}</p>
        }
    </div>
  );
}

function Brades(props) {
  const bradesList = props.list.map((item) =>
    <AddBradeInfo key={item.id} title={item.title} discr={item.discr} />
  );
  return (
    <div>
      <h3 id="brades">Информация о породах</h3>
      <div className='brades_list'>
        {bradesList}
      </div>
    </div>
);
}

function Button(props) {
  const handleClickScroll = () => {
    const element = document.getElementById("brades");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <input className="btn" type="button" value={props.val} onClick={handleClickScroll}/>
  )
}

function Cats() {
  const [catsData, setCats] = React.useState(cats)
  console.log(catsData);
  return (
    <div>
      <Head list={listImg}/>
      <h3>Фотоальбом котиков</h3>
      <Button val="Прочитать про породы"/>
      <AllCats list={catsData}/>
      <Brades list={brades}/>
    </div>
  )
}

root.render(<Cats />);