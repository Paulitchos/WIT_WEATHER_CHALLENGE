import React from "react";

//FORMIK + YUP
import { useFormik } from "formik";
import * as Yup from "yup";

//ICONS
import { FaSearch } from "react-icons/fa"; // Import search icon
import Switch from "react-switch"; // Import toggle switch

//STYLES
import {
  Form,
  InputContainer,
  Input,
  ErrorMessage,
  UnitContainer,
  UnitLabel,
  Button,
  ResponsiveContainer,
  InlineContainer,
  StyledSwitch,
} from "./SearchBar.styles";

//TYPES
interface SearchBarProps {
  onSubmit: (city: string) => void;
  onUnitChange: (unit: "metric" | "imperial") => void;
  unit: "metric" | "imperial";
}

const SearchBar = ({ onSubmit, onUnitChange, unit }: SearchBarProps) => {
  // FORMIK FORM HANDLING
  const formik = useFormik({
    initialValues: {
      city: "",
    },
    validationSchema: Yup.object({
      city: Yup.string()
        .required("City is required")
        .trim()
        .min(1, "City cannot be empty"),
    }),
    onSubmit: (values) => {
      const trimmedCity = values.city.trim();
      onSubmit(trimmedCity);
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
              <FaSearch />
            </Button>
          </InputContainer>

          {/* UNIT SELECTION WITH TOGGLE SWITCH */}
          <UnitContainer>
            <UnitLabel>Metric: °C</UnitLabel>
            <StyledSwitch>
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
                className="Switch"
              />
            </StyledSwitch>
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
