const $ = (selector) => document.querySelector(selector);

const supported = 'share' in navigator;
const butShare = $('#butShare');
const divResult = $('#divResult');

if (supported) {
  const divNotSupported = $('#notSupported');
  divNotSupported.classList.toggle('hidden', true);
  butShare.removeAttribute('disabled');
  butShare.addEventListener('click', (e) => {
    console.log('👍', 'butShare-clicked', e);
    e.preventDefault();
    const shareOpts = {
      title: 'Jabberwocky',
      text: 'Check out this great poem about a Jabberwocky.',
      url: 'https://en.wikipedia.org/wiki/Jabberwocky',
    };
    navigator
      .share(shareOpts)
      .then((e) => {
        const msg = 'navigator.share succeeded.';
        divResult.textContent = msg;
        console.log('👍', msg, e);
      })
      .catch((err) => {
        const msg = 'navigator.share failed';
        divResult.textContent = `${msg}\n${JSON.stringify(err)}`;
        console.error('👎', msg, err);
      });
  });
}
