// coverPage.js

const coverPage = (personalDetails) => {
  const { fullName } = personalDetails || {};

  return `
  
  <main class="main-container">
  <div class="h-[600px] flex justify-center items-center flex-col">
    <h2 class="text-2xl">LAST WILL AND TESTAMENT OF</h2>
    <h1 class="text-3xl py-4">${fullName}</h1>
  </div>

  <div class="my-28">
    <div class="p-6 mx-auto bg-gray-100">
      <p class="py-1">
        <strong>Please note the following:</strong>
      </p>

      <div class="flex justify-start">
        <p class="pr-2">1.</p>
        <p>Please Print.</p>
      </div>

      <div class="flex justify-start">
        <p class="pr-2">2.</p>
        <p>
          Sign it before two (2) witnesses (These 2 witnesses must be of
          sound mind, be above the age of 21 years old, and must not be
          beneficiaries under the Will).
        </p>
      </div>

      <div class="flex justify-start">
        <p class="pr-2">3.</p>
        <p>Store it in a safe location. We recommend a safe deposit box.</p>
      </div>

      <div class="flex justify-start">
        <p class="pr-2">4.</p>
        <p>
          Consider notifying the Will Registry that your Will has been made.
        </p>
      </div>
      <div class="flex justify-start">
        <p class="pr-2">5.</p>
        <p>
          Inform Your executors of their role and the location of the Will.
        </p>
      </div>
    </div>
  </div>
</main>

  
  `;
};

export default coverPage;
