const fs = require("fs");
const path = require("path");

/**
 * Creates or updates a .gitignore file if it does not already exist in the current directory or parent directory,
 * or if the existing .gitignore file does not contain the desired entries.
 * The .gitignore file will contain entries to ignore node_modules and .env files.
 */
function createGitignoreIfNotExists() {
  const currentDir = process.cwd();
  const parentDir = path.resolve(currentDir, "..");
  const currentGitignore = path.join(currentDir, ".gitignore");
  const parentGitignore = path.join(parentDir, ".gitignore");

  const gitignoreContent = `
# ignore node_modules folder
/node_modules

/uploads

# ignore .env file
/.env
`.trim();

  const doesGitignoreNeedUpdate = (filePath) => {
    if (!fs.existsSync(filePath)) {
      return true;
    }
    const existingContent = fs.readFileSync(filePath, "utf8");
    return !existingContent.includes(gitignoreContent);
  };

  const updateGitignore = (filePath) => {
    fs.writeFileSync(filePath, gitignoreContent);
  };

  if (doesGitignoreNeedUpdate(currentGitignore)) {
    updateGitignore(currentGitignore);
  } else if (doesGitignoreNeedUpdate(parentGitignore)) {
    updateGitignore(parentGitignore);
  }
}

module.exports = { createGitignoreIfNotExists };
