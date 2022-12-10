import { CardMedia, Container, Typography } from "@mui/material";
import { getCharacter } from "services/marvel/marvel.service";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Character } from "types/character";
import { getImgSrcFromThumbnail } from "util/srcImgFromThumbnail";

interface CharacterDetailProps {
  character: Character;
}

const CharacterDetail = ({ character }: CharacterDetailProps) => {
  if (!character) {
    return <Typography fontSize={32}>loading...</Typography>;
  }

  return (
    <>
      <Head>
        <title>{`Character | ${character.name}`}</title>
      </Head>
      <Container sx={{ marginTop: "10px" }}>
        <CardMedia
          sx={{ width: "100%", maxWidth: "400px" }}
          component="img"
          image={getImgSrcFromThumbnail(character.thumbnail)}
          alt={`principal image of ${character.name}`}
        />
        <Typography fontSize={32} fontWeight="bold">
          {character.name}
        </Typography>
        <Typography fontSize={24}>
          {character.description
            ? character.description
            : "O personagem não possui descrição :("}
        </Typography>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1009164" } }],
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const characterId = params.id;
  const character = await getCharacter(characterId);
  return {
    props: { character },
    revalidate: 60 * 60
  };
};

export default CharacterDetail;
