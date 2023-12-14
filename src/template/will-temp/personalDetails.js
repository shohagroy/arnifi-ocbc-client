const personalDetails = (details) => {
  const { fullName, idType, idNumber, address } = details || {};

  return `
    <div>
        <p>
            <strong
                >THIS IS THE LAST WILL AND TESTAMENT of (“${fullName}”) (${idType}. ${idNumber}) of ${address?.line1} ${address?.line2}- ${address?.postalCode}, ${address?.country},
            </strong
              >
              whereby I revoke all former Wills, Codicils and Testamentary
              dispositions heretofore made by me and declare this to be my Last
              Will and Testament.
            </p>
          </div>
    
    `;
};

export default personalDetails;
