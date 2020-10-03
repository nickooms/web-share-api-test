const butShare = $('#butShare');
const divResult = $('#divResult');

const share = async (e) => {
  e.preventDefault();
  const shareOpts = {
    title: 'shared title',
    text: 'shared text',
    url: 'https://en.wikipedia.org/wiki/share',
  };
  try {
    await navigator.share(shareOpts);
    divResult.textContent = 'navigator.share succeeded.';
  } catch (err) {
    divResult.textContent = `navigator.share failed\n${JSON.stringify(err)}`;
  }
};

if ('share' in navigator) {
  $('#notSupported').classList.toggle('hidden', true);
  butShare.removeAttribute('disabled');
  butShare.addEventListener('click', share);
}
