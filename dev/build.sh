#!/bin/sh -e

cd $(dirname "$0")

distd=".."

cat css/basscss/build/bass.css css/main.css css/bebasneue.css > ${distd}/bundle.css
css="<style>$(cleancss --skip-import ${distd}/bundle.css)</style>"
rm ${distd}/bundle.css

cat <<EOF >${distd}/index.html
<!doctype html>
<html>
<head>
$(cat html/head.html)
$css
</head>
<body>
$(cat html/svg-defs.svg)
$(cat html/body.html)
<script>
$(cat js/outdated-browser.js)
$(cat js/signup-form.js)
$(cat js/app-screenshot-rotation.js)
</script>
</body>
</html>
EOF

