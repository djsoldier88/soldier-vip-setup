document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    await navigator.clipboard.writeText(button.dataset.copy);
    button.textContent = 'Скопировано';
    window.setTimeout(() => { button.textContent = 'Копировать'; }, 1800);
  });
});

const downloads = window.SOLDIER_VIP_DOWNLOADS || {};
document.querySelectorAll('[data-download]').forEach((link) => {
  const platform = link.dataset.download;
  const url = downloads[platform];
  if (!url) return;
  link.href = url;
  link.target = '_blank';
  link.rel = 'noreferrer';
  const note = document.querySelector(`[data-download-note="${platform}"]`);
  const version = window.SOLDIER_VIP_VERSIONS?.[platform];
  if (note) note.textContent = version ? `Soldier VIP ${version}${platform === 'windows' ? ' · Редактируемый проект и Инструкции.txt на рабочем столе.' : ' · Apple M.'}` : 'Актуальная версия Soldier VIP.';
});
