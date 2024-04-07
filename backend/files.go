package backend

import (
	"context"
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"io"
	"os"
)

type Backend struct {
	ctx context.Context
}

var counter = 0

func generateHash(file io.Reader) string {
	hash := sha256.New()
	if _, err := io.Copy(hash, file); err != nil {
		return ""
	}
	return hex.EncodeToString(hash.Sum(nil))
}

func (b *Backend) UploadFile(base64File string, originalFileName string, fileSize string) error {
	decodedFile, err := base64.StdEncoding.DecodeString(base64File)
	if err != nil {
		return err
	}

	tempFile, err := os.CreateTemp("", "upload-*")
	if err != nil {
		return err
	}
	defer tempFile.Close()

	_, err = tempFile.Write(decodedFile)
	if err != nil {
		return err
	}

	// Reset file pointer for hash generation
	_, err = tempFile.Seek(0, io.SeekStart)
	if err != nil {
		return err
	}

	hash := generateHash(tempFile)

	created_activity := &Activity{
		Name:   originalFileName,
		Size:   fileSize,
		Hash:   hash,
		Status: "Uploaded",
		Peers:  0,
		ID:     counter,
	}
	b.SetActivity(*created_activity)
	counter += 1

	return nil
}
