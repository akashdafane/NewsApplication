import {
    Button,
    Card,
    CardContent,
    CircularProgress,
    Grid,
    makeStyles,
    Typography
} from '@material-ui/core';
import { Field, FieldArray, Form, Formik } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import React, { useEffect, useState } from 'react';
import FieldArrayList from './FieldArrayList'
import { array, boolean, number, object, string, ValidationError } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { fieldArray } from '../actions/actionType';
import { Link } from 'react-router-dom';



const emptyDonation = { institution: '', percentage: 0 };
//   const useStyles = makeStyles((theme) => ({
//     errorColor: {
//       color: theme.palette.error.main,
//     },
//     noWrap: {
//       [theme.breakpoints.up('sm')]: {
//         flexWrap: 'nowrap',
//       },
//     },
//   }));



const temp1 = []

function FieldArr({ history }) {


    console.log("history", history)
    // const [test, setTest] = useState([]);
   
    // const { FieldArrayData } = history.location.state

    const editdata = history.location.state || ''

    // console.log("history", editdata)

    const {
        fullName,
        donationsAmount,
        termsAndConditions,
        action,
        initialValues,
    } = editdata
    

    const empty = [];  
    
    editdata.donations && editdata.donations.length > 0 && editdata.donations.map((k, v) => {
        console.log("k", k)
        empty.push({ "institution": k.institution, "percentage": k.percentage });
    })


    // const emptyDonation = {institution: empty.institution, percentage: empty.percentage};

    // console.log("3",FieldArrayData)

    // const FieldArrayData = useSelector((state) => state.fieldArrayReducer.fieldArray)

    // const user = useSelector((state) => state.fieldArrayReducer)
    const dispatch = useDispatch()

    return (

        <Card>
            <CardContent>
                <Formik
                    initialValues={{
                        fullName: editdata == undefined ? '' : fullName,
                        donationsAmount: editdata == undefined ? '' : donationsAmount,
                        termsAndConditions: editdata == undefined ? '' : termsAndConditions,
                        donations: editdata == undefined ? '' : empty
                    }}
                    validationSchema={object({
                        fullName: string()
                            .required('Your name is required')
                            .min(2, 'Your name needs to be at least 3 characters')
                            .max(10, 'Your name needs to be at most 10 characters'),
                        donationsAmount: number().required().min(10),
                        termsAndConditions: boolean().required().isTrue(),
                        // donations: array(
                        //     object({
                        //         institution: string()
                        //             .required('Institution name needed')
                        //             .min(3, 'Institution name needs to be at least 3 characters')
                        //             .max(
                        //                 10,
                        //                 'Institution name needs to be at most 10 characters'
                        //             ),
                        //         percentage: number()
                        //             .required('Percentage needed')
                        //             .min(1, 'Percentage needs to be at least 1%')
                        //             .max(100, 'Percentage can be at most 100%'),
                        //     })
                        // )
                        //     .min(1, 'You need to provide at least 1 institution')
                        // .max(3, 'You can only provide 3 institution')

                    })}
                    onSubmit={async (values) => {
                        //dispatch action
                        //    restform({values: ''})
                        // console.log("values", values)
                        //    setTest(values)
                        
                            temp1.push(values)
                        
                        
                        dispatch(fieldArray(temp1))



                        // return new Promise((res) => setTimeout(res, 2500));
                    }}
                >
                    {({ values, errors, isSubmitting, isValid }) => (
                        <Form autoComplete="off">
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <Field
                                        fullWidth
                                        name="fullName"
                                        component={TextField}
                                        label="Full Name"
                                    />
                                </Grid>
                                {/* {
                                    console.log("values", values, "error", errors)
                                } */}

                                <Grid item>
                                    <Field
                                        fullWidth
                                        name="donationsAmount"
                                        type="number"
                                        component={TextField}
                                        label="Donation (£)"
                                    />
                                </Grid>

                                <FieldArray name="donations">
                                    {({ push, remove }) => (
                                        <React.Fragment>
                                            <Grid item>
                                                <Typography variant="body2">
                                                    All your donations
                                                 </Typography>
                                            </Grid>

                                            {values.donations.map((k, index) => (
                                                <Grid
                                                    container
                                                    item
                                                    key={index}
                                                    spacing={2}
                                                >

                                                    <Grid item container spacing={2} xs={12} sm="auto">
                                                        <Grid item xs={12} sm={6}>
                                                            <Field
                                                                fullWidth
                                                                name={`donations[${index}].institution`}
                                                                component={TextField}
                                                                label="Institution"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <Field
                                                                fullWidth
                                                                name={`donations[${index}].percentage`}
                                                                component={TextField}
                                                                type="number"
                                                                label="Percentage (%)"
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} sm="auto">
                                                        <Button
                                                            disabled={isSubmitting}
                                                            onClick={() => remove(index)}
                                                        >
                                                            Delete
                                                    </Button>
                                                    </Grid>
                                                </Grid>
                                            ))}

                                            <Grid item>
                                                <Button
                                                    disabled={isSubmitting}
                                                    variant="contained"
                                                    onClick={() => push(emptyDonation)}
                                                >
                                                    Add Donation
                                          </Button>
                                            </Grid>
                                        </React.Fragment>
                                    )}
                                </FieldArray>

                                <Grid item>
                                    <Field
                                        name="termsAndConditions"
                                        type="checkbox"
                                        component={CheckboxWithLabel}
                                        Label={{
                                            label: 'I accept the terms and conditions',
                                        }}
                                    />
                                </Grid>

                                <Grid item>
                                    <Button
                                        disabled={isSubmitting}
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        startIcon={
                                            isSubmitting ? (
                                                <CircularProgress size="0.9rem" />
                                            ) : undefined
                                        }
                                    >
                                        {isSubmitting ? 'Submitting' : 'Submit'}
                                    </Button>
                                    <Link to="/FieldArrayList"><Button

                                        type="button"
                                        variant="contained"
                                        color="secondary"

                                    >
                                        List
                                    </Button> </Link>
                                </Grid>
                            </Grid>
                            {/* <FieldArrayList  /> */}
                            {/* <pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>
    );
}
export default FieldArr
