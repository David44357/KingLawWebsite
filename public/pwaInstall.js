console.log('Custom Header for PWA prompted');

let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
      deferredPrompt = e;
     console.log('deferred Prompt: '+deferredPrompt);
        
    });

    function promptInstall(){
       deferredPrompt.prompt();
    }

    // Listen for app install event
    window.addEventListener('appinstalled', () => {
      deferredPrompt = null;
      appInstalled();
    });

    // Track how PWA was launched (either from browser or as PWA)
    function getLaunchMode() {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      if(deferredPrompt) hasPrompt();
      if (document.referrer.startsWith('android-app://')) {
        appLaunchedAsTWA();
      } else if (navigator.standalone || isStandalone) {
        appLaunchedAsPWA();
      } else {
        window.appLaunchedInBrowser();
      }
    }
