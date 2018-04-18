package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"os"
)

func main() {

	input, err := ioutil.ReadFile(os.Args[1])
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	output := bytes.Replace(input, []byte("div"), []byte("View"), -1)
	output = bytes.Replace(output, []byte("theme => "), []byte("StyleSheet.create"), -1)
	output = bytes.Replace(output, []byte("className"), []byte("style"), -1)
	output = bytes.Replace(output, []byte("classes"), []byte("styles"), -1)
	output = bytes.Replace(output, []byte("Typography"), []byte("Text"), -1)
	output = append(output, "import { View, Text, StyleSheet } from 'react-native';\n"...)

	if err = ioutil.WriteFile(os.Args[1], output, 0666); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
