import { Route, Routes } from 'react-router-dom';
import AppComponent from './MainComponents/AppComponent';

// const registerServiceWorker = async () => {
//   if ('serviceWorker' in navigator) {
//     // Весь код регистрации у нас асинхронный.
//     navigator.serviceWorker.register('./sw.js')
//       .then(() => navigator.serviceWorker.ready.then((worker) => {
//         worker.sync.register('syncdata');
//       }))
//       .catch((err) => console.log(err));
// }
// };

function App() {
  enum Pages {
    Home = "/",
    CharacterPage = "/:id",
    AboutPage = "/about",
    ContactPage = "/contact",
  }
  
    return (
      <Routes>
        <Route path={Pages.Home} element={<AppComponent />}>
          {/* <Route index element={<Homepage />} /> */}
          {/* <Route path={Pages.CharacterPage} element={<SingleCharacter />} />
          <Route path={Pages.AboutPage} element={<AboutPage />} />
          <Route path={Pages.ContactPage} element={<ContactUsPage />} /> */}
        </Route>
      </Routes>
    );
}

export default App;
// registerServiceWorker();