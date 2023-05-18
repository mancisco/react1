
import './App.css';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import cardData from './data/cardData';
  function App() {
    return (
      <div>
        <Header title="Galería de Imágenes con React" />
        {cardData.map((card) => {
          return (
            <Card
              key={card.id}
              imageUrl={card.url}
              title={card.title}
              description={card.description}
            />
          );
        })
        }

        {/* Repite Card con otras imágenes */}
        <Footer />
      </div>
    );
  }

export default App;
