import assetsAndSpecialInstructions from "./will-temp/assetsAndSpecialInstructions";
import benefciaryDetails from "./will-temp/benefciaryDetails";
import coverPage from "./will-temp/coverPage";
import executorDetails from "./will-temp/executorDetails";
import personalDetails from "./will-temp/personalDetails";
import religionDetails from "./will-temp/religionDetails";

const willTemp = (formsData) => {
  const pageHTML = `
  <!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <script src="https://cdn.tailwindcss.com"></script>

      <title>Will - Main Page</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }
        .main-container {
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
  
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

        .my-6 {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
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

        .text-justify{
          text-align: justify;
        }
        .my-28 {
          margin-top: 7rem;
          margin-bottom: 3rem;
        }
       
      </style>
    </head>
  
    <body>



    ${coverPage(formsData?.personalDetails)}
      <main class="main-container text-lg text-justify">
        <div>
          ${personalDetails(formsData?.personalDetails)}
          ${executorDetails(formsData)}
  
          <div class="flex justify-start mt-2">
            <p class="pr-2">2.</p>
            <p>
              I DECLARE that in the interpretation of this Will, the expression
              “my Trustee” shall (where the context permits) mean the trustee or
              trustees for the time being hereof whether original or substituted,
              and if there be no such trustee it shall (where the context permits)
              include the person(s) empowered by law conferred upon the trustee(s)
              hereof and willing or bound to exercise or perform the same.
            </p>
          </div>
  
          <div class="flex justify-start mt-2">
            <p class="pr-2">3.</p>
            <p>
              I direct my Trustee to pay all my just debts and testamentary
              expenses upon my death and to spend such sum as my Trustee shall
              think fit for my funeral expenses.
            </p>
          </div>
  
          <div class="flex justify-start mt-2">
            <p class="pr-2">4.</p>
            <p>
              Unless otherwise stipulated, all bequests and gifts made herein
              shall be subject to payment of my just debts, funeral and
              testamentary expenses and estate duty, if any, payable on my death.
            </p>
          </div>
  
          ${religionDetails(formsData?.instructions)}
  
          ${benefciaryDetails(
            formsData?.beneficiaries,
            formsData?.assetAllocation
          )}
  
          <div class="flex justify-start mt-2">
            <p class="pr-2">7.</p>
            <p>
              In the event any of the beneficiaries referred to in Clause 6 shall
              predecease me, then the share which such deceased beneficiary of
              mine would have been entitled to had [he/ she] been alive shall
              lapse absolutely and shall be given to the surviving beneficiary,
              and if more than one, in equal shares.
            </p>
          </div>
  
          <div class="flex justify-start mt-2">
            <p class="pr-2">8.</p>
            <p>
              In the event that it is not practicable or possible for my Trustee
              to distribute any of my moveable and immovable properties situate
              whatsoever and wheresoever situate to the beneficiaries in the
              manner as directed under this Will, I direct that my Trustee shall
              have the power to sell, call in and convert the whole or such part
              or parts of my moveable and immovable properties as shall not
              consist of cash and at such time or times and in such manner as my
              Trustee shall in my Trustee’s absolute and uncontrolled discretion
              think fit with power to postpone such sale calling in and conversion
              of the same for such period or periods as my Trustee shall in my
              Trustee’s own absolute and uncontrolled discretion decide and to
              stand possessed of the monies arising therefrom (hereinafter
              referred to as “the said monies”) for the purposes of this Will. And
              my Trustee shall stand possessed of and divide the said monies to
              the beneficiaries entitled under this Will in such sums as shall
              represent each beneficiary’s respective entitlement to the same.
            </p>
          </div>
  
          <div class="flex justify-start mt-2">
            <p class="pr-2">9.</p>
            <p>I DIRECT that in the carrying out and discharge of the trusts and
              duties hereof, my Trustee shall not be liable for any loss arising
              as a result of my Trustee concurring or refusing or failing to
              concur in any exercise of any discretion or power conferred on my
              Trustee by this Will or any loss arising by reason of any improper
              investment made in good faith, or by reason of any mistake or
              omission made in good faith by my Trustee, or by reason of any other
              matter or thing except wilful fraud or wrong-doing on the part of my
              Trustee.
            </p>
          </div>
  
          <div class="mt-28">
            <p>
              <strong>IN WITNESS WHEREOF</strong> I have hereunto set my hand to
              this Will this 6th of December 2023.
            </p>
  
            <p>
              SIGNED by the abovenamed Shohag Roy as his Last Will and Testament
              in the presence of us both present at the same time who at his
              request and in his presence and in the presence of each other have
              hereunto subscribed our names as witnesses:-
            </p>
  
            <div class="my-10">
              <p>______________________________</p>
              <p>Shohag Roy</p>
            </div>
  
            <div class="flex justify-between items-center my-10">
              <div>
                <div>
                  <p>______________________________</p>
                  <p><strong>Signed by Witness </strong></p>
                </div>
                <div class="my-4">
                  <p>Name: ________________________</p>
                </div>
                <div>
                  <p>NRIC / Passport No. / ID No. :</p>
                  <p class="my-4">______________________________</p>
                </div>
  
                <div>
                  <p>Address:</p>
                  <p class="mt-4">______________________________</p>
                  <p class="mt-4">______________________________</p>
                  <p class="mt-4">______________________________</p>
                </div>
              </div>
  
              <div>
                <div>
                  <p>______________________________</p>
                  <p><strong>Signed by Witness </strong></p>
                </div>
                <div class="my-4">
                  <p>Name: ________________________</p>
                </div>
                <div>
                  <p>NRIC / Passport No. / ID No. :</p>
                  <p class="my-4">______________________________</p>
                </div>
  
                <div>
                  <p>Address:</p>
                  <p class="mt-4">______________________________</p>
                  <p class="mt-4">______________________________</p>
                  <p class="mt-4">______________________________</p>
                </div>
              </div>
            </div>
          </div>


          ${assetsAndSpecialInstructions(formsData?.instructions)}
        </div>
      </main>
    </body>
  </html>`;

  return pageHTML;
};

export default willTemp;
