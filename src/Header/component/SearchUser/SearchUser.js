import React, { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import NewSelect from "../../../helpers/NewSelect";
import { DataContext } from "./../../../context/dataContext";
import { useHistory } from "react-router-dom";

const SearchUser = () => {
  const [value, setValue] = useState([]);
  const [options, setOptions] = useState([]);
  const context = useContext(DataContext);

  useEffect(() => {
    const users = context.users;
    const options = users.map((user) => ({ label: user.name, value: user.id }));
    setOptions(options);
  }, [context.users]);

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/user/${value[0].value}`);
    setValue([]);
  };

  return (
    <>
      <Form inline onSubmit={(e) => onSubmit(e)}>
        <InputGroup>
        <NewSelect
          labelKey={"label"}
          name={"searchUser"}
          label={"Search"}
          options={options}
          value={value}
          onChange={(selected) => setValue(selected)}
          />
        <Button type={"submit"} variant="dark">
          Search
        </Button>
          </InputGroup>
      </Form>
    </>
  );
};

export default SearchUser;
