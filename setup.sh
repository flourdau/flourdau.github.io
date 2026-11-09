#!/usr/bin/env bash
set -e

if [ ! -d src/depotsGIT/fonts ]; then
  git clone git@github.com:flourdau/fonts.git src/depotsGIT/fonts
  git -C src/depotsGIT/fonts checkout -B IA
  git -C src/depotsGIT/fonts checkout 3a78cf5 -- Icons OpenSans font-awesome-5.15.1
fi

if [ -d ../flourdau ]; then
  cp ../flourdau/flourdau.resume.json public/flourdau.resume.json
  cp ../flourdau/flourdau.resume.json src/flourdau.resume.json
  cp ../flourdau/README.md public/README.md
  cp ../flourdau/flourdau.pdf public/flourdau.pdf
  cp -r ../flourdau/IMG public/
fi

npm install --no-audit --no-fund
npm run build
