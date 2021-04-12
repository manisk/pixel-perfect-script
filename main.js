 const mocker = ({
            desktopImage = "",
            mobileImage = "",
            desktopWidth = '1440px',
            mobileWidth = '500px'
        } = {}) => {

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

            function show() {
                isShowing = true
                document.head.appendChild(styleTag)
                document.body.appendChild(divTag)
                addButton()
            };

            function hide() {
                isShowing = false
                document.body.removeChild(divTag)
                document.head.removeChild(styleTag)
                addButton()
            }

            let isShowing = false;
            const styleTag = document.createElement('style');
            styleTag.innerHTML = css;

            const divTag = document.createElement('div');
            divTag.innerHTML = html;
            let buttonTag;
            let addedButton = false

            function addButton() {
                if (addedButton) {
                    document.body.removeChild(buttonTag);
                }
                buttonTag = document.createElement('button');
                buttonTag.style.position = 'fixed';
                buttonTag.style.position = 'fixed';
                buttonTag.style.top = '50px';
                buttonTag.style.border = 'none';
                buttonTag.style.padding = '10px';
                buttonTag.style.borderRadius = '10px';
                buttonTag.style.opacity = '0.7';
                buttonTag.style.left = '50px';
                buttonTag.innerText = isShowing ? "Hide mock" : "Show mock";
                document.body.appendChild(buttonTag);
                buttonTag.addEventListener('click', function() {
                    if (isShowing) {
                        hide()
                    } else {
                        show()
                    }
                });
                addedButton = true;
            }




            addButton();


            return {
                show,
                hide
            }

        }
