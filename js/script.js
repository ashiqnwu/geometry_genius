document.getElementById('triangle-edit-button').addEventListener('click',function(){
    document.getElementById('triangle-input-area').classList.remove('hidden');
})
document.getElementById('triangle-checkbox').addEventListener('click',function(){
    const heightInput = parseFloat(document.getElementById('triangle-height-input-field').value);
    const baseInput = parseFloat(document.getElementById('triangle-base-input-field').value);
    console.log(heightInput,baseInput);
    document.getElementById('triangle-base-inner-text').innerText = baseInput;
    document.getElementById('triangle-height-inner-text').innerText = heightInput;
    document.getElementById('triangle-checkbox').checked = false;
    document.getElementById('triangle-input-area').style.display ='none';

})
document.getElementById('triangle-area-calculate-button').addEventListener('click',function(){
    const triangleBaseInnerText = parseFloat(document.getElementById('triangle-base-inner-text').innerText);
    const triangleHeightInnerText = parseFloat(document.getElementById('triangle-height-inner-text').innerText);
    const triangleArea = (0.5*triangleBaseInnerText*triangleHeightInnerText).toFixed(2);
    console.log(triangleArea);
    const li = document.createElement('li');
    li.innerHTML = '<li class="flex justify-center gap-2 items-center">\n<p>Triangle</p>\n<p>'+triangleArea+' cm<sup>2</sup></p>\n<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">Convert to m<sup>2</sup></button>\n</li>';
    
    document.getElementById('area-calculate-ol').appendChild(li);

})