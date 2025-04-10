function toggleDetails(button) {
  const wrapper = button.closest('.project-entry').querySelector('.details-wrapper');
  const icon = button.querySelector('i');

  const isCollapsed = wrapper.style.height === '' || wrapper.style.height === '0px';

  if (isCollapsed) {
    wrapper.style.height = 'auto'; // 자동 높이 측정
    const fullHeight = wrapper.scrollHeight + 'px'; // 미리 높이 계산
    wrapper.style.height = '0px'; // 다시 닫기 상태로 초기화

    requestAnimationFrame(() => {
      wrapper.style.height = fullHeight;
    });

    icon.classList.remove('fa-chevron-down');
    icon.classList.add('fa-chevron-up');
  } else {
    wrapper.style.height = wrapper.scrollHeight + 'px'; // 현재 높이로 설정 후
    requestAnimationFrame(() => {
      wrapper.style.height = '0px'; // 그 다음 프레임에 줄이기
    });

    icon.classList.remove('fa-chevron-up');
    icon.classList.add('fa-chevron-down');
  }
}
