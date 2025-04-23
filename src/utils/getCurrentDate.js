const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleDateString("en-US", { month: "short" }); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0"); // Days are one-based
  const formattedDate = `${day} ${month} ${year}`;
  //   console.log(formattedDate);

  return formattedDate;
};

export default getCurrentDate;
