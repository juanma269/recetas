import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  IconButton,
  Tooltip,
} from "@mui/material";
import BakeryDiningTwoToneIcon from "@mui/icons-material/BakeryDiningTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";

const RecipeCard = () => {
  return (
    <Card variant="outlined" color="warning">
      <CardHeader
        avatar={
          <Avatar>
            <BakeryDiningTwoToneIcon />
          </Avatar>
        }
        title="Tortitas Raspadas"
        subheader="12 U"
        action={
          <Tooltip title="Favorito">
            <IconButton>
              <FavoriteTwoToneIcon />
            </IconButton>
          </Tooltip>
        }
      ></CardHeader>
      <CardActions>
        <Tooltip title="Ver" sx={{ marginLeft: "auto" }}>
          <IconButton>
            <VisibilityTwoToneIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
