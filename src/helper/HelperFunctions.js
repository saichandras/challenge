const getDob = (str_dob) => {
    let dob = str_dob.split("T");
    return dob[0];
};

export {getDob}
