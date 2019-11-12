#!/bin/bash

hugo --minify
hugo deploy --maxDeletes -1
