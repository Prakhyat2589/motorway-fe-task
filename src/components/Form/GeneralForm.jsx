import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Form,
  FormField,
  Input,
  Label,
  Button,
  Para,
  Success,
  NavButton,
} from "./GeneralForm.style";

const GeneralForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [salary, setSalary] = useState("10");
  const [successMessage, setSuccessMessage] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSuccessMessage(true);
    reset();
    setTimeout(() => {
      setSuccessMessage(false);
    }, 3000);
  };

  return (
    <>
      <Link to={{ pathname: "/" }}>
        <NavButton> Back to Homepage</NavButton>
      </Link>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Please fill the form</h1>
        <FormField>
          <Label htmlFor="First Name">First Name</Label>
          <Input
            type="text"
            name="firstname"
            aria-label="firstname"
            aria-required="true"
            {...register("firstname", {
              required: "First name is required.",
            })}
          />
          {errors.firstname && <Para>{errors.firstname.message}</Para>}
        </FormField>
        <FormField>
          <Label htmlFor="Last Name">Last Name </Label>
          <Input
            type="text"
            name="lastname"
            aria-label="lastname"
            aria-required="true"
            {...register("lastname", {
              required: "Last name is required.",
            })}
          />
          {errors.lastname && <Para>{errors.lastname.message}</Para>}
        </FormField>
        <FormField>
          <Label htmlFor="Email">Email </Label>
          <Input
            type="text"
            name="email"
            aria-label="email"
            aria-required="true"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
          />
          {errors.email && <Para>{errors.email.message}</Para>}
        </FormField>

        <FormField>
          <Label htmlFor="Date of Birth">Date of Birth</Label>
          <Input
            name="dob"
            type="date"
            aria-label="date of birth"
            aria-required="true"
            max={new Date().toISOString().split("T")[0]}
            {...register("dob", {
              required: "Date of Birth is required.",
              pattern: {
                message: "Date of Birth is not valid.",
              },
            })}
          />
          {errors.dob && <Para>{errors.dob.message}</Para>}
        </FormField>

        <FormField>
          <Label htmlFor="Favourite Color">Favourite Color (in Hex code)</Label>
          <Input
            type="text"
            name="color"
            aria-label="color"
            aria-required="true"
            {...register("color", {
              required: "Favourite Color is required.",
              pattern: {
                value: /^#[0-9A-F]{6}$/i,
                message: "Enter color in Hex code e.g. #000000",
              },
            })}
          />
          {errors.color && <Para>{errors.color.message}</Para>}
        </FormField>

        <FormField>
          <Label htmlFor="Salary">Salary Range (In GBP)</Label>
          <span>£{parseInt(salary) * 1000}</span>
          <Input
            type="range"
            name="salary"
            aria-label="salary"
            min="10"
            max="50"
            step="5"
            defaultValue={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </FormField>

        <FormField>
          <Button type="submit" aria-label="submit">
            Submit
          </Button>
        </FormField>
        {successMessage && <Success>Form submitted successfully !!</Success>}
      </Form>
    </>
  );
};

export default GeneralForm;
