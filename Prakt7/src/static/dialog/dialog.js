function getWindow(){

    let localWindow = document.createElement('div');
    //Создаём заголовок окна
    let windowTitle = document.createElement('div');

    let windowTitleText = document.createElement('p');

    let windowTitleClose = document.createElement('img');
    windowTitleClose.src = "../svg/close.svg";

    let windowTitlePlug = document.createElement('div');
    windowTitlePlug.style.width = "24px";

    windowTitle.append(windowTitlePlug);
    windowTitle.append(windowTitleText);
    windowTitle.append(windowTitleClose);
    windowTitle.classList.add("dialog_title");

    localWindow.append(windowTitle);
    localWindow.classList.add("dialog_window");

    return localWindow;
}

function getBlurBack(){
    let local_background = document.createElement('div');
    local_background.classList.add("dialog_blur_back");
    return local_background;
}