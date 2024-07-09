// script.js

function downloadFiles() {
    const links = [
        'https://drive.google.com/uc?export=download&id=18x76gyNHXa9dftw52gFjpmgWvvfUjZYw',
        'https://drive.google.com/uc?export=download&id=1P_3UwkfxCgD55Ogy38OTN13wPt44U7CW',
        'https://drive.google.com/uc?export=download&id=1tCC0KgUF1f60A5UF5f-ylhK92P8pELtC',
        'https://drive.google.com/uc?export=download&id=1ps18faCVUVR_EzPTjOIYgBcxV39Wvo6z',
        'https://drive.google.com/uc?export=download&id=1moTbPH-SGkz1ltajADEZFBuxXIKYdgSq',
        'https://drive.google.com/uc?export=download&id=197I0k0sDtquOnFf5zWgfg8yXCyJoaNI6',
        'https://drive.google.com/uc?export=download&id=1Ilq5uafLHr-LusmIwGAuyGLBRiV7OQR3',
        'https://drive.google.com/uc?export=download&id=1oRPHjyUGU7tsopCeGjMMCfUiTwmbRGRk',
        'https://drive.google.com/uc?export=download&id=1GNgd72rTFbRaqnZQODN1_BMcKoE1qpEF',
        'https://drive.google.com/uc?export=download&id=1Gv2nePttNYEvHJtG2YwdWjYACaFQJNOb',
        'https://drive.google.com/uc?export=download&id=1gBQhxVAHyi6hsrxNGdT678OZxTiwZ8hU',
        'https://drive.google.com/uc?export=download&id=1hZFT2B_l_vGBDwHrRl8tfVowxrS9E30K',
        'https://drive.google.com/uc?export=download&id=1bUwfKYU1dnpDjwcddEx3pOGUv1kx8-Ep',
        'https://drive.google.com/uc?export=download&id=1_EDY8WoGJ2l6QR20rLJflZyzWhh7yksb',
        'https://drive.google.com/uc?export=download&id=1EXcPauIfWZqN84U7iM54VdZb-a7utbLt',
        'https://drive.google.com/uc?export=download&id=1mQttCHBbJJvzuMSxaA_7w2I1xhCwFlr7',
        'https://drive.google.com/uc?export=download&id=1XIQ1J-hEspdSuGT-yQupxdfOLknxDDDz',
        'https://drive.google.com/uc?export=download&id=1WcU1sLSwNopmBpzF-XLcGEKvRKMt-DDK',
        'https://drive.google.com/uc?export=download&id=1dfOP69Y6-pQYMUGfmcG6gHvaf9H-912F',
        'https://drive.google.com/uc?export=download&id=1r8vUEbHne2GhS0o912EqEjfOZWdBKiiz'
    ];

    let index = 0;
    const delay = 20000; // 20 seconds
    const progressBar = document.getElementById('progress-bar');
    const completeMessage = document.getElementById('complete-message');
    const remainingDownloads = document.getElementById('remaining-downloads');

    completeMessage.style.display = 'none';

    // Show remaining downloads text
    remainingDownloads.style.display = 'block';

    function downloadNext() {
        if (index >= links.length) {
            progressBar.style.width = '100%'; // Ensure progress bar is full at the end
            completeMessage.style.display = 'block';
            remainingDownloads.style.display = 'none'; // Hide remaining downloads text
            return;
        }

        const a = document.createElement('a');
        a.href = links[index];
        a.download = '';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        index++;
        updateRemainingDownloads();
        startProgressBar();
        setTimeout(downloadNext, delay);
    }

    function startProgressBar() {
        let progress = 0;
        progressBar.style.width = '0%';

        const interval = delay / 100; // Update every 1% of the delay
        const progressInterval = setInterval(() => {
            progress += 1;
            progressBar.style.width = progress + '%';
            if (progress >= 100) clearInterval(progressInterval);
        }, interval);
    }

    function updateRemainingDownloads() {
        const remaining = links.length - index;
        if (remaining === 0) {
            remainingDownloads.textContent = 'Almost there!';
        } else {
            remainingDownloads.textContent = `Pictures remaining: ${remaining}`;
        }
    }

    updateRemainingDownloads(); // Initialize remaining count
    downloadNext();
}

function closeTab() {
    // Attempt to close the current tab
    if (window.confirm("Are you sure you want to close this tab?")) {
        window.open('', '_self').close();
    } else {
        alert("Your browser may not allow scripts to close the tab. Please close it manually.");
    }
}