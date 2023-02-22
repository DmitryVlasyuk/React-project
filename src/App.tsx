import { Route, Routes } from 'react-router-dom';
import AppComponent from './MainComponents/AppComponent';
import { ThemeProvider } from "@mui/material";
import { appTheme } from './theme/theme';

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
  return (
    <ThemeProvider theme={appTheme}>
      <Routes>
        <Route path='/' element={<AppComponent/>} />
        {/* <Route path='/next' element={<redux name={"Dima"} />} /> */}
      </Routes>
    </ThemeProvider>
  )
}

export default App;
// registerServiceWorker();