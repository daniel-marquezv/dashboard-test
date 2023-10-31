import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";

import '../assets/styles.css'


//tarjeta con la información de los pacientes recuperados
//Se creo utilizando la libreria Tremor
export const MetricComponent = () => (

    <Card className="max-w-xs ">
        <Text>Pacientes recuperados</Text>
        <Metric>396</Metric>
        <Flex className="mt-4">
            <Text>80% de pacientes recuperados </Text>
            <Text> 495</Text>
        </Flex>
        <ProgressBar value={80} className="mt-2" />
    </Card>
);
