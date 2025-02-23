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
    {
      type: "confirm",
      name: "useGitAutomation",
      message: "Do you want to run the git automation?",
      default: true,
    },
  ]);

  if (!answers.useGitAutomation) {
    console.log("Exiting...");
    return; // Exit if user does not want to run the git automation
  }

  const questions = [
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
    {
      type: "confirm",
      name: "confirmCommit",
      message: "Are you sure you want to commit these changes?",
      default: true,
    },
    {
      type: "confirm",
      name: "confirmPush",
      message:
        "Are you sure you want to push this branch to the remote repository?",
      default: true,
    },
  ];

  const {
    createBranch,
    branchName,
    commitMessage,
    confirmCommit,
    confirmPush,
  } = await inquirer.prompt(questions);

  return {
    createBranch,
    branchName,
    commitMessage,
    confirmCommit,
    confirmPush,
  };
};

// Create a new branch, add changes, commit, and push to the remote
const gitAutomation = async () => {
  try {
    const {
      createBranch,
      branchName,
      commitMessage,
      confirmCommit,
      confirmPush,
    } = await askQuestions();

    if (!createBranch && !confirmCommit && !confirmPush) return; // Exit if user does not want to run the git automation

    // Create a new branch if requested
    if (createBranch) {
      console.log(`Creating and switching to branch ${branchName}...`);
      await runCommand(`git checkout -b ${branchName}`);
    }

    // Add all changes automatically
    console.log("Adding all changes...");
    await runCommand("git add .");

    // Ask for commit confirmation
    if (confirmCommit) {
      console.log(`Committing changes with message: ${commitMessage}...`);
      await runCommand(`git commit -m "${commitMessage}"`);
    } else {
      console.log("Commit cancelled.");
      return; // Exit if commit is cancelled
    }

    // Ask for push confirmation
    if (confirmPush) {
      console.log("Pushing the branch to the remote repository...");
      await runCommand(`git push origin ${branchName || "main"}`); // Push to 'main' if no new branch created
      console.log("Changes pushed successfully!");
    } else {
      console.log("Push cancelled.");
    }
  } catch (error) {
    console.error("Error in git operations:", error);
  }
};

// Export the gitAutomation function
// export { gitAutomation };

gitAutomation();
