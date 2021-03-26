import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Button, CircularProgress, Typography } from '@material-ui/core';
import { CheckboxWithLabel, TextField } from 'formik-material-ui'
import { Field, FieldArray, Form, Formik } from 'formik';
import { object, number, string, boolean } from 'yup';
import FieldArrayList from './FieldArrayList';


const emptyDonation = { institution: '', }

const FieldArr = () => {

    const [datas, setDatas] = useState('');

    console.log("values", datas)

    useEffect(() => {
        setDatas(FieldArr.values)
    })
    // var pass = FieldArr.values
    return (
        <Card>
            <CardContent>
                <Formik initialValues={{
                    fullName: '',
                    donationsAmount: 0,
                    termsAndCondition: false,
                    donations: [emptyDonation],
                }}
                    validationSchema={object({
                        fullName: string()
                            .required('You need to provide a name')
                            .min(2, 'Your FullNmae needs at least 2 characters')
                            .max(10, 'Your Name cannot be Bigger than 10Characters'),
                        donationsAmount: number().required().min(10),
                        termsAndCondition: boolean().required(),
                    })}
                    onSubmit={async (values) => {
                        console.log("values", values)
                        return new Promise(res => setTimeout(res, 2500));
                    }}>
                    <FieldArrayList data={datas} />
                    {({ values, errors, isSubmitting }) => (
                        <Form autoComplete="off" >
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <Field
                                        fullWidth
                                        name="fullName"
                                        component={TextField}
                                        label="fullName"
                                    />
                                </Grid>
                                <Grid item>
                                    <Field
                                        fullWidth
                                        name="donationsAmount"
                                        type="number"
                                        component={TextField}
                                        label="Donation ($)"
                                    />
                                </Grid>
                                <FieldArray name="donations">
                                    {({ push, remove, }) => (
                                        <React.Fragment>
                                            <Grid item>
                                                <Typography variant="h5">
                                                    All your donations
                                                    </Typography>
                                            </Grid>
                                            {values.donations.map((_, index) => (
                                                <Grid conatiner key={index} >
                                                    <Grid item item xs={12} sm="auto">
                                                        <Field
                                                            fullWidth
                                                            name={`donations[${index}].institution`}
                                                            component={TextField} label="Institution"
                                                        />
                                                    </Grid>
                                                    <Grid item item xs={12} sm="auto">
                                                        <Field
                                                            fullWidth
                                                            name={`donations[${index}].percentage `}
                                                            component={TextField} label="Percentage"
                                                        />
                                                        <Grid item>
                                                            <Button onClick={() => remove(index)}>Delete</Button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            ))}
                                            <Grid item>
                                                <Button variant="contained" onClick={() => push(emptyDonation)}>
                                                    Add Donation
                                                </Button>
                                            </Grid>
                                        </React.Fragment>
                                    )}
                                </FieldArray>
                                <Grid item>
                                    <Field
                                        name="termsAndCondition "
                                        type="checkbox"
                                        component={CheckboxWithLabel}
                                        Label={{ label: 'I accepts terms and condition' }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        variant="contained"
                                        color="primary"
                                        startIcon={isSubmitting ? <CircularProgress size="0.9rem" /> : undefined}
                                    >
                                        {isSubmitting ? 'Submitting' : 'Submit'}
                                    </Button>
                                </Grid>
                            </Grid>
                            <h1>Hello </h1>
                            <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>

                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>

    )
}

export default FieldArr;