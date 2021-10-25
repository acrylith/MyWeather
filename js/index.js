function forecast() {
    let city = document.getElementById("city").value;
    if(city != null) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8e82a4c8f80f7ddcdd43515982ea3975`);
        xhr.send();

        xhr.addEventListener("readystatechange", () => {
            let Temp = document.querySelector(".desc__temp");
            let VText = document.querySelector(".visual__text");
            let Day = document.querySelector(".desc__day");
            let Date = document.querySelector(".desc__date");
            let Info = document.querySelectorAll(".main__info p");
            let weatherIcon = document.querySelector(".visual__icon img");
            let bgGradient;
            let cardBg = document.querySelector(".main__card");
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    const jsontd = xhr.responseText;
                    const data = JSON.parse(jsontd);
                    console.log(data);
                    if(Math.round(data.main.temp) > 0){
                        Temp.textContent ="+" + Math.round(data.main.temp) + "°";
                    } else{
                        Temp.textContent = Math.round(data.main.temp) + "°";
                    }
                    weatherIcon.src = `./icons/weather/${data.weather[0].icon}.svg`;
                    VText.textContent = data.weather[0].description;
                    Day.textContent = dayjs(data.dt * 1000).format('dddd');
                    Date.textContent = dayjs(data.dt * 1000).format('MMMM, DD');
                    if(Math.round(data.main.feels_like) > 0){
                        Info[0].textContent = "Feels like: +" + Math.round(data.main.feels_like) + "°";
                    } else{
                        Info[0].textContent = "Feels like: " + Math.round(data.main.feels_like) + "°";
                    }
                    Info[1].textContent = "Pressure: " + data.main.pressure;
                    if(Math.round(data.main.temp_min) > 0){
                        Info[2].textContent = "Temp.min: +" + Math.round(data.main.temp_min) + "°";
                    } else{
                        Info[2].textContent = "Temp.min: " + Math.round(data.main.temp_min) + "°";
                    }
                    if(Math.round(data.main.temp_max) > 0){
                        Info[3].textContent = "Temp.max: +" + Math.round(data.main.temp_max) + "°";
                    } else{
                        Info[3].textContent = "Temp.max: " + Math.round(data.main.temp_max) + "°";
                    }
                    Info[4].textContent = "Wind: " + data.wind.speed + "m/s, " + data.wind.deg + "deg";
                    Info[5].textContent = "Humidity: " + data.main.humidity + "%";
                    Info[6].textContent = "Sunrise: " + dayjs(data.sys.sunrise * 1000).format('HH:MM');
                    Info[7].textContent = "Sunset: " + dayjs(data.sys.sunset * 1000).format('HH:MM');
                    document.getElementById("defaultOpen").click();
                    switch(data.weather[0].icon) {
                        case '01d':
                            bgGradient = "background: radial-gradient(circle, rgba(241,203,98,1) 30%, rgba(236,164,63,1) 60%, rgba(226,134,48,1) 90%);";
                            break;
                        case '01n':
                            bgGradient = "background: radial-gradient(circle, rgba(53,40,199,1) 30%, rgba(33,21,166,1) 60%, rgba(20,11,124,1) 90%);";
                            break;
                        case '02d':
                            bgGradient = "background: radial-gradient(circle, rgba(232,179,155,1) 30%, rgba(199,140,112,1) 60%, rgba(173,116,90,1) 90%);";
                            break;
                        case '02n':
                            bgGradient = "background: radial-gradient(circle, rgba(103,114,177,1) 30%, rgba(79,90,148,1) 60%, rgba(51,60,108,1) 90%);";
                            break;
                        case '03d':
                            bgGradient = "background: radial-gradient(circle, rgba(0,164,255,1) 30%, rgba(34,148,233,1) 60%, rgba(65,133,213,1) 90%);";
                            break;
                        case '03n':
                            bgGradient = "background: radial-gradient(circle, rgba(54,70,235,1) 30%, rgba(41,54,195,1) 60%, rgba(24,35,150,1) 90%);";
                            break;
                        case '04d':
                            bgGradient = "background: radial-gradient(circle, rgba(175,175,175,1) 30%, rgba(142,142,142,1) 60%, rgba(124,124,124,1) 90%);";
                            break;
                        case '04n':
                            bgGradient = "background: radial-gradient(circle, rgba(161,124,205,1) 30%, rgba(119,92,150,1) 60%, rgba(85,65,108,1) 90%);";
                            break;
                        case '09d':
                            bgGradient = "background: radial-gradient(circle, rgba(62,217,188,1) 30%, rgba(32,194,164,1) 60%, rgba(6,148,122,1) 90%);";
                            break;
                        case '09n':
                            bgGradient = "background: radial-gradient(circle, rgba(107,148,141,1) 30%, rgba(73,144,131,1) 60%, rgba(43,105,94,1) 90%);";
                            break;
                        case '10d':
                            bgGradient = "background: radial-gradient(circle, rgba(97,230,132,1) 30%, rgba(59,224,103,1) 60%, rgba(17,175,59,1) 90%);";
                            break;
                        case '10n':
                            bgGradient = "background: radial-gradient(circle, rgba(107,148,141,1) 30%, rgba(73,144,131,1) 60%, rgba(43,105,94,1) 90%);";
                            break;
                        case '11d':
                            bgGradient = "background: radial-gradient(circle, rgba(159,59,226,1) 30%, rgba(135,27,177,1) 60%, rgba(71,5,137,1) 90%);";
                            break;
                        case '11n':
                            bgGradient = "background: radial-gradient(circle, rgba(159,59,226,1) 30%, rgba(135,27,177,1) 60%, rgba(71,5,137,1) 90%);";
                            break;
                        case '13d':
                            bgGradient = "background: radial-gradient(circle, rgba(136,219,241,1) 30%, rgba(137,205,210,1) 60%, rgba(143,179,193,1) 90%);";
                            break;
                        case '13n':
                            bgGradient = "background: radial-gradient(circle, rgba(167,142,228,1) 30%, rgba(154,130,203,1) 60%, rgba(127,80,161,1) 90%);";
                            break;
                        case '50d':
                            bgGradient = "background: radial-gradient(circle, rgba(154,154,151,1) 30%, rgba(105,105,103,1) 60%, rgba(73,73,73,1) 90%);";
                            break;
                        case '50n':
                            bgGradient = "background: radial-gradient(circle, rgba(110,110,110,1) 30%, rgba(65,65,65,1) 60%, rgba(29,29,29,1) 90%);";
                            break;
                        default:
                            bgGradient = "background-color: #02A8A8;";
                    }
                    cardBg.style = bgGradient;
                }else {
                    console.log(xhr.statusText);
                }
            }
        });

        const xfr = new XMLHttpRequest();
        xfr.open("GET", `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=8e82a4c8f80f7ddcdd43515982ea3975`);
        xfr.send();
        xfr.addEventListener("readystatechange", () => {
            let dis = document.querySelector("#display");
            while (dis.firstChild) {
                dis.removeChild(dis.firstChild);
            }
            if(xfr.readyState === 4) {
                if(xfr.status === 200) {
                    const jsonfd = xfr.responseText;
                    const datafd = JSON.parse(jsonfd);
                    console.log(datafd);
                    for(let i = 0; i < datafd.list.length; i++) {
                        let col = document.createElement("div");
                        // col.classList.add("col-xxl-3");
                        col.classList.add("col-lg-4");
                        col.classList.add("col-sm-6");
                        dis.appendChild(col);
                        let int = document.createElement("div");
                        int.classList.add("display__interval");
                        col.appendChild(int);
                        let date = document.createElement("p");
                        date.textContent = dayjs(datafd.list[i].dt * 1000).format('DD.MM');
                        date.classList.add("display__date");
                        int.appendChild(date);
                        let time = document.createElement("p");
                        time.classList.add("display__time");
                        time.textContent = dayjs(datafd.list[i].dt * 1000).format('HH.mm');
                        int.appendChild(time);
                        let visual = document.createElement("div");
                        visual.classList.add("display__visual");
                        visual.classList.add("visual");
                        int.append(visual);
                        let iconWrapper = document.createElement("div");
                        iconWrapper.classList.add("visual__icon");
                        visual.appendChild(iconWrapper);
                        let icon = document.createElement("img");
                        icon.src = `./icons/weather/${datafd.list[i].weather[0].icon}.svg`;
                        iconWrapper.appendChild(icon);
                        let description = document.createElement("p");
                        description.classList.add("visual__text");
                        description.textContent = datafd.list[i].weather[0].description;
                        visual.appendChild(description);
                        let temp = document.createElement("p");
                        temp.classList.add("display__temp");
                        if(Math.round(datafd.list[i].main.temp) > 0){
                            temp.textContent = "+" + Math.round(datafd.list[i].main.temp) + "°";
                        } else{
                            temp.textContent = Math.round(datafd.list[i].main.temp) + "°";
                        }
                        int.appendChild(temp);
                        let feelsLike = document.createElement("p");
                        feelsLike.classList.add("display__flike");
                        if(Math.round(datafd.list[i].main.feels_like) > 0){
                            feelsLike.textContent = "Feels like: +" + Math.round(datafd.list[i].main.feels_like) + "°";
                        } else{
                            feelsLike.textContent = "Feels like: " + Math.round(datafd.list[i].main.feels_like) + "°";
                        }
                        int.appendChild(feelsLike);
                        let pressure = document.createElement("p");
                        pressure.classList.add("display__pressure");
                        pressure.textContent = "Pressure: " + datafd.list[i].main.pressure + "mm";
                        int.appendChild(pressure);
                        let humidity = document.createElement("p");
                        humidity.classList.add("display__humidity");
                        humidity.textContent = "Humidity: " + datafd.list[i].main.humidity + "%";
                        int.appendChild(humidity);

                        let bgGradient;
                        switch(datafd.list[i].weather[0].icon) {
                            case '01d':
                                bgGradient = "background: radial-gradient(circle, rgba(241,203,98,1) 30%, rgba(236,164,63,1) 60%, rgba(226,134,48,1) 90%);";
                                break;
                            case '01n':
                                bgGradient = "background: radial-gradient(circle, rgba(53,40,199,1) 30%, rgba(33,21,166,1) 60%, rgba(20,11,124,1) 90%);";
                                break;
                            case '02d':
                                bgGradient = "background: radial-gradient(circle, rgba(232,179,155,1) 30%, rgba(199,140,112,1) 60%, rgba(173,116,90,1) 90%);";
                                break;
                            case '02n':
                                bgGradient = "background: radial-gradient(circle, rgba(103,114,177,1) 30%, rgba(79,90,148,1) 60%, rgba(51,60,108,1) 90%);";
                                break;
                            case '03d':
                                bgGradient = "background: radial-gradient(circle, rgba(0,164,255,1) 30%, rgba(34,148,233,1) 60%, rgba(65,133,213,1) 90%);";
                                break;
                            case '03n':
                                bgGradient = "background: radial-gradient(circle, rgba(54,70,235,1) 30%, rgba(41,54,195,1) 60%, rgba(24,35,150,1) 90%);";
                                break;
                            case '04d':
                                bgGradient = "background: radial-gradient(circle, rgba(175,175,175,1) 30%, rgba(142,142,142,1) 60%, rgba(124,124,124,1) 90%);";
                                break;
                            case '04n':
                                bgGradient = "background: radial-gradient(circle, rgba(161,124,205,1) 30%, rgba(119,92,150,1) 60%, rgba(85,65,108,1) 90%);";
                                break;
                            case '09d':
                                bgGradient = "background: radial-gradient(circle, rgba(62,217,188,1) 30%, rgba(32,194,164,1) 60%, rgba(6,148,122,1) 90%);";
                                break;
                            case '09n':
                                bgGradient = "background: radial-gradient(circle, rgba(107,148,141,1) 30%, rgba(73,144,131,1) 60%, rgba(43,105,94,1) 90%);";
                                break;
                            case '10d':
                                bgGradient = "background: radial-gradient(circle, rgba(97,230,132,1) 30%, rgba(59,224,103,1) 60%, rgba(17,175,59,1) 90%);";
                                break;
                            case '10n':
                                bgGradient = "background: radial-gradient(circle, rgba(107,148,141,1) 30%, rgba(73,144,131,1) 60%, rgba(43,105,94,1) 90%);";
                                break;
                            case '11d':
                                bgGradient = "background: radial-gradient(circle, rgba(159,59,226,1) 30%, rgba(135,27,177,1) 60%, rgba(71,5,137,1) 90%);";
                                break;
                            case '11n':
                                bgGradient = "background: radial-gradient(circle, rgba(159,59,226,1) 30%, rgba(135,27,177,1) 60%, rgba(71,5,137,1) 90%);";
                                break;
                            case '13d':
                                bgGradient = "background: radial-gradient(circle, rgba(136,219,241,1) 30%, rgba(137,205,210,1) 60%, rgba(143,179,193,1) 90%);";
                                break;
                            case '13n':
                                bgGradient = "background: radial-gradient(circle, rgba(167,142,228,1) 30%, rgba(154,130,203,1) 60%, rgba(127,80,161,1) 90%);";
                                break;
                            case '50d':
                                bgGradient = "background: radial-gradient(circle, rgba(154,154,151,1) 30%, rgba(105,105,103,1) 60%, rgba(73,73,73,1) 90%);";
                                break;
                            case '50n':
                                bgGradient = "background: radial-gradient(circle, rgba(110,110,110,1) 30%, rgba(65,65,65,1) 60%, rgba(29,29,29,1) 90%);";
                                break;
                            default:
                                bgGradient = "background-color: #02A8A8;";
                        }
                        int.style = bgGradient;
                    }
                }else {
                    console.log(xfr.statusText);
                }
            }
        });
    }
}



//tabs

function tabs(evt, name) {
    let tabcontent = document.getElementsByClassName("tabcontent");
    for(let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    let tablinks = document.getElementsByClassName("tablinks");
    for(let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }

    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active-tab";
}
