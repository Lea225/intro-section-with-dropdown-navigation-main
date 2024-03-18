document.addEventListener("DOMContentLoaded", function() {
  const iconMenu = document.getElementById('icon-menu');
  const navigation = document.querySelector('.navigation');
  const overlay = document.querySelector('.overlay');
  const mobileFeaturesBtn = document.querySelector('.mobile-feature-btn');
  const mobileCompanyBtn = document.querySelector('.mobile-company-btn');
  const mobileFeaturesDiv = document.querySelector('.mobile-feature');
  const mobileCompanyDiv = document.querySelector('.mobile-company');
  const featuresBtn = document.querySelector('.features-btn');
  const companyBtn = document.querySelector('.company-btn');
  const featuresDiv = document.querySelector('.features');
  const companyDiv = document.querySelector('.company');
  const iconCloseMenu = document.getElementById('icon-close-menu');
  const mobileFeaturesBtnIcon = mobileFeaturesBtn.querySelector('img');
  const mobileCompanyBtnIcon = mobileCompanyBtn.querySelector('img');
  const featuresBtnIcon = featuresBtn.querySelector('img');
  const companyBtnIcon = companyBtn.querySelector('img');

  iconMenu.addEventListener('click', function() {
    // Afficher la navigation et l'overlay
    navigation.style.display = 'block';
    overlay.style.display = 'block';
  });

  mobileFeaturesBtn.addEventListener('click', function() {
    // Afficher ou masquer les éléments mobile-feature et changer l'icône
    if (mobileFeaturesDiv.style.display === 'block') {
      mobileFeaturesDiv.style.display = 'none';
      mobileFeaturesBtnIcon.src = 'images/icon-arrow-down.svg';
    } else {
      mobileFeaturesDiv.style.display = 'block';
      mobileFeaturesBtnIcon.src = 'images/icon-arrow-up.svg';
    }
  });

  mobileCompanyBtn.addEventListener('click', function() {
    // Afficher ou masquer les éléments mobile-company et changer l'icône
    if (mobileCompanyDiv.style.display === 'flex') {
      mobileCompanyDiv.style.display = 'none';
      mobileCompanyBtnIcon.src = 'images/icon-arrow-down.svg';
    } else {
      mobileCompanyDiv.style.display = 'flex';
      mobileCompanyBtnIcon.src = 'images/icon-arrow-up.svg';
    }
  });

  featuresBtn.addEventListener('mouseover', function() {
    // Afficher les éléments features au survol
    featuresDiv.style.display = 'block';
    featuresBtnIcon.src = 'images/icon-arrow-up.svg';
  });

  featuresBtn.addEventListener('mouseout', function() {
    // Masquer les éléments features en sortant du survol
    featuresDiv.style.display = 'none';
    featuresBtnIcon.src = 'images/icon-arrow-down.svg';
  });

  companyBtn.addEventListener('mouseover', function() {
    // Afficher les éléments company au survol
    companyDiv.style.display = 'block';
    companyBtnIcon.src = 'images/icon-arrow-up.svg';
  });

  companyBtn.addEventListener('mouseout', function() {
    // Masquer les éléments company en sortant du survol
    companyDiv.style.display = 'none';
    companyBtnIcon.src = 'images/icon-arrow-down.svg';
  });

  iconCloseMenu.addEventListener('click', function() {
    // Cacher la navigation et l'overlay
    navigation.style.display = 'none';
    overlay.style.display = 'none';
  });
});
