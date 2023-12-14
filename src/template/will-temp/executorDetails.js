const executorDetails = (formData) => {
  const { executors, alternativeExecutors } = formData || {};

  return `
    <div class="my-2">
    <div class="flex justify-start mt-2 ">
    <p class="pr-2">1.</p>
    <div>
    <p>
      <strong
        >I appoint Full Name of ${executors?.fullName} ( ${
    executors?.idType
  }. ${executors?.idNumber} )
        of ${executors?.address?.line1} ${executors?.address?.line2}- ${
    executors?.address?.postalCode
  }, ${executors?.address?.country},</strong
      >
      to be the Executor and Trustee of this Will (collectively “my
      Trustee”).
    </p>

    ${
      alternativeExecutors?.fullName &&
      ` <p class="mt-2">In the event my Trustee <strong>(“${executors?.fullName}”)</strong> shall become incapacitated within the meaning of the Mental Capacity Act Cap 177A or shall for any reason be incapable of acting as the Trustee of my estate, I appoint <strong>${alternativeExecutors?.fullName} (  ${alternativeExecutors?.idType}. ${alternativeExecutors?.idNumber} )</strong>  of ${alternativeExecutors?.address?.line1} ${alternativeExecutors?.address?.line2}- ${alternativeExecutors?.address?.postalCode}, ${alternativeExecutors?.address?.country} to be my Trustee in place.
    </p>`
    }
    </div>
</div>
    
    </div>
    
    `;
};

export default executorDetails;
