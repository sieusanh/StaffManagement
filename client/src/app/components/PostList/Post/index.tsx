

import {
    Avatar, Card, CardActions, CardContent,
    CardHeader, CardMedia, IconButton, Typography
} from '@mui/material';
import { MoreVert, Favorite } from '@mui/icons-material';
import { POST } from '../../../libs/types';

export default function Post({ post }: { post: POST }) {
    const { title, content, author, likeCount } = post;
    return (
        <Card>
            <CardHeader
                avatar={<Avatar>A</Avatar>}
                title={author}
                subheader='Apr 30, 2021'
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
            />
            <CardMedia image='' title={title} />
            <CardContent>
                <Typography
                    variant='h5'
                    color='textPrimary'
                >
                    {title}
                </Typography>
                <Typography
                    variant='body2'
                    component='p'
                    color='textSecondary'
                >
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <Favorite />
                    <Typography
                        component='span'
                        color='textSecondary'
                    >
                        {likeCount}
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    );
}
