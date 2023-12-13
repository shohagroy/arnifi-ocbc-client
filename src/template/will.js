import coverPage from "./will-temp/coverPage";

const willTemp = () => {
  const coverTemp = coverPage();

  const pagesHTML = [coverTemp, coverTemp, coverTemp];

  const pageHTML = `
      <!DOCTYPE html>
      <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <title>Customer Details Listing</title>
      
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
            }
          </style>
        </head>
      
        <body>
          <main class="mx-auto p-10">
            <div>
      
              <div class="mt-4 flex justify-between">
                <div>
                  <div class="flex item-center">
                    <p class="w-[120px]">Fiscal Year:</p>
                    <p>01/07/2023 - 30/06/2024 (Active)</p>
                  </div>
      
                  <div class="flex item-center">
                    <p class="w-[120px]">Customer:</p>
                    <p>ALL</p>
                  </div>
                </div>
      
                <div>
                  <div class="flex item-center">
                    <p class="">Page-</p>
                    <p>${"page"}</p>
                  </div>
                </div>
              </div>
      
              <div
                class="py-2 mt-3 text-sm font-bold border-t-2 border-b-2 border-gray-500"
              >
                <div class="flex justify-between item-center">
                  <p class="w-[40px]">SL</p>
                  <p class="w-[200px]">Name</p>
                  <p class="w-[150px] text-center">Address</p>
                  <p class="w-[150px] text-center">Contact</p>
                  <p class="w-[150px] text-center">Balance</p>
                </div>
              </div>
      
      
              
              
      
            </div>
          </main>
        </body>
      </html>
      `;

  // pagesHTML.push(pageHTML);

  return pagesHTML.join("");
};

export default willTemp;
