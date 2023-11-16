/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Categoris from './Categories/Categoris';
import Colors from './Colors/Colors';
import Price from './Price/Price';
import './Sidebar.css';


function Sidebar(handleChange: any) {
    return (
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1>🚗</h1>
                </div>

                <Categoris handleChange={handleChange} />
                <Price handleChange={handleChange} />
                <Colors handleChange={handleChange} />

            </section>
        </>
    )
}

export default Sidebar;