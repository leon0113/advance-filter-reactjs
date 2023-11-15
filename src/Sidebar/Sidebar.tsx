import Categoris from './Categories/Categoris';
import Colors from './Colors/Colors';
import Price from './Price/Price';
import './Sidebar.css';

function Sidebar() {
    return (
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1>🚗</h1>
                </div>

                <Categoris />
                <Price />
                <Colors />

            </section>
        </>
    )
}

export default Sidebar;