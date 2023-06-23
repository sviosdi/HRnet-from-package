/* eslint-disable react/prop-types */

import { Datatable } from 'sviosdi-datatable'
import './App.css'

import model from './data/DataTableModel.js'

const StandaloneApp = ({ data: initial_data }) => {
    return (
        <>
            <header>
                <section>
                    <img width="80" height="80" src="hrnet.webp"></img>
                    <h1>HRnet</h1>
                </section>
            </header>
            <div
                style={{
                    margin: '20px auto',
                    padding: '20px',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    width: 'fit-content',
                }}
            >
                <Datatable model={model} data={initial_data} />
            </div>
            <footer>Wealth Health - Human Resource Department </footer>
        </>
    )
}

export default StandaloneApp
