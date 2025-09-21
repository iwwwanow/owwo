package utils

import (
	"fmt"
	"os/exec"
)

func GitPullIfNeeded(dirPath string) error {
	cmd := exec.Command("git", "-C", dirPath, "pull", "--rebase")

	_, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("git pull failed: %v", err)
	}

	return nil
}
