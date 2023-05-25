import { Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, useTheme } from '@mui/material'
import React from 'react'
import { TallerHomeDTO } from '../../shared/interface';

interface FormData {
    fullName: string;
    neighborhood: string;
    asist: boolean;
    notAssit: boolean;
}

interface CustomFormProps {
    fullData: TallerHomeDTO
}

const CustomForm: React.FC<CustomFormProps> = ({ fullData }) => {
    const theme = useTheme();
    const [formData, setFormData] = React.useState<FormData>({
        fullName: '',
        neighborhood: '',
        asist: true,
        notAssit: false,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target;
        if (name === 'asistire') {
            setFormData({
                ...formData,
                asist: checked,
                notAssit: !checked,
            });
        } else if (name === 'noAsistire') {
            setFormData({
                ...formData,
                asist: !checked,
                notAssit: checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let message = `Hola, mi nombre es ${formData.fullName}, del barrio ${formData.neighborhood}.`;
        if (formData.asist) {
            message += ' Voy a asistir al taller.';
        } else {
            message += ' No voy a poder asistir al taller.';
        }
        const whatsappUrl = `https://wa.me/549${fullData.contacPhone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                required
                fullWidth
                name="fullName"
                size="small"
                color="primary"
                label="Nombre y Apellido"
                onChange={handleInputChange}
                style={{ paddingBottom: theme.spacing(2) }}
            />
            <TextField
                fullWidth
                required
                name="neighborhood"
                size="small"
                label="Barrio"
                onChange={handleInputChange}
                style={{ paddingBottom: theme.spacing(2) }}
            />
            <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
                <FormGroup row >
                    <FormControlLabel
                        control={<Checkbox name="asistire" color="primary" checked={formData.asist} onChange={handleInputChange} />}
                        label="Asistiré"
                        style={{ marginRight: '16px' }}
                    />
                    <FormControlLabel
                        control={<Checkbox name="noAsistire" color="primary" checked={formData.notAssit} onChange={handleInputChange} />}
                        label="No Asistiré"
                    />
                </FormGroup>
            </Grid>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="contained" color="primary" type="submit" style={{ marginTop: 16 }}>
                    Enviar
                </Button>
            </div>
        </form>
    )
}

export default CustomForm