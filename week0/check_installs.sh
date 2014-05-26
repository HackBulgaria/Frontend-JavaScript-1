hash node 2>/dev/null || { echo >&2 "NodeJS is not installed"; exit 1; }
hash jshint 2>/dev/null || { echo >&2 "JSHint is not in stalled"; exit 1; }

echo "Everything is OK"
