import numberToWords from "@/utils/numberToWord";

const benefciaryDetails = (beneficiaries, assetAllocation) => {
  const beneficiariesWithAsset = beneficiaries
    ?.map((item, i) => {
      const asset = assetAllocation?.properties?.filter(
        (data) => data?.beneficiary === i
      );

      if (asset) {
        return {
          ...item,
          assets: asset,
        };
      } else return null;
    })
    .filter((item) => item);

  return `
  <div>
  <div class="flex justify-start mt-2">
        <p class="pr-2">6.</p>
        <div>
          <p>
            <strong>I GIVE, DEVISE AND BEQUEATH</strong> all of my moveable and
            immovable properties whatsoever and wheresoever situate not hereby
            or by any codicil hereto specifically disposed (including any
            property over which I may have a general power of appointment or
            disposition by will) and including any reversionary interest in any
            of my assets or properties falling unto my estate after my death as
            follows :
          </p>

          ${beneficiaries
            ?.map((item, i) => {
              const { fullName, idNumber, idType, share } = item || {};

              return `<div class="flex justify-start mt-2">
                        <p class="pr-2">${
                          i === 0
                            ? "a"
                            : i === 1
                            ? "b"
                            : i === 2
                            ? "c"
                            : i === 3
                            ? "d"
                            : i === 4
                            ? "e"
                            : i === 5
                            ? "f"
                            : i === 6
                            ? "g"
                            : i === 7
                            ? "h"
                            : i === 8
                            ? "j"
                            : i === 9
                            ? "k"
                            : "j"
                        }) </p>
                        <p>
                        <strong>${numberToWords(
                          Number(share)
                        )}</strong> per cent
                        <strong>(${share}%)</strong> to
                        <strong>
                            ${fullName} (${idType}. ${idNumber})
                        </strong>
                        </p>
                    </div>`;
            })
            .join("")}



            <div>


            ${
              beneficiariesWithAsset?.length &&
              beneficiariesWithAsset
                ?.map((item, i) => {
                  const { fullName, idNumber, idType, address, assets } =
                    item || {};

                  return `<div class="flex justify-start mt-2">
                            <p class="pr-2">${
                              i === 0
                                ? "I"
                                : i === 1
                                ? "II"
                                : i === 2
                                ? "III"
                                : i === 3
                                ? "IV"
                                : i === 4
                                ? "V"
                                : i === 5
                                ? "VI"
                                : i === 6
                                ? "VI"
                                : i === 7
                                ? "VII"
                                : i === 8
                                ? "VIII"
                                : i === 9
                                ? "IX"
                                : "X"
                            }) </p>
                            <p>
                            I give all my rights title interest and benefits in the Gift of Immovable Property known as 

                           <strong>
                           ${assets
                             ?.map((asset) => {
                               return `
                            ${asset?.address?.line1} ${asset?.address?.line2}- ${asset?.address?.postalCode}, ${asset?.address?.country}
                                  `;
                             })
                             .join("")} 
                           </strong> to  <strong>
                              ${fullName} (${idType}. ${idNumber})
                          </strong> of 
                            <strong>${address?.line1} ${address?.line2}- ${
                    address?.postalCode
                  }, ${address?.country}</strong>, absolutely.
                            
                            </p>
                        </div>`;
                })
                .join("")
            }
            </div>


        </div>
      </div>



      <div>
      
      
      
      
      </div>
  
  </div>
  `;
};

export default benefciaryDetails;
