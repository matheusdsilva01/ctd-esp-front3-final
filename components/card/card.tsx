import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Popover,
  Typography
} from "@mui/material";
import Link from "next/link";
import { MouseEvent, useState } from "react";

interface cardProps {
  title: string;
  imgSrc: string;
  id: number;
}

const CardWrapper = ({ imgSrc, title, id }: cardProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Card sx={{ width: "345px" }}>
      <CardMedia
        component="img"
        height="200px"
        image={imgSrc}
        alt={`front cover comic ${title}`}
      />
      <CardContent>
        <Typography
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          gutterBottom
          noWrap
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none"
          }}
          open={open}
          disableScrollLock
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>{title}</Typography>
        </Popover>
      </CardContent>
      <CardActions>
        <Button size="medium" variant="contained">
          Comprar
        </Button>
        <Link href={`/comics/${id}`}>
          <Button size="medium" variant="outlined">
            Ver detalhes
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardWrapper;
