const FormInput = (props) => {
  return (
    <div className="forminput">
      <label for={props.id}>{props.label}</label>
      <div className="lg">
        <input
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          type={props.type}
          onChange={props.handleChange}
          required
        />
        {/* {props.name === "password" ? (
        //   <InputGroupAddon addonType="append">
            {/* <span className="ml-3" onClick={props.handleShowPassword}>
              {props.type === "password" ? (
                <VscEyeClosed
                  size="1.7rem"
                  style={{ verticalAlign: "middle", cursor: "pointer" }}
            //     /> */}
        {/* //   ) : (
            //     <VscEye */}
        {/* //       size="1.7rem"
            //       style={{ verticalAlign: "middle", cursor: "pointer" }}
            //     /> */}
        {/* //   )}
            // </span> */}
        {/* //   </InputGroupAddon> */}
        {/* ) : null} */}
      </div>
    </div>
  );
};

export default FormInput;
