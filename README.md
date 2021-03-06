[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://github.com/amclin/amc-drupal-theme/actions/workflows/release.yml/badge.svg)](https://github.com/amclin/amc-drupal-theme/actions/workflows/release.yml)
[![dependencies Status](https://david-dm.org/amclin/amc-drupal-theme/status.svg)](https://david-dm.org/amclin/amc-drupal-theme)
[![devDependencies Status](https://david-dm.org/amclin/amc-drupal-theme/dev-status.svg)](https://david-dm.org/amclin/amc-drupal-theme?type=dev)
# amc-drupal-theme
Drupal theme used for [AnthonyMcLin.com](https://anthonymclin.com)

This is provided as an example for developing your own theme. It is highly-tailored for my site configurations and likely not usable out-of-box for yours.

### To use:
#### Option 1: Download
  1. Download the contents of `dist/amc` folder into the `sites/all/themes/` folder in your Drupal installation so the final location is `sites/all/themes/amc/`
#### Option 2: Clone and Compile
  1. Clone the repo to your local environment.
  2. Run `npm install` to install Node dependencies.
  3. Run `npm run build` to compile the theme.
  4. Copy the entire resulting `dist/amc` folder into the `sites/all/themes/` folder in your Drupal installation so the final location is `sites/all/themes/amc/`