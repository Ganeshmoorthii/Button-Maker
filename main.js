let customBtnEl = document.getElementById('customButton');
let applyButtonEl = document.getElementById('applyButton');
let borderRadiusEl = document.getElementById('borderRadiusInput');
let paddingEl = document.getElementById('paddingInput');
let fontWeightEl = document.getElementById('fontWeightInput');
let fontSizeEl = document.getElementById('fontSizeInput');
let fontColorEl = document.getElementById('fontColorInput');
let backgroundColorEl = document.getElementById('bgColorInput');

applyButtonEl.addEventListener('click',function(){
    customBtnEl.style.backgroundColor = backgroundColorEl.value;
    customBtnEl.style.color = fontColorEl.value;
    customBtnEl.style.fontSize = fontSizeEl.value;
    customBtnEl.style.fontWeight = fontWeightEl.value;
    customBtnEl.style.padding = paddingEl.value;
    customBtnEl.style.borderRadius = borderRadiusEl.value;
});
