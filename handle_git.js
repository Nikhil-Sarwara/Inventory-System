const fs = require("fs");
const path = require("path");
/**
 * Creates a .gitignore file if it does not already exist in the current directory or parent directory.
 * The created .gitignore file will contain entries to ignore node_modules and .env files.
 */
function createGitignoreIfNotExists() {
  const currentDir = process.cwd();
  const parentDir = path.resolve(currentDir, "..");
  const currentGitignore = path.join(currentDir, ".gitignore");
  const parentGitignore = path.join(parentDir, ".gitignore");

  if (!fs.existsSync(currentGitignore) && !fs.existsSync(parentGitignore)) {
    fs.writeFileSync(
      currentGitignore,
      `
# ignore node_modules folder
/node_modules

# ignore .env file
/.env
`
    );
  }
}

module.exports = { createGitignoreIfNotExists };
