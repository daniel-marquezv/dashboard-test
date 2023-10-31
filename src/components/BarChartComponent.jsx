import { BarChart, Card, Subtitle, Title } from "@tremor/react";
import chartdata from "../data/chartdata";



//Grafico de barras con la información del Numero de pacientes ingresados por mes
//Se creo utilizando la libreria Tremor
export const BarChartComponent = () => (
    <Card className="max-w-lg bg-white ">
        <Title>Número de pacientes ingresados</Title>
        <Subtitle>
            Este grafico muestra los pacientes ingresados por mes
        </Subtitle>
        <BarChart
            className="mt-6"
            data={chartdata}
            index="month"
            categories={["Número de pacientes ingresados"]}
            colors={["blue"]}
            valueFormatter={Number}
            yAxisWidth={48}
        />
    </Card>
);
