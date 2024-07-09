import './App.css';
import './Main.css';
import './Common.css';
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import About from './About';
import Pro01 from './Pro01';
import Pro02 from './Pro02';
import Pro03 from './Pro03';
import Pro04 from './Pro04';
import Pro05 from './Pro05';
import Pro06 from './Pro06';
import Contact from './Contact';
import Option from './Option';
import BoardList from './BoardList';

function App() {
  return (
  <div>
    <Header></Header>
    <main>
      <Intro></Intro>
      <About></About>
      <Pro01></Pro01>
      <Pro02></Pro02>
      <Pro03></Pro03>
      <Pro04></Pro04>
      <Pro05></Pro05>
      <Pro06></Pro06>
      <Contact></Contact>
    </main>
    <Footer></Footer>
    <Option></Option>
    <BoardList></BoardList>
  </div>
  );
}

export default App;
