//import './App.css';
import {Page, Card, Button, Toolbar, ToolbarButton, BackButton, Icon} from 'react-onsenui';

function App() {
  return (
    <Page renderToolbar={() =>
      <Toolbar>
        <div className="left">
          <ToolbarButton><Icon icon="md-menu" /></ToolbarButton>
        </div>
        <div className="center">Cronify</div>
      </Toolbar> } >
      <Card>
        <p>Tarjetas</p>
      </Card>
      <Card>
        <Button>Bancos</Button>
      </Card>
    </Page>
  );
}

export default App;
