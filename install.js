const { execSync } = require('child_process');

const templateTypes = ['babel', 'ts'];

const project = process.argv[2];
const templateType = process.argv[3];

if (!project) {
  console.log('프로젝트 이름을 넣어주세요.');
  console.log('node install.js <프로젝트 이름> <템플릿 유형>');
  return;
}

if (!templateTypes.includes(templateType)) {
  console.log('템플릿 유형을 넣어주세요.(babel 또는 ts)');
  console.log('node install.js <프로젝트 이름> <템플릿 유형>');
}

try {
  const fs = require('fs');
  const projectRoot = `project/${project}`;

  const ready = () => {
    execSync(`rm -rf ${project}`);
    if (!fs.existsSync('project')) {
      execSync(`mkdir project`);
    }
    execSync(`cp -r template/babel ${projectRoot}`);
  };

  const editPackangeJSON = () => {
    const packageJSON = require(`./${projectRoot}/package.json`);
    packageJSON.name = project;
    fs.writeFileSync(`./${projectRoot}/package.json`, JSON.stringify(packageJSON, null, "\t"));
  };

  const createNvmrc = () => {
    const nodeVersion = execSync(`node -v`).toString();
    fs.writeFileSync(`./${projectRoot}/.nvmrc`, nodeVersion);
  };

  ready();
  editPackangeJSON();
  createNvmrc();
} catch (error) {
  console.log(error);
}
