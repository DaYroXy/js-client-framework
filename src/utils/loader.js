

async function loader(dir) {
    const directory = await fetch(dir);
    const html = await directory.text();
    const parser = new DOMParser().parseFromString(html, 'text/html');
    let files = [...parser.querySelectorAll('#files li a')]

    files = files.map((files, index) => {
        return index === 0 ? null : files.getAttribute('href').split("/").at(-1)
    }).filter((file) => file !== null)

    return files;
}


export default loader

