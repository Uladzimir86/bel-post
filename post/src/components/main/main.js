import './main.scss';
import Card from '../../UI-components/card/card';
import {sections} from '../../assets/cards/sections';

const Main = ({arrCards=sections}) => {
  const cards = arrCards.map(item => {
    return (
      <Card title={item.title} icon={item.icon} id={item.id} key={item.id} />
    )
  })


  return (
    <main className="main">
      {cards}
    </main>
  )
}

export default Main;