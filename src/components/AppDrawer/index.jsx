import React from 'react'
import { DrawerHeader, DrawerContent, List, ListItem, ListItemGraphic, ListItemText, ListGroup, ListDivider, Icon } from 'mdc-react'
import Drawer, { DrawerAppContent, DrawerTitle } from '@material/react-drawer';
import {NavLink} from 'react-router-dom'


export default function AppDrawer({ lists }) {
    return (

        <div>
            <Drawer id="app-drawer">

                <DrawerHeader title="Планировщик"></DrawerHeader>
                <DrawerContent>
                    <ListGroup>
                        <List>

                            {[
                                { title: 'Задачи', icon: 'home', to: '/' },
                                { title: 'Важно', icon: 'star', to:'/important' },
                                { title: 'Запланированные', icon: 'event', to: '/planned' }

                            ].map(item => <ListItem key={item.icon} component={NavLink} to={item.to}>
                                <ListItemGraphic>
                                    <Icon>{item.icon}</Icon>
                                </ListItemGraphic>
                                <ListItemText>{item.title}</ListItemText>
                            </ListItem>)}
                        </List>
                        <ListDivider element="hr"/>
                        <List>

                            {lists.map(item => <ListItem key={item.key} to={item.id} component={NavLink}>
                                <ListItemGraphic>
                                    <Icon>list</Icon>
                                </ListItemGraphic>
                                <ListItemText>{item.title}</ListItemText>
                            </ListItem>)}
                        </List>
                    </ListGroup>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

