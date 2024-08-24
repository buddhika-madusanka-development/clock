const timeBlock = document.querySelector('.time');

setInterval(() => {

    const realTime = new Date();
    const hour = realTime.getHours();
    const minitues = realTime.getMinutes();
    const seconds = realTime.getSeconds();
    let timeState = 'AM';

    if(hour >= 12){
        timeState = 'PM';
    }

    const span = document.createElement('span');
    span.textContent = timeState

    timeBlock.innerText = `${hour} : ${minitues} : ${seconds} `;
    timeBlock.appendChild(span)

}, 1000)
