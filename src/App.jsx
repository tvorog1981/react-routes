import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Routes from "./routes/Routes";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<div className={styles.container}>
				<Nav />
				<div className={styles.content}>
					<Outlet />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
