import { Container, Grid } from "@mui/material";
import RecipeCard from "../../../common/recipeCard/RecipeCard";

const RecipeList = () => {
  const recipes = [
    { id: 1, name: "recipe 1" },
    { id: 2, name: "recipe 1" },
    { id: 3, name: "recipe 1" },
    { id: 4, name: "recipe 1" },
    { id: 5, name: "recipe 1" },
    { id: 6, name: "recipe 1" },
    { id: 7, name: "recipe 1" },
    { id: 8, name: "recipe 1" },
    { id: 9, name: "recipe 1" },
    { id: 10, name: "recipe 1" },
    { id: 11, name: "recipe 1" },
  ];
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {recipes.map((recipe) => {
          return (
            <Grid item key={recipe.id} xs="12" sm="6" md="4" lg="3">
              <RecipeCard></RecipeCard>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default RecipeList;
