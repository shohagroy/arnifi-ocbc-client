const religionDetails = (instructions) => {
  return `
    <div class="flex justify-start mt-2">
            <p class="pr-2">5.</p>
            <p>
              I direct that upon my death, my funeral be held in accordance with
              <strong>${instructions?.religion}</strong> rites and my body be <strong>${instructions?.instructions}.</strong>
            </p>
    </div>
    

    `;
};

export default religionDetails;
