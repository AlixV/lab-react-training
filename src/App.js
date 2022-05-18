import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import LikeButton from './components/LikeButton';
import BrouillonCompo from './components/BrouillonCompo';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';

// Import de App.css + Import de tous components.
// la function App (){
// return(
// <div className="App">
// LES DIFFÉRENTS COMPONENTS avec Props qu'on leur passe.
// </div>
// )}

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Pommier"
        firstName="Louis"
        gender="male"
        height={178}
        //birth={new Date("1992-07-14").toDateString()}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Brown"
        firstName="June"
        gender="female"
        height={172}
        //birth={new Date("1988-05-11").toDateString()}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      {/* <IdCard
        lastName="Pommier"
        firstName="Clémentine"
        gender="female"
        height={166}
        birth={new Date('1985-07-25')}
        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvi6Gm3L9hKz5kQ5It3s40Bm_FHyFAOB8OKQ&usqp=CAU"
      /> */}

      <Greetings lang="de">Anna-Belle ! </Greetings>

      <Greetings lang="fr">Mélodie-Jolie ! </Greetings>

      <Random min={1} max={6} />

      <Random min={1} max={100} />

      <BrouillonCompo
        props1="Bijoux"
        props2="Choux"
        props3="Cailloux"
        props4="Genoux"
      />

      <BoxColor r={225} g={0} b={0} />

      <BoxColor r={128} g={255} b={0} />

      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Mia Lecomte"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Noémie Fusée"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Tree"
        owner="Noor Boujenah"
        bgColor="#ddbb55"
        color="white"
      />

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />

      <LikeButton />
    </div>
  );
}

export default App;
