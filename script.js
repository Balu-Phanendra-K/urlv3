
  const generatedUrls = [];

        function appendUTMandCID() {
            const url = document.getElementById('url').value;
            const campaignName = document.getElementById('campaignName').value;
            const cid = document.getElementById('cid').value;

            // Parse existing UTM parameters from the input URL
            const urlParts = url.split('?');
            let existingParams = '';
            if (urlParts.length > 1) {
                existingParams = '?' + urlParts[1];
            }

            // Construct the final URL with utmsrc and cid
            const finalUrl = `${urlParts[0]}?utm_source=sfmc&utm_medium=sms&utm_campaign=${encodeURIComponent(campaignName)}&utm_cid=${cid}${existingParams}`;

            // Add the final URL to the generatedUrls array
            generatedUrls.unshift(finalUrl);
            if (generatedUrls.length > 10) {
                generatedUrls.pop(); // Remove the oldest URL
            }

            // Update the output textarea with the generated URLs
            document.getElementById('outputTextarea').value = generatedUrls.join('\n');
        }
