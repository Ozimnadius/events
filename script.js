window.addEventListener('load', function () {
    new Events();
});

class Events {
    constructor() {

        this.events = {
            click: {
                openMenu: this.openMenu,
                closeMenu: this.closeMenu,
                openForm: this.openForm,
                closeForm: this.closeForm,
            },
            submit: {
                sendForm: this.sendForm
            }
        }

        this.init();
    }

    init() {

        for (let key in this.events) {
            let items = this.events[key];

            document.querySelector('body').addEventListener(key, (e) => {
                for (let name in items) {
                    let target = e.target.closest(`[data-event="${name}"]`);
                    if (target !== null) {
                        items[name].call(this, e, target)
                    }
                }
            });
        }
    }

    openMenu(e, elem) {
        e.preventDefault();
        console.log('Open menu');
        console.log(this);
        console.log(e);
        console.log(elem);
    }

    closeMenu(e, elem) {
        e.preventDefault();
        console.log('Close menu');
        console.log(this);
        console.log(e);
        console.log(elem);
    }

    openForm(e, elem) {
        e.preventDefault();
        console.log('Open form');
        console.log(this);
        console.log(e);
        console.log(elem);
    }

    closeForm(e, elem) {
        e.preventDefault();
        console.log('Close form');
        console.log(this);
        console.log(e);
        console.log(elem);
    }

    sendForm(e, elem) {
        e.preventDefault();
        console.log('Send form');
        console.log(this);
        console.log(e);
        console.log(elem);

        fetch(elem.action, {
            method: 'POST',
            body: new FormData(elem)
        }).then(response => response.json()).then((data) => {
            console.log(this);
            console.log(data);
        });
    }

}