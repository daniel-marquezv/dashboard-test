import { Card, LineChart, Title } from "@tremor/react";
import chartdata from "../data/chartdata";

//Grafico lineal con la información del Numero de pacientes que recuperaron la movilidad de los brazos por mes
//Se creo utilizando la libreria Tremor
export const LineChartComponent = () => (
    <Card className="max-w-lg bg-white ">
        <Title>Numero de pacientes que recuperaron la movilidad de los brazos por mes</Title>
        <LineChart
            className="mt-6"
            data={chartdata}
            index="month"
            categories={["Number of recovered patients"]}
            colors={["emerald", "gray"]}
            valueFormatter={Number}
            yAxisWidth={40}
        />
    </Card>
);
