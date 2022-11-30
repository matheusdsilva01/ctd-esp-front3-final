import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';

interface cardProps {
    title: string;
    imgSrc: string;
    id: string;
}

const CardWrapper = ({ imgSrc, title, id }: cardProps) => {
    return (
        <Card sx={{ width: "345px" }}>
            <CardMedia
                component="img"
                height="200px"
                image={imgSrc}
                alt={`front cover comic ${title}`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium" variant="contained">Comprar</Button>
                <Button size="medium" variant="outlined">
                    <Link href={`/comic/${id}`} >
                        Ver detalhes
                    </Link>
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardWrapper