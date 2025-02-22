import { exec } from "child_process";
import inquirer from "inquirer"; // Correct ES Module import for Inquirer 9.x and above

// Function to run a shell command and log the output
const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error executing command: ${stderr}`);
      } else {
        resolve(stdout);
      }
    });
  });
};

// Ask the user for the branch name and commit message
const askQuestions = async () => {
  const answers = await inquirer.prompt([
    // Correct usage of prompt
    {
      type: "confirm",
      name: "createBranch",
      message: "Do you want to create a new branch?",
      default: true,
    },
    {
      type: "input",
      name: "branchName",
      message: "Enter the feature branch name:",
      when: (answers) => answers.createBranch, // Only ask for branch name if they chose to create a branch
      default: "feature/new-feature",
    },
    {
      type: "input",
      name: "commitMessage",
      message: "Enter the commit message:",
      default: "Initial commit for new feature",
    },
  ]);
  return answers;
};

// Create a new branch, add changes, commit, and push to the remote
const gitAutomation = async () => {
  try {
    const { createBranch, branchName, commitMessage } = await askQuestions();

    if (createBranch) {
      // Create a new branch and switch to it
      console.log(`Creating and switching to branch ${branchName}...`);
      await runCommand(`git checkout -b ${branchName}`);
    }

    // Add all changes
    console.log("Adding all changes...");
    await runCommand("git add .");

    // Commit the changes
    console.log(`Committing changes with message: ${commitMessage}...`);
    await runCommand(`git commit -m "${commitMessage}"`);

    // Push the branch to the remote repository
    console.log("Pushing the branch to the remote repository...");
    await runCommand(`git push origin ${branchName || "main"}`); // Push to 'main' if no new branch created

    console.log(`Changes committed and pushed successfully!`);
  } catch (error) {
    console.error("Error in git operations:", error);
  }
};

// Run the automation
gitAutomation();
