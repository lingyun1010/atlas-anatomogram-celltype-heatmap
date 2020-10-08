# Integration component of organ-anatomogram and cell-type vs marker-gene heatmap

## Instructions

***Because organ-anatomogram and cell-type-marker-gene-heatmap are not published yet, so we create local npm packages to install.***

### Clone organ-anatomogram repository
```
git clone https://github.com/ebi-gene-expression-group/organ-anatomogram.git
cd organ-anatomogram
git checkout origin/feature/164401762-add-kidney-svgs
npm install
npm pack
pwd
```

Suppose that we get the absolute path for this repository is `/AAA/BBB/CCC`, as the output of `pwd`.
### Clone cell-type-marker-gene-heatmap repository
```
git clone https://github.com/ebi-gene-expression-group/atlas-components
cd atlas-components
git checkout origin/feature/173469905-add-experiment-celltype-package
cd packages/scxa-experiment-cell-type-heatmap
npm install
npm pack
pwd
```
Suppose that we get the absolute path for this repository is `/AAA/BBB/DDD`, as the output of `pwd`.

### Clone this repository and install local packages
```
git clone https://github.com/lingyun1010/atlas-anatomogram-celltype-heatmap.git
cd atlas-anatomogram-celltype-heatmap
npm install
npm install --save /AAA/BBB/CCC
npm install --save /AAA/BBB/DDD
```

## Run it on your browser
Use Webpack-Dev-Server:
```
npx webpack-dev-server -d
```
