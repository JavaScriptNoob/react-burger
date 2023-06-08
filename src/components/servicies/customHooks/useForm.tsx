import { useState, ChangeEvent } from "react";
import {FormValues} from "../../utils/types";



type FormEvent = ChangeEvent<HTMLInputElement>;

interface UseForm {
    values: FormValues;
    handleChange: (event: FormEvent) => void;
    setValues: (values: FormValues) => void;
}

export function useForm(inputValues: FormValues): UseForm {
    const [values, setValues] = useState<FormValues>(inputValues);

    const handleChange = (event: FormEvent): void => {
        const { value, name } = event.target;
        setValues({ ...values, [name]: value });
    };

    return { values, handleChange, setValues };
}
