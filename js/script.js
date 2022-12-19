const db = window.db_temp;

function createArmorTemplate(name) {
    return `
        <li><a href="">${name}</a></li>
    `;
}

function setArmorsLinks() {
    const element = document.getElementById('list_armor');
    if (element) {
        const armorTemplates = db.armors_types.map((type) => {
            console.log(type);
            return createArmorTemplate(type.name);
        });
        element.innerHTML = armorTemplates.join('');
    }
}

setArmorsLinks();
