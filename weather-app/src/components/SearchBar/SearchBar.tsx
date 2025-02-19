// src/components/SearchBar/SearchBar.tsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaSearch } from "react-icons/fa"; // Import search icon
import Switch from "react-switch"; // Import toggle switch
import {
  Form,
  InputContainer,
  Input,
  ErrorMessage,
  UnitContainer,
  UnitLabel,
  Button,
  ResponsiveContainer,
  InlineContainer, // Add this import
} from "./SearchBar.styles"; // Import styles

interface SearchBarProps {
  onSubmit: (city: string) => void;
  onUnitChange: (unit: "metric" | "imperial") => void;
  unit: "metric" | "imperial";
}

const SearchBar = ({ onSubmit, onUnitChange, unit }: SearchBarProps) => {
  // FORMIK FORM HANDLING
  const formik = useFormik({
    initialValues: {
      city: "", // Initial value for the city input
    },
    validationSchema: Yup.object({
      city: Yup.string().required("City is required"),
    }), // Yup validation schema
    onSubmit: (values) => {
      onSubmit(values.city); // Call the parent onSubmit with the city value
    },
  });

  // TOGGLE SWITCH HANDLER
  const handleUnitToggle = (checked: boolean) => {
    onUnitChange(checked ? "imperial" : "metric");
  };

  return (
    <ResponsiveContainer>
      <Form onSubmit={formik.handleSubmit}>
        {/* INPUT, BUTTON, AND UNIT CONTAINER */}
        <InlineContainer>
          {/* INPUT AND BUTTON CONTAINER */}
          <InputContainer>
            <Input
              type="text"
              name="city"
              placeholder="Enter city name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
            <Button type="submit" aria-label="Search">
              <FaSearch /> {/* Search icon */}
            </Button>
          </InputContainer>

          {/* UNIT SELECTION WITH TOGGLE SWITCH */}
          <UnitContainer>
            <UnitLabel>Metric: °C</UnitLabel>
            <Switch
              onChange={handleUnitToggle}
              checked={unit === "imperial"}
              checkedIcon={false}
              uncheckedIcon={false}
              height={20}
              width={48}
              handleDiameter={18}
              offColor="#ccc"
              onColor="#007BFF"
            />
            <UnitLabel>Imperial: °F</UnitLabel>
          </UnitContainer>
        </InlineContainer>

        {/* VALIDATION ERROR */}
        {formik.touched.city && formik.errors.city ? (
          <ErrorMessage>{formik.errors.city}</ErrorMessage>
        ) : null}
      </Form>
    </ResponsiveContainer>
  );
};

export default SearchBar;