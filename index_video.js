



((c,d)=> {
    const PLAYER_ID = 'player-item';

    const button_video = d.getElementById('button_video');
    const button_video2 = d.getElementById('button_video_2');
    const player_container= d.getElementById('team-video');
    const player_item =videojs(PLAYER_ID)
    const source = d.getElementById('source')


    const handlerEventButton= async (button)=> {
        button.addEventListener('click',async () => {
            const link_video = button.value;
            console.log(link_video)


            player_item.src(
                {
                    src : `assets/${link_video}`,
                    type : "video/mp4"
                }
            )
            player_item.play();

            handlerShowVideo(player_container)

        })

    }
    const handlerShowVideo= (element)=> {

        return element.style.display === 'none' ? element.style.display= 'block' : element.style.display='none';

    }

    handlerEventButton(button_video)
    handlerEventButton(button_video2)

})(console.log, document);