import React from 'react';
import { Grid, Card, CardContent, Typography, TextField, Checkbox, Button, useTheme, Link, FormGroup, FormControlLabel, Container } from '@mui/material';
import Data from "../shared/Data.json"
import { EMAIL_BODY, EMAIL_SUBJECT } from '../shared/constants';
import "./TallerHome.css"

interface TallerHome {
    title: string;
    resume: string;
    location: string;
    date: string;
    hour: string;
    caption: string;
    contacPhone: string;
    contact: string;
}

interface FormData {
    fullName: string;
    neighborhood: string;
    asist: boolean;
    notAssit: boolean;
}

const TallerHome: React.FC<{}> = () => {
    const theme = useTheme();
    const fullData: TallerHome = Data;

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
            <Container maxWidth="md" style={{padding: theme.spacing(2,0)}}>
                <Grid container spacing={2} justifyContent="center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                    <Grid item xs={12} sm={10} md={8} lg={6} xl={5}>
                        <Grid container spacing={2} direction="column" alignItems="center">
                            <Grid item xs={12}>
                                <Typography variant="h6" align="center">
                                    {fullData.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="body1">{fullData.resume}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2">Ubicación: {fullData.location}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2">{`${fullData.date} ${fullData.hour}`}</Typography>
                            </Grid>
                            <Grid item xs={12}>
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
                                    <Grid item xs={12} style={{ display: "flex", justifyContent: "space-between" }}>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox name="asistire" color="primary" checked={formData.asist} onChange={handleInputChange} />}
                                                label="Asistiré"
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
                            </Grid>
                            <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                                <Typography variant="caption" >
                                    {fullData.caption}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body2" >
                                    Mail de contacto:&nbsp;
                                    <Link 
                                        href={`mailto:${fullData.contact}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`} 
                                        target="_blank" 
                                    >
                                        {fullData.contact}
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
    );
};

export default TallerHome;
