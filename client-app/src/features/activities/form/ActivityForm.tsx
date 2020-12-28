import React from 'react'
import { Form, Segment, Button } from 'semantic-ui-react'

interface IProps {
    setEditMode: (editMode: boolean) => void;
}
const ActivityForm: React.FC<IProps> = ({setEditMode}) => {
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Titre' />
                <Form.TextArea rows={2} placeholder='Description' />
                <Form.Input placeholder='Catégorie' />
                <Form.Input type='date' placeholder='Date' />
                <Form.Input placeholder='Ville' />
                <Form.Input placeholder='Venue' />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button 
                    onClick={() => setEditMode(false)} 
                    floated='right' 
                    type='button' 
                    content='Cancel' 
                />
            </Form>
        </Segment>
    )
}

export default ActivityForm
