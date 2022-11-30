import { Grid } from "@mui/material";
import Card from "dh-marvel/components/card/card";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { getCharacter, getComics } from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect } from "react";

interface homeProps {
  comics: [];
}

const Index = ({ comics }: homeProps) => {

  useEffect(() => {
    (async () => {
      const res = await getCharacter(1009159);
      console.log(res);
    })()
  })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BodySingle title={"Sample"}>
        <Grid container spacing={2}>
          {comics && comics.map((comic: any) => (
            <Grid item key={comic.id}  >
              <Card id={comic.id} title={comic.title} imgSrc={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
            </Grid>
          ))}
        </Grid>
      </BodySingle>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {

  const data = await getComics(12);
  const comics = data.data.results.map(({ title, id, thumbnail }: any) => { return { title, id, thumbnail } })

  return {
    props: {
      comics,
    },
  }
}

export default Index;
