import React from 'react';
import { Grid, Card, CardContent, Typography, useTheme, Link, Container } from '@mui/material';
import Data from "../../shared/Data.json"
import { EMAIL_BODY, EMAIL_SUBJECT } from '../../shared/constants';
import CustomForm from '../../components/customform/CustomForm';
import { TallerHomeDTO } from '../../shared/interface';
import ErrorPage from '../error/Error';

import "./TallerHome.css"


const TallerHome: React.FC<{}> = () => {
    const theme = useTheme();

    const fullData: TallerHomeDTO = Data;

    const ItemData = (properties: { caption: string, description?: string }) => {
        return (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography style={{textAlign: 'justify'}} variant="body2">
                    <strong>{properties.caption || "Desconocido"}</strong>&nbsp;{properties.description || ""}
                </Typography>
            </Grid>
        )
    }


    return (
        <Container maxWidth="md" style={{ padding: theme.spacing(2, 0) }}>
            {!fullData || Object.keys(fullData).length === 0 ?
                <ErrorPage />
                : <Grid container spacing={2} justifyContent="center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
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
                                <ItemData caption='Ubicacion:' description={fullData.location} />
                            </Grid>
                            <Grid item xs={12}>
                                <ItemData caption='Fecha:' description={fullData.date} />
                            </Grid>
                            <Grid item xs={12}>
                                <ItemData caption='Hora:' description={fullData.hour} />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomForm fullData={fullData} />
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
            }
        </Container>
    );
};

export default TallerHome;
