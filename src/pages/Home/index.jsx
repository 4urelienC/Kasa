//import logo from './logo.svg';
import homePix from '../../assets/home.jpg'
import Card from '../../components/Card'
import Section from '../../components/Section'

function Home() {
  return (
    <div>
      <Section src={homePix} alt="Page principal" txt="Chez vous, partout et ailleurs" />
      <Card/>
    </div>
  );
}

export default Home;
