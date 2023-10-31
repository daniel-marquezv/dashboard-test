import { Card, Text, Metric, Flex } from "@tremor/react";

import '../assets/styles.css'

//tarjeta con la información del numero total de pacientes
//Se creo utilizando la libreria Tremor
export const TotalPatients = () => (
    <Card className="max-w-xs mx-auto card" >
        <Text>Número de Pacientes</Text>
        <Metric>495</Metric>
        <Flex className="mt-4">
            <Text>Numero total de pacientes </Text>
        </Flex>
    </Card>
);