// coverPage.js

const coverPage = () => {
  return `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Will Cover Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        width: 100%
        height: 100%
        
      }

      @page {
        size: A4;
        margin: 0;
      }
      
      .main-container {
        width: 21cm; /* A4 width */
        height: 29.7cm; /* A4 height */
        padding: 2cm; /* A4 default margin */
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

      .text-2xl {
        font-size: 1.5rem;
      }

      .text-3xl {
        font-size: 1.875rem;
      }

      .py-4 {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }

      .text-lg {
        font-size: 1.125rem;
      }

      .bg-gray-100 {
        background-color: #f0f4f8;
      }

      .pr-2 {
        padding-right: 0.5rem;
      }
    </style>
  </head>

  <body>
    <main class="main-container">
      <div class="h-[600px] flex justify-center items-center flex-col">
        <h2 class="text-2xl">LAST WILL AND TESTAMENT OF</h2>
        <h1 class="text-3xl py-4">Personal full name</h1>
      </div>

      <div class="mt-28">
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
  </body>
</html>

  
  `;
};

export default coverPage;
