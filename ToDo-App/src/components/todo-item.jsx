import {Card, CardContent, Typography} from '@mui/material';

export default function ToDoItem({todo}) {
    console.log(todo);
    
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" color={'text.secondary'} >{todo?.todo}</Typography>
            </CardContent>
        </Card>
    );
}