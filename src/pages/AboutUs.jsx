
import '../assets/styles.css'

//Pagina que mostrara la información de la empresa

export const AboutUs = () => {
    return (
        <div className="background">
            <div className="title" style={{ color: '#fefffe' }}>
                Sobre nosotros
            </div>
            <h1 className='h1'>
                NUESTRO EQUIPO
            </h1>
            <h2 className='about'>
                Somos una startup multidisciplinaria que busca
                integrar tecnologías habitantes para mejorar
                los procesos de rehabilitación en instituciones
                y mejorar la calidad de vida de millones de pacientes
                en el mundo y empoderarlos, que la única rehabilitación
                segura y de calidad son ellos mismos.
            </h2>
            <h1 className='h1'>
                NUESTRA SOLUCIÓN
            </h1>
            <h2 className='about'>
                Umov presenta Alba, dispositivo médico destinado a la
                rehabilitación de pacientes con debilidad motora en la parte superior del cuerpo, con especialización en ACV.
            </h2>
            <h2 className='about'>
                Alba ha sido desarrollado en colaboración con destacados profesionales y centros de salud en Chile y Latinoamérica, siendo diseñado con la finalidad de innovar en el proceso de la fisioterapia.
            </h2>
            <h2 className='about'>
                El dispositivo permite un trabajo kinésico y cognitivo
                gracias a su exclusivo sistema complementario de interacción con el paciente y su precisa retroalimentación visual a través de su plataforma web.
            </h2>
            <h1 className='h1'>
                APLICACIÓN
            </h1>
            <h2 className='about'>
                Plataforma web que recopila toda
                la información del proceso de rehabilitación para
                que así pacientes y profesionales de
                salud puedan conocer los indicadores de superación.
            </h2>
        </div>
    )
}
