const butShare = $('#butShare');
const divResult = $('#divResult');

const share = (e) => {
  e.preventDefault();
  const shareOpts = {
    title: 'Jabberwocky',
    text: 'Check out this great poem about a Jabberwocky.',
    url: 'https://en.wikipedia.org/wiki/Jabberwocky',
  };
  navigator
    .share(shareOpts)
    .then((e) => {
      divResult.textContent = 'navigator.share succeeded.';
    })
    .catch((err) => {
      divResult.textContent = `navigator.share failed\n${JSON.stringify(err)}`;
    });
};

if ('share' in navigator) {
  const divNotSupported = $('#notSupported');
  divNotSupported.classList.toggle('hidden', true);
  butShare.removeAttribute('disabled');
  butShare.addEventListener('click', share);
}
