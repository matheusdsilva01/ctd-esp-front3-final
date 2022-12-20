import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Box, Button, CardMedia, Container, FormControl, Paper, Snackbar, TextField, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import { CheckoutContext } from "../../context/checkout.context";
import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Comic } from "types/comic";
import { priceFormatter } from "dh-marvel/util/formatPrice";
import { getImgSrcFromThumbnail } from "dh-marvel/util/srcImgFromThumbnail";
import { checkoutSchema } from "dh-marvel/util/yupValidations/checkoutSchema";
import Input from 'dh-marvel/components/input/input';
import { width } from '@mui/system';

interface CheckoutPageProps {
    comic: Comic;
}

interface Inputs extends CheckoutInput { };

const Checkout: NextPage<CheckoutPageProps> = ({ comic }: CheckoutPageProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(checkoutSchema)
    });
    const [open, setOpen] = useState(false);
    const [messageError, setMessageError] = useState("");
    const router = useRouter();
    const matches = useMediaQuery('(min-width:1300px)');
    const { handleCheckout } = useContext(CheckoutContext);
    const endpoint = `${process.env.NEXT_PUBLIC_HOSTNAME}/api/checkout`;

    const onSubmit = async (data: CheckoutInput) => {
        const payload = {
            ...data,
            card: { ...data.card, number: data.card.number.replace(" ", "") },
            order: {
                name: comic.title,
                image: getImgSrcFromThumbnail(comic.thumbnail),
                price: comic.price
            }
        };
        await axios.post(endpoint, payload).then(res => {
            handleCheckout(res.data.data);
            router.push("/checkout/purchase-confirmation")
        }).catch(err => {
            setOpen(true);
            setMessageError(err.response.data.message);
        });
    };
    console.log(endpoint);
    return (
        <LayoutCheckout>
            <Container sx={{display: "flex", flexDirection: matches ? "row": "column"}}>
                <Container maxWidth="lg">
                    <FormControl noValidate component={"form"} onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "20px" }}>
                            <Paper sx={{ background: "#f0f0f0", padding: 2, rowGap: 2, display: "flex", flexWrap: "wrap" }} elevation={3}>
                                <Typography sx={{ flexBasis: "100%" }}>Dados pessoais: </Typography>
                                <Box>
                                    <Input error={errors.customer?.name} register={register("customer.name")} label="Nome" required />
                                </Box>
                                <Box>
                                    <Input error={errors.customer?.lastname} register={register("customer.lastname")} label="Sobrenome" required />
                                </Box>
                                <Box>
                                    <Input error={errors.customer?.email} register={register("customer.email")} label="E-mail" required type="email" />
                                </Box>
                            </Paper>
                            <Paper sx={{ background: "#f0f0f0", padding: 2, rowGap: 2, display: "flex", flexWrap: "wrap" }} elevation={3}>
                                <Typography sx={{ flexBasis: "100%" }}>Endereço: </Typography>
                                <Box>
                                    <Input error={errors.customer?.address?.address1} register={register("customer.address.address1")} label="Endereço" required />
                                </Box>
                                <Box>
                                    <Input error={errors.customer?.address?.address2} register={register("customer.address.address2")} label="Apartamento, andar, etc" required={false} />
                                </Box>
                                <Box>
                                    <Input error={errors.customer?.address?.city} register={register("customer.address.city")} label="Cidade" required />
                                </Box>
                                <Box>
                                    <Input error={errors.customer?.address?.state} register={register("customer.address.state")} label="Estado" required />
                                </Box>
                                <Box>
                                    <Input error={errors.customer?.address?.zipCode} register={register("customer.address.zipCode")} label="CEP" required />
                                </Box>
                            </Paper>
                        </Box>
                        <Paper sx={{ background: "#f0f0f0", padding: 2, rowGap: 2, display: "flex", flexWrap: "wrap" }} elevation={3}>
                            <Typography sx={{ flexBasis: "100%" }}>Dados de pagamento: </Typography>
                            <Box>
                                <Input error={errors.card?.number} register={register("card.number")} label="Nº do cartão" inputMode="numeric" maxLength={19} required />
                            </Box>
                            <Box>
                                <Input error={errors.card?.nameOnCard} register={register("card.nameOnCard")} label="Nome no cartão" required />
                            </Box>
                            <Box>
                                <Input error={errors.card?.expDate} register={register("card.expDate")} label="Validade" required />
                            </Box>
                            <Box>
                                <Input error={errors.card?.cvc} register={register("card.cvc")} label="CVC" type="password" data-testid="cvc" maxLength={3} required />
                            </Box>
                        </Paper>
                        <Button type="submit" variant="contained"  >Confirmar</Button>
                    </FormControl>
                </Container>

                <Container maxWidth="sm">
                    <Paper sx={{ background: "#f0f0f0", padding: 2, display: "flex", flexDirection: "column", rowGap: 2 }} elevation={3}>
                        <CardMedia
                            component="img"
                            src={getImgSrcFromThumbnail(comic.thumbnail)}
                            sx={{ width: "200px" }}
                        />
                        <Typography fontSize={18} ><strong>Título:</strong> {comic.title}</Typography>
                        <Typography fontSize={18} ><strong>Preço:</strong> {priceFormatter(comic.price)}</Typography>
                    </Paper>
                </Container>
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={open}
                    autoHideDuration={2000}
                    key={1}
                    data-testid="alert-error"
                    onClose={() => setOpen(false)}
                >
                    <div>
                        <Alert severity="error">{messageError}</Alert>
                    </div>
                </Snackbar>
            </Container>
        </LayoutCheckout >
    )
}

export default Checkout;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { id } = query;
    const comic = await getComic(Number(id))

    return {
        props: {
            comic
        }
    }
}