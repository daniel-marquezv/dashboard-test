import { MetricComponent } from "../components/MetricComponent";
import { DonutChartComponent } from "../components/DonutChartComponent";
import { TotalPatients } from "../components/TotalPatients";
import patients from "../data/patients";
import mobility from "../data/mobility";
import { useState } from "react";
import { Input } from "@mui/material";

export const Home = () => {

    const allCharts = [
        { component: <DonutChartComponent key="donut" title={"Total de pacientes"} data={patients} category={"amount"} index={"recovered"} text={"Pacientes recuperados vs en tratamiento"} />, name: "Total de pacientes" },
        { component: <DonutChartComponent key="donut-mobility" title={"Evaluación de Movilidad"} data={mobility} category={"amount"} index={"Level of Mobility in Patients"} text={"Distribución de los pacientes según su nivel de movilidad"} />, name: "Evaluación de Movilidad" },
        { component: <MetricComponent key={"metric"} />, name: "Pacientes recuperados" },
        { component: <TotalPatients key={"patients"} />, name: "Numero de pacientes" }
    ];

    const [searchChart, setSearchChart] = useState('')
    const [isSearching, setIsSearching] = useState(false)

    //Funcion que guarda lo que se busca en el dashboard
    const handleSearchChart = (e) => {
        const value = e.target.value
        setSearchChart(value)
        setIsSearching(value !== ''); // verificar si el usuario ha ingresado alguna busqueda
    }

    // Funcion que filtra la busqueda para que solo encuentre el elementro buscado
    // La busqueda ignora las mayuscula o minusculas utilizando toLowerCase
    const filteredChartsByName = allCharts.filter((chart) => {
        return chart.name.toLowerCase().includes(searchChart.toLowerCase());
    });

    return (
        <>
            <div className="title">
                Inicio
            </div>
            <div className="input">
                <Input
                    type="text"
                    placeholder="Buscar gráfico por nombre"
                    value={searchChart}
                    onChange={handleSearchChart}
                />
            </div>
            <div className="dashboard-main">
                <div className="parent">

                    {isSearching ? (
                        // Renderizar solo los gráficos filtrados si se está buscando
                        filteredChartsByName.map((chart, index) => (
                            <div key={index}>
                                {chart.component}
                            </div>
                        ))
                    ) : (
                        // Si no se está buscando, mostrar todos los gráficos
                        <>
                            <div className="div1">
                                <MetricComponent />
                            </div>
                            <div className="div2">
                                <TotalPatients />
                            </div>
                            <div className="div3">
                                <DonutChartComponent title={"Total de pacientes"} data={patients} category={"amount"} index={"recovered"} text={"Pacientes recuperados vs en tratamiento"} />
                            </div>
                            <div className="div4">
                                <DonutChartComponent title={"Evaluación de Movilidad"} data={mobility} category={"amount"} index={"Level of Mobility in Patients"} text={"Distribución de los pacientes según su nivel de movilidad"} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};


