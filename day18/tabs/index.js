let activeTab = 'tab1';

const activateTab = (tabId) => {
  const linkToActivate = document.querySelector('#' + tabId + 'link'); //this is for the tabs
  const linkToDeactivate = document.querySelector('#' + activeTab + 'link');

  linkToActivate.classList.add('tabs__link--active'); //this is for the tabs
  linkToDeactivate.classList.remove('tabs__link--active');

  const tabElmToShow = document.querySelector('#' + tabId); //this is for the text
  const tabElmToHide = document.querySelector('#' + activeTab);
  
  tabElmToShow.style.display = 'block'; //this is for the text
  tabElmToHide.style.display = 'none';
  

  activeTab = tabId;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#tab1link').addEventListener(
    'click', () => activateTab('tab1')
  );
  document.querySelector('#tab2link').addEventListener(
    'click', () => activateTab('tab2')
  );
  document.querySelector('#tab3link').addEventListener(
    'click', () => activateTab('tab3')
  );
});
