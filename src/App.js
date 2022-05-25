import AppPage from './components/AppPage';
import GlobalProvider from './Context';

export default function App() {
  return (
    <GlobalProvider>
      <AppPage />
    </GlobalProvider>
  );
}
