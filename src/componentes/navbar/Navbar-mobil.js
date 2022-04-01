import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import RedesMobil from './Redes-mobil'
import NavegacionMobil from './Navegacion-mobil'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useSpring, animated} from 'react-spring'
import { createTheme } from '@material-ui/core/styles';

export const Navbar = () => {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Varela Round',
        'sans-serif',
      ].join(','),
    },});

  //animacion
  const [animacion, setAnimacion] = useState( false )
  const [animacion2, setAnimacion2] = useState( false )


  const springNavBar = useSpring({
    from:{ opacity: 0 },
    to: { opacity: 1 },
    config: {duration: 700} ,
    reverse: !animacion
  })  
/*
  const springMovimiento = useSpring({
    from: {y: -50}
  })
*/
  const[open, setOpen] = useState(false);

  const multifuncionAbrir = () =>{
    //abre o cierra el menú
    setOpen( !open ) 
    //animacion para el menu
    setAnimacion( true )
  }

  const multifuncionCerrar = () =>{
    //abre o cierra el menú
    setOpen( !open ) 
    //animacion para el menu
    setAnimacion( false )
  }

  const menuAbierto = 
                      <MenuIcon fontSize='large' className='Hamburgueza' 
                        color='action'
                        onClick={ () => multifuncionAbrir() }
                      />

  const menuCerrado = <CloseIcon fontSize='large' className='Hamburgueza'
                        color='action'
                        onClick={ () => multifuncionCerrar() }
                      />

  const cerrarMenuMobil = () => setOpen( false );

  return (

        <div  className='Contenedor-Navbar-mobil'>

          <div className='Navbar-3-mobil'>
            <Typography theme={theme} style={{ fontSize: 25, color:'#000000', textDecoration: 'none'}} > 
              Rodolfo Cuevas 
            </Typography>
          </div>

          {open ? menuCerrado : menuAbierto}
          <div>
            <animated.div style={springNavBar} className='Navbar-1-mobil'>
                {open && <NavegacionMobil isMobile={true} cerrarMenuMobil={cerrarMenuMobil} />}
            </animated.div>

            <animated.div style={springNavBar} className='Navbar-2-mobil'>
              {open && <RedesMobil />}
            </animated.div>
          </div>


        </div>
  )
}

export default Navbar;
