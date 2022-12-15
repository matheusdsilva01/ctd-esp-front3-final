import { TextField, Typography } from "@mui/material";
import { InputHTMLAttributes } from "react";

type InputProps = {
    required: boolean;
    error: any;
    register: any;
    label: string;
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({error, register, label, required = true, ...props}: InputProps) => {
    return (
        <>
            <TextField {...register} label={label} type="text" error={!!error} required={required} inputProps={{...props}} />
            {!!error && (
                <Typography
                    color="red"
                    gutterBottom
                    noWrap
                    variant="body1"
                    component="div"
                >
                    {`${error.message}`}
                </Typography>)}
        </>
    )
}

export default Input;