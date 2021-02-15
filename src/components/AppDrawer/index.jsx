import React from 'react'
import { DrawerHeader, DrawerContent, List, ListItem, ListItemGraphic, Icon } from 'mdc-react'
import Drawer, { DrawerAppContent, DrawerTitle } from '@material/react-drawer';


export default function AppDrawer() {
    return (

        <div>
            <Drawer id="app-drawer">

                <DrawerHeader title="React ToDo"></DrawerHeader>
                <DrawerContent>
                    <List>
                        <ListItem>
                            <ListItemGraphic>                     
                                <Icon>home</Icon>
                            </ListItemGraphic>                          
                            </ListItem>
                    </List>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

