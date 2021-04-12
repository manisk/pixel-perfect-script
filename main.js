const mocker = ({ desktopImage = "", mobileImage = "", desktopWidth = '1440px', mobileWidth = '500px' } = {}) => {

    const html = `
 <div class="__mock-up __mock-up-desktop">
        <img src="${desktopImage}" alt="" style="width:${desktopWidth}; margin:auto">
    </div>

    <!-- MOBILE PREVIEW -->
    <div class="__mock-up __mock-up-mobile">
        <img src="${mobileImage}" alt="" style="width:100%">
    </div>
`;
    const css = `
.__mock-up {
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.1;
    pointer-events: none;
    justify-content: center;
    z-index: 1000;
}

.__mock-up-mobile {
    display: none;
}

.__mock-up-desktop {
    display: flex;
}

@media(max-width: ${mobileWidth}) {
    .__mock-up-mobile {
        display: flex;
    }
    .__mock-up-desktop {
        display: none;
    }
}
`
const style = document.createElement('style');
style.innerHTML = css;

const div = document.createElement('div');
div.innerHTML = html;
    
    return {
        show(){
            document.head.appendChild(css)
            document.body.appendChild(html)
        },
        hide(){
            document.body.removeChild(html)
            document.head.removeChild(css)
        }
    }

}
