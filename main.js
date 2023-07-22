let stars = document.getElementById('stars');
    let moon = document.getElementById('moon');
    let mountain3 = document.getElementById('mountain3');
    let mountain4 = document.getElementById('mountain4');
    let river = document.getElementById('river');
    let boat = document.getElementById('boat');
    let TheXGhosT = document.querySelector('.The-XGhosT');

    window.onscroll = function(){
        let value = scrollY;
        stars.style.left = value * 0.5 + 'px';
        moon.style.top = value  * 3 + 'px';
        mountain3.style.top = value  * 2 + 'px';
        mountain4.style.top = value  * 1.5 + 'px';
        river.style.top = value   + 'px';
        boat.style.top = value   + 'px';
        boat.style.left = value * 2  + 'px';
        TheXGhosT.style.fontSize = value  + 'px';
        TheXGhosT.style.position ='fixed';
        if(value >= 120){
            TheXGhosT.style.fontSize = 120 + 'px'
            if(value >= 595)
            {
                TheXGhosT.style.display = 'none';
            }
            else
            {
                TheXGhosT.style.display = 'block'
            }

        }
        if(scrollY >= 227)
        {
            document.querySelector('.main').style.background='linear-gradient(#200016,#1f82c1)';
        }
        else
        {
            document.querySelector('.main').style.background='linear-gradient(#200016,black)';
        }
    }
    //Uncaught TypeError: Cannot read properties of null (reading 'style')
