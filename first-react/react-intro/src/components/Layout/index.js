import Header from '../Header';
import Footer from '../Footer'

const Layout = ({children}) => (
    <div className="App">
        <Header />
        <div className="content">
            <div className="wrapper">
                {children}
            </div>
        </div>
        <Footer />
    </div>
);

export default Layout;
