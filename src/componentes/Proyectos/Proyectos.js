
import React from 'react'
import "./Proyectos.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import minPortafolio from '../../archivos/miniatura-portafolio.png'
import { SiJavascript, SiReact, SiCss3 } from 'react-icons/si';
import { FaBrain } from 'react-icons/fa';


/** https://react-icons.github.io/react-icons << iconos */

export default function Proyectos() {
    
  const apuntes = [
    {
      nombre:'Apuntes Inteligencia Aritificial',
      descripcion: 'Apuntes sacados personales del curso de Santiago Hernandez.',
      ruta: '',
      imagen: 'https://www.engineersgarage.com/wp-content/uploads/2021/11/TCH36-01-scaled.jpg',
      tecnologias: <> <FaBrain/> </>
    }
  ]

  const proyectos = [
    {
      nombre: 'Portafolio de presentación mía y proyectos',
      ruta: 'https://github.com/rcuevaspantoja/portafolio',
      imagen: minPortafolio,
      descripcion: 'Portafolio donde se almacenará la gran parte de mis proyectos de programación y CV',
      tecnologias: <> <SiReact/> <SiJavascript/> <SiCss3/> </> 
    },
    {
      nombre: 'Web con información de Peliculas y Series',
      ruta: 'https://github.com/rcuevaspantoja/Informacion-Peliculas',
      imagen: 'https://raw.githubusercontent.com/rcuevaspantoja/Informacion-Peliculas/main/src/imagenes/Capturas/captura_todo.png',
      descripcion: 'Sitio web en React con consumo de API para postular a Jr Dev',
      tecnologias: <> <SiReact/> <SiJavascript/> <SiCss3/> </> 
    },
    {
      nombre: 'Enlaces de biografía para psicologa online',
      ruta: 'https://github.com/rcuevaspantoja/Biolinks-PsValentinaMoyano',
      imagen: 'https://raw.githubusercontent.com/rcuevaspantoja/Biolinks-PsValentinaMoyano/master/src/archivos/Capturas/Screenshot_2.png',
      descripcion: 'Sitio web en React para la biografia de la psicologa online Valentina Moyano',
      tecnologias: <> <SiReact/> <SiJavascript/> <SiCss3/> </> 
    },
    {
      nombre: 'Problemas de programación para entrevistas',
      ruta: 'https://github.com/rcuevaspantoja/problemas-entrevistas',
      imagen: 'http://s3.amazonaws.com/cb-talent-development-cortex-prod/media/attachments/000/001/682/original/shutterstock_248597491_IntTest.jpg?1452861845',
      descripcion: 'Repositorio de preguntas de nivel medio para empresas tipo FAANG traducidas por mi',
      tecnologias: <> <SiJavascript/> </>
    }
  ]

  const tarjeta = ( titulo1, fuentes ) =>{
    return(
      <>
        <div className='TituloSegundo'><Typography variant='h3'> {titulo1} </Typography></div>
        <div className='Proyectos'>
          {fuentes.map(({nombre, ruta, imagen, descripcion, tecnologias}) => (
            <div className='Card'>
              <Card>
              <CardActionArea href={ruta} target="_blank">
                <CardMedia 
                  component="img"
                  height="140"
                  image={imagen}
                  alt={nombre}/>

                <CardContent style={{backgroundColor: "white bone"}}>
                  <Typography gutterBottom variant="h5" component="div">
                    {nombre}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {descripcion}
                  </Typography>

                  <div className='proyectoTecnologias'>
                    <Typography variant="h5">
                      <hr/>
                      {tecnologias}
                    </Typography>
                  </div>

                </CardContent>
              </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
        </>
    )
  }

  return (
    <>
      {tarjeta( "Desarrollo Web", proyectos )}  

      {tarjeta( "Apuntes Personales", apuntes )}
    </>
  )
}
