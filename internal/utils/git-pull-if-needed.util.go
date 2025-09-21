package utils

import (
	"fmt"
	"os/exec"
)

func GitPullIfNeeded(dirPath string) error {
	fmt.Printf("Attempting git pull from: %s\n", dirPath)

	cmd := exec.Command("git", "-C", dirPath, "pull", "--rebase")
	output, err := cmd.CombinedOutput()
	fmt.Printf("Git pull output: %s\n", string(output))

	if err != nil {
		return fmt.Errorf("git pull failed: %v", err)
	}

	return nil
}
