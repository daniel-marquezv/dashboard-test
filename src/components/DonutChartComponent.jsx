import { Card, DonutChart, Flex, Text, Title } from "@tremor/react";


export const DonutChartComponent = ({ data, category, index, title, text }) => (

    //Grafico de torta 
    //Se creo utilizando la libreria Tremor
    //La información mostrada por el grafico dependera de los props que se le asignen
    <Card className="max-w-lg bg-white ">
        <Title>{title}</Title>
        <DonutChart
            className="mt-6"
            data={data}
            category={category}
            index={index}
            valueFormatter={Number}
            colors={["violet", "blue", "red"]}
        />
        <Flex className="mt-4">
            <Text>{text}</Text>
        </Flex>
    </Card>


);
