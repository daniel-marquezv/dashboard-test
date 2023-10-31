// src/components/SideDrawer.js
import { ListItemButton, ListItemIcon } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { Home, Dashboard } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';

import '../assets/styles.css'

export const Sidebar = () => {

    return (
        <Drawer variant="permanent" anchor="left" className='sidebar rounded '>
            {/* Se agrega el icono y nombre de la empresa */}
            <ListItemIcon style={{ marginLeft: '20px', marginTop: '4px' }}>
                <img src={'https://www.umov.cl/wp-content/uploads/2023/02/cropped-cropped-Logo-Umov-Full-Color-180x180.png'} alt="Umov Logo" style={{ width: '30px', height: '30px', marginRight: '8px' }} />
                <h2 className='uppercase font-bold tracking=[4px] mt-1.5 ml-3'>Umov</h2>
            </ListItemIcon>
            {/* Se agregan las opciones de cambio de pagina en el sidebar */}
            <List>
                <Link to={'/'}>
                    <ListItemButton className='list-item-button'>

                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Inicio " />

                    </ListItemButton>
                </Link>

                <Link to={'/dashboard'}>
                    <ListItemButton className='list-item-button'>
                        <ListItemIcon>
                            <Dashboard />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </Link>
                <Link to={'/about-us'}>
                    <ListItemButton className='list-item-button'>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Nosotros" />
                    </ListItemButton>
                </Link>
                {/* El boton cerrar sesión es solo estetico */}
                <ListItemButton style={{ marginTop: "549px" }}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    Cerrar Sesión
                </ListItemButton>
            </List>
        </Drawer>
    );
};


