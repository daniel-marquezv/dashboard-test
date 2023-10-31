import { LineChartComponent } from '../components/LineChartComponent'
import { BarChartComponent } from '../components/BarChartComponent'
import { useState } from 'react'
import { Input } from '@mui/material'

import '../assets/styles.css'

export const Dashboard = () => {

    //Manejo de estado para buscar un grafico
    const [searchChart, setSearchChart] = useState('')
    //Manejo de estado para saber si se esta realizando la busqueda 
    const [isSearching, setIsSearching] = useState(false)

    //Los componentes que se van a cargar en esta pagina se gurdan en el array allCharts
    //Para su busqueda en donde se compondra por dos objetos component y name
    //Component sera el grafico que se mostrara y name servira para buscar el grafico
    const allCharts = [
        { component: <BarChartComponent key="bar" />, name: "Numero de pacientes ingresados" },
        { component: <LineChartComponent key="line" />, name: "Número de pacientes que recuperaron la movilidad de los brazos por mes" }
    ];

    //Funcion que guarda lo que se busca en el dashboard
    const handleSearchChart = (e) => {
        const value = e.target.value
        setSearchChart(value)
        setIsSearching(value !== '');
    }
    // Funcion que filtra la busqueda para que solo encuentre el elementro buscado
    // La busqueda ignora las mayuscula o minusculas utilizando toLowerCase
    const filteredChartsByName = allCharts.filter((chart) => {
        return chart.name.toLowerCase().includes(searchChart.toLowerCase());
    });

    return (
        <>
            <div className='title'>
                Dashboard de pacientes
            </div>
            <div className='input'>
                <Input
                    type='text'
                    placeholder='Buscar grafico por nombre'
                    value={searchChart}
                    onChange={handleSearchChart}

                />
            </div>
            {isSearching ? (
                // Renderizar solo los gráficos filtrados si se está buscando
                filteredChartsByName.map((chart, index) => (
                    <div key={index} style={{ marginTop: '100px' }}>
                        {chart.component}
                    </div>
                ))
            ) : (
                // Si no se está buscando, mostrar todos los gráficos
                <div className='graphics'>
                    <LineChartComponent />
                    <BarChartComponent />
                </div>
            )}
        </>

    )
}
