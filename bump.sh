#!/bin/sh
# Bump the ?v= cache-busting token on every local asset in index.html.
# Run this before committing whenever app.js, styles.css or a content file changed,
# so students get the new files without needing a hard refresh.
V=$(date +%Y-%m-%d-%H%M)
sed -i -E "s/\?v=[0-9A-Za-z.-]+\"/?v=$V\"/g" index.html
echo "asset version -> $V"
