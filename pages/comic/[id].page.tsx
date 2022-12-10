import { Button, CardContent, CardMedia, Container, Grid } from "@mui/material";
import { getComic } from "services/marvel/marvel.service";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { Comic } from "types/comic";
import { priceFormatter } from "dh-marvel/util/formatPrice";

interface ComicDetailProps {
  comic: Comic;
  date: string;
}

const ComicDetail = ({ comic }: ComicDetailProps) => {
  const router = useRouter();
  const comicInStock = !!comic?.stock;
  const imgSrc = `${comic?.thumbnail.path}.${comic?.thumbnail.extension}`;
  const charactersComic = comic?.characters.items.map(item => {
    let getIdFromResourceURI = new URL(item.resourceURI).pathname.split("/")[4];

    return {
      ...item,
      id: getIdFromResourceURI
    };
  });

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{`Comic | ${comic.title}`}</title>
      </Head>
      <Container>
        <CardMedia
          height="200px"
          component="img"
          image={imgSrc}
          alt={`Front cover ${comic.title}`}
        />
        <h1>{comic.title}</h1>
        <h2>{priceFormatter(comic.price)}</h2>
        <span>{comic.stock}</span>
        <Link href={`/checkout/${comic.id}`}>
          <Button disabled={!comicInStock} sx={{ maxWidth: "345px" }} fullWidth variant="contained">
            {comicInStock ? "Comprar" : "Sem estoque"}
          </Button>
        </Link>
        <Grid container columnGap={2}>
          {charactersComic.map(character => (
            <CardContent key={character.id}>
              <h3>{character.name}</h3>
              <Link href={`/character/${character.id}`}>
                <Button variant="outlined">Ver detalhes do personagem</Button>
              </Link>
            </CardContent>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "82970" } }],
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const comic = await getComic(params.id);

  return {
    props: {
      comic
    },
    revalidate: 60 * 60
  };
};

export default ComicDetail;
