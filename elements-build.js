const fs = require('fs-extra');
const concat = require('concat');

(
    async function build() {
        const files = [
            './dist/TableElement/runtime.js',
            './dist/TableElement/polyfills.js',
            './dist/TableElement/scripts.js',
            './dist/TableElement/main.js'

        ]

        await fs.ensureDir('elements')
        await concat(files, 'elements/customElements.js')
        await fs.copyFile('./dist/TableElement/styles.css', 'elements/styles.css')
            // await fs.copy('./dist/TableElement/assets/', 'elements/assets/')
    }
)()