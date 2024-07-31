const { execSync } = require('child_process');

const project = process.argv[2];

if (!project) {
  console.log('프로젝트 이름을 함께 넣어주세요.');
  console.log('node install.js {프로젝트 이름}');
  return;
}

try {
  const fs = require('fs');

  const editPackangeJSON = () => {
    const packageJSON = require(`./${project}/package.json`);
    packageJSON.name = project;
    fs.writeFileSync(`./${project}/package.json`, JSON.stringify(packageJSON, null, "\t"));
  };

  const createNvmrc = () => {
    const nodeVersion = execSync(`node -v`).toString();
    fs.writeFileSync(`./${project}/.nvmrc`, nodeVersion);
  };

  execSync(`rm -rf ${project}`);
  execSync(`cp -r template ${project}`);
  editPackangeJSON();
  createNvmrc();
} catch (error) {
  console.log(error);
}
