const assetsAndSpecialInstructions = (instructions) => {
  const { specialInstructions, specifyAssets } = instructions || {};
  return `
    <div>

    ${
      specifyAssets &&
      `
        <div class>
            <p><strong>APPENDIX TO WILL </strong></p>
  
            <p class="my-6">
              Note: List of assets and other special instructions will be listed
              here and attached to the Will as part of an Appendix. These
              instructions are not mandatory and are not legally binding, but they may help the Executor(s) locate your assets easily. Any specific gifts should be addressed under "Gift of Immovable Property" and
              "Gift of Monies" and not here
            </p>
            <p class="my-6"><strong>Listing of Assets: </strong></p>

            ${specifyAssets
              ?.map((item, i) => {
                const { asset, category, estimatedValue, description } =
                  item || {};
                return `
                    <div class="my-4">
              <p>#${i + 1} Asset</p>
  
              <table style="border: 1px solid black">
                <tr>
                  <td  class="w-[500px] px-2"><small>Name of Asset:</small></td>
                  <td class="w-[300px] px-2"><small>Type:</small></td>
                  <td class="w-[33.33%] px-2">
                    <small>Estimated Value:</small>
                  </td>
                </tr>
  
                <tr class="text-left">
                  <th  class="px-2">${asset}</th>
                  <th class="px-2">${category}</th>
                  <th class="px-2">$${estimatedValue}</th>
                </tr>
  
                <tr>
                  <th colspan="3" class="text-left px-2">
                   ${description}
                  </th>
                </tr>
              </table>
            </div>
                    `;
              })
              .join("")}
          </div>
        
        
        `
    }
          


  
          <div class="my-6">

          ${
            specialInstructions &&
            `

            <div>
            <p><strong>Special Instructions: </strong></p>
            <p class="my-6">
              ${specialInstructions}
            </p>
          </div>
            </div>
            
            
            `
          }
           
        </div>
    
    `;
};

export default assetsAndSpecialInstructions;
