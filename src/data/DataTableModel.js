import { getModel } from "sviosdi-datatable";
import states from "./states.js";

const optionsStates = states.map((e) => [e.name, e.abbreviation]);

const dataTableModel = {
  id: "datable-form-create",
  buttons: [
    {
      type: "new",
      label: "New ",
      title: "Create new employee",
      labelSubmit: "Save",
      labelReset: "Clear",
    },
  ],
  entries: [5, 10, 20, 25, 30],
  nbEntries: 20 /* ignoré si présence de entries */,
  footer: true,
  sortCol: 1,
  ascending: true,
  headers: [
    {
      title: "First name",
      field: "firstName",
      type: "string",
      input: "text",
      width: "100px",
    },
    {
      title: "Last name",
      field: "lastName",
      type: "string",
      input: "text",
      width: "100px",
    },
    {
      title: "Date of birth",
      field: "dateOfBirth",
      type: "date",
      input: "date",
      width: "80px",
    },

    {
      title: "Whealth Health",
      input: "fieldset",
      content: [
        {
          title: "Start date",
          field: "startDate",
          type: "date",
          input: "date",
          width: "70px",
        },
        {
          title: "Department",
          field: "department",
          input: "Select",
          options: [
            "Sales",
            "Marketing",
            "Engineering",
            "Human Resources",
            "Legal",
          ],
          selected: "0",
          width: "95px",
        },
      ],
    },
    {
      title: "Address",
      input: "fieldset",
      content: [
        {
          title: "Street",
          field: "street",
          type: "string",
          input: "text",
          width: "180px",
        },
        {
          title: "City",
          field: "city",
          type: "string",
          input: "text",
          width: "90px",
        },
        {
          title: "State",
          field: "state",
          input: "Select",
          options: optionsStates,
          selected: "0",
          width: "30px",
        },
        {
          title: "Zip Code",
          field: "zipCode",
          type: "number",
          input: "number",
          width: "50px",
        },
      ],
    },
  ],
};

export default getModel(dataTableModel);
