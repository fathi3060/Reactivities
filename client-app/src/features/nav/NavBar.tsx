import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

interface IProps {
    openCreateForm: () => void;
}

const NavBar: React.FC<IProps> = ({openCreateForm}) => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}} />
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activités' />
                <Menu.Item >
                    <Button onClick={openCreateForm} positive content="Créer une activité" />
                </Menu.Item>
            </Container>
        </Menu>    
    );
};

export default NavBar;
